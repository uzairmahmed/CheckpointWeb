import axios from 'axios';

/**
 * Makes a Spotify API request via backend proxy
 * @param {string} endpoint - Spotify API endpoint (e.g. `/shows/{id}`)
 * @param {Object} options - Axios options (e.g. params)
 * @returns {Promise<Object>} Spotify response data
 */
export const spotifyRequest = async (endpoint, options = {}) => {
  try {
    const response = await axios({
      ...options,
      url: `/api/spotify${endpoint}`
    });

    return response.data;
  } catch (error) {
    console.error("Spotify API request error:", error);
    throw error;
  }
};

export default spotifyRequest;