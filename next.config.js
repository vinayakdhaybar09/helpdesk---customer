module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add the Babel loader for JavaScript and JSX files
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      });
    }
    return config;
  },
};
