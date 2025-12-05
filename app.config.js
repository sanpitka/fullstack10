import 'dotenv/config';

export default{
  expo: {
    name: "rate-repository-app",
    slug: "rate-repository-app",
    plugins: [
      "expo-router",
      "expo-web-browser"
    ],
    extra: {
      env: process.env.ENV,
      APOLLO_URI: process.env.APOLLO_URI,
    },
  },
};