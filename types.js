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
 * @property {number} duration Duration of the video in seconds
 * @property {string} id Video ID from the provider (e.g., YouTube ID)
 * @property {string} provider Video provider name (e.g., 'youtube')
 * @property {VideoStatus} status Status information about the video
 * @property {string} thumbnail URL to the video thumbnail image
 * @property {string} title Title of the video
 * @property {string} url Full URL to the video
 */

/**
 * @typedef {Object} StrrrVideo
 * @property {number} id Unique identifier for the video
 * @property {VideoInfo} info Detailed information about the video
 * @property {string} title Display title for the video
 * @property {string} url URL to the video
 * @property {number} order Display order of the video
 * @property {number} show_id ID of the show this video belongs to
 * @property {number|null} start_time Start time for playback in seconds (if applicable)
 * @property {number|null} end_time End time for playback in seconds (if applicable)
 */