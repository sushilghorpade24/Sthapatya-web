// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/homepage", // your default page
//         permanent: false,
//       },
//     ];
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/homepage",
        permanent: false,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",   // apply to all pages
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
