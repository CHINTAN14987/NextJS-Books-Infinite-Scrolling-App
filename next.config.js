/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://15.165.74.54:3000/:path*",
      },
    ];
  },
};
