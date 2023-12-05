const { describe } = require("node:test");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  //   async rewrites() {
  //     return {
  //       beforeFiles: [
  //         {
  //           source: "/:path*",
  //           has: [
  //             {
  //               type: "host",
  //               value: "users.localhost",
  //             },
  //           ],
  //           destination: "/users/:path*",
  //         },
  //         {
  //           source: "/:path*",
  //           has: [
  //             {
  //               type: "host",
  //               value: "test.localhost",
  //             },
  //           ],
  //           destination: "/test",
  //         },
  //       ],
  //     };
  //   },
};

module.exports = nextConfig;
