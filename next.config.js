/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://frontassignment.hyperhire.in/:path*",
      },
    ];
  },
  images: {
    domains: ["images-na.ssl-images-amazon.com"],
  },
};
