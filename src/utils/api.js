import axios from 'axios';

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
