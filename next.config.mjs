/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "google.com",
				port: "",
				pathname:
					"/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
			},
		],
	},
};

export default nextConfig;
