import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  //basePath: "/2048-in-react",
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes para export estático
  },
};

export default nextConfig;
