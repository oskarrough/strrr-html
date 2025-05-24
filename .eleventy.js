export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css/index.css");
	eleventyConfig.addPassthroughCopy("strrr-player.js");
	eleventyConfig.setLiquidOptions({
		jsTruthy: true,
	});
}
