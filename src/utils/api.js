import axios from 'axios';
import spotifyRequest from './spotifyApi';

/**
 * Fetches podcast information by ID
 * @param {string} podcastId - The iTunes podcast ID
 * @returns {Promise} - Promise with podcast data
 */
export const getPodcastInfo = async (podcastId) => {
  try {
    const response = await axios.get(`https://itunes.apple.com/lookup?id=${podcastId}`, {
      maxBodyLength: Infinity,
      headers: {}
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching podcast info:', error);
    throw error;
  }
};

/**
 * Fetches podcast episodes by podcast ID
 * @param {string} podcastId - The iTunes podcast ID
 * @param {number} limit - Maximum number of episodes to fetch (default: 100)
 * @returns {Promise} - Promise with podcast episodes data
 */
export const getPodcastEpisodes = async (podcastId, limit = 100) => {
  try {
    const response = await axios.get(`https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=${limit}`, {
      maxBodyLength: Infinity,
      headers: {}
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching podcast episodes:', error);
    throw error;
  }
};

/**
 * Fetches Spotify podcast show information
 * @param {string} spotifyShowId - The Spotify show/podcast ID
 * @returns {Promise} - Promise with Spotify show data
 */
export const getSpotifyPodcastInfo = async (spotifyShowId) => {
  try {
    const data = await spotifyRequest(`/shows/${spotifyShowId}`, {
      method: 'get',
      params: { market: 'US' }
    });
    return data;
  } catch (error) {
    console.error('Error fetching Spotify podcast info:', error);
    throw error;
  }
};

/**
 * Fetches Spotify podcast episodes
 * @param {string} spotifyShowId - The Spotify show/podcast ID
 * @param {number} limit - Maximum number of episodes to fetch (default: 20)
 * @returns {Promise} - Promise with Spotify episodes data
 */
export const getSpotifyPodcastEpisodes = async (spotifyShowId, limit = 20) => {
  try {
    const data = await spotifyRequest(`/shows/${spotifyShowId}/episodes`, {
      method: 'get',
      params: { limit, market: 'US' }
    });
    return data;
  } catch (error) {
    console.error('Error fetching Spotify podcast episodes:', error);
    throw error;
  }
};
