/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: "http://localhost:3001/:path*",
			},
		];
	}
}
