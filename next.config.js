const withImages = require('next-images');
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withImages(
  withReactSvg({
    webpack(config, options) {
      return config;
    },
    reactSvg: {
      include: path.resolve(__dirname, './public/images'), // Sesuaikan dengan direktori SVG Anda
    },
    images: {
      domains: ['example.com'], // Ganti dengan domain yang sesuai
      disableStaticImages: false,
      formats: ['image/jpeg', 'image/png', 'image/webp'],
      deviceSizes: [320, 420, 768, 1024, 1200],
      imageSizes: [16, 32, 48, 64, 96],
    },
  })
);

// Konfigurasi Next.js lainnya
module.exports.reactStrictMode = true;