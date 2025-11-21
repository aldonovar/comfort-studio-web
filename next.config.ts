import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // ESTA LÍNEA ES LA SOLUCIÓN: Le dice a Vercel que procese Spline correctamente
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
  
  // Opcional: Si usas imágenes de dominios externos (como Unsplash), es bueno tener esto
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;