import axios from "axios";
import spotifyRequest from "./spotifyApi";

export const getPodcastInfo = async (podcastId) => {
  try {
    const response = await axios.get(`/api/itunes/lookup`, {
      params: { id: podcastId },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching podcast info:", error);
    throw error;
  }
};

export const getPodcastEpisodes = async (podcastId, limit = 100) => {
  try {
    const response = await axios.get(`/api/itunes/lookup`, {
      params: {
        id: podcastId,
        entity: "podcastEpisode",
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching podcast episodes:", error);
    throw error;
  }
};

export const getSpotifyPodcastInfo = async (spotifyShowId) => {
  try {
    return await spotifyRequest(`/shows/${spotifyShowId}`, {
      method: "get",
      params: { market: "US" },
    });
  } catch (error) {
    console.error("Error fetching Spotify podcast info:", error);
    throw error;
  }
};

export const getSpotifyPodcastEpisodes = async (spotifyShowId, limit = 20) => {
  try {
    return await spotifyRequest(`/shows/${spotifyShowId}/episodes`, {
      method: "get",
      params: { limit, market: "US" },
    });
  } catch (error) {
    console.error("Error fetching Spotify podcast episodes:", error);
    throw error;
  }
};
