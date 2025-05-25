/**
 * @typedef {Object} StrrrShow
 * @property {number} id
 * @property {number} season_number
 * @property {number} episode_number
 * @property {number} order
 * @property {string} host
 * @property {string} image - cloudinary id 
 * @property {string} title
 * @property {string} description
 * @property {string} credits
 * @property {boolean} is_published
 * @property {Video[]} videos
 */

/**
 * @typedef {Object} VideoStatus
 * @property {boolean} embeddable Whether the video can be embedded
 * @property {string} license The license type of the video
 * @property {string} privacyStatus Privacy status of the video (e.g., 'unlisted', 'public', 'private')
 * @property {boolean} publicStatsViewable Whether the video's stats are publicly viewable
 * @property {string} uploadStatus The upload status of the video (e.g., 'processed')
 */

/**
 * @typedef {Object} VideoInfo
 * @property {string} id Video ID from the provider (e.g., YouTube ID)
 * @property {string} provider Video provider name (e.g., 'youtube')
 * @property {string} url 
 * @property {string} title 
 * @property {number} duration in seconds
 * @property {string} thumbnail URL to the video thumbnail image
 * @property {VideoStatus} status Status information about the video
 */

/**
 * @typedef {Object} StrrrVideo
 * @property {number} id 
 * @property {number} show_id 
 * @property {string} title 
 * @property {string} url youtube url
 * @property {number} order 
 * @property {number|null} start_time in seconds
 * @property {number|null} end_time in seconds
 * @property {VideoInfo} info Third party information about the video
 */
