/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The wordmark is served at 90 so the fine strokes of the mark stay crisp
    // at 2x; everything else uses the default.
    qualities: [75, 90],
  },
};

export default nextConfig;
