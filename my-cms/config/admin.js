module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9b27d301b5c598f3156d55e274cdf3d8'),
  },
});
