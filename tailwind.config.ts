import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lichSky: "#C3EBFA",
        lichSkyLight: "#EDF9FD",
        lichPurple: "#CFCEFF",
        lichPurpleLight: "#F1F0FF",
        lichYellow: "#FAE27C",
        lichYellowLight: "#FEFCE8",

      }
    },
  },
  plugins: [],
};
export default config;
