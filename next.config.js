/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "via.placeholder.com",
				port: "",
				pathname: "",
			},
		],
	},
	experimental: {
		serverComponentsExternalPackages: ["mongoose"],
	},
	webpack(config) {
		config.experiments = {
			...config.experiments,
			topLevelAwait: true,
		};
		return config;
	},
};

module.exports = nextConfig;
