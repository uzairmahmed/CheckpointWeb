import axios from 'axios';

// Token storage
let spotifyToken = null;
let tokenExpiry = null;

/**
 * Get Spotify access token using client credentials flow
 * @returns {Promise<string>} Access token
 */
const getSpotifyToken = async () => {
  try {
    // Check if we have a valid token
    if (spotifyToken && tokenExpiry && Date.now() < tokenExpiry) {
      return spotifyToken;
    }

    // Get client credentials from environment variables
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      throw new Error('Spotify client ID or secret not found in environment variables');
    }

    // Base64 encode the client ID and secret
    const auth = btoa(`${clientId}:${clientSecret}`);

    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'grant_type=client_credentials'
    });

    spotifyToken = response.data.access_token;
    // Set token expiry (subtract 60 seconds to be safe)
    tokenExpiry = Date.now() + (response.data.expires_in - 60) * 1000;
    
    return spotifyToken;
  } catch (error) {
    console.error('Error getting Spotify token:', error);
    throw error;
  }
};

/**
 * Make authenticated request to Spotify API
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Request options
 * @returns {Promise<Object>} Response data
 */
const spotifyRequest = async (endpoint, options = {}) => {
  try {
    const token = await getSpotifyToken();
    
    const response = await axios({
      ...options,
      url: `https://api.spotify.com/v1${endpoint}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        ...options.headers
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error making Spotify request:', error);
    throw error;
  }
};

export default spotifyRequest;
