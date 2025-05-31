const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: true }));

app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  next();
});

let spotifyToken = null;
let tokenExpiry = null;



const getSpotifyToken = async () => {
  if (spotifyToken && tokenExpiry && Date.now() < tokenExpiry) {
    return spotifyToken;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing Spotify credentials");
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  spotifyToken = response.data.access_token;
  tokenExpiry = Date.now() + (response.data.expires_in - 60) * 1000;

  return spotifyToken;
};


app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Firebase Function" });
});

app.get("/api/spotify/*", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const spotifyPath = req.params[0];

    const response = await axios.get(`https://api.spotify.com/v1/${spotifyPath}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: req.query
    });

    res.json(response.data);
  } catch (err) {
    logger.error("Spotify proxy error", err.message);
    res.status(500).json({ error: "Spotify API error" });
  }
});

app.get("/api/itunes/*", async (req, res) => {
  try {
    const itunesPath = req.params[0];
    const response = await axios.get(`https://itunes.apple.com/${itunesPath}`, {
      params: req.query
    });

    res.set("Cache-Control", "public, max-age=300");
    res.json(response.data);
  } catch (err) {
    logger.error("iTunes proxy error", err.message);
    res.status(500).json({ error: "iTunes API error" });
  }
});

// ✅ SSR fallback
app.get("*", (req, res) => {
  const html = fs.readFileSync(path.join(__dirname, "../dist/index.html"), "utf8");
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  res.send(html);
});

exports.ssr = onRequest(app);