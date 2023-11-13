/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    API_URL: "https://ecommerce-ne5f.onrender.com/",
  },
};

module.exports = nextConfig;
