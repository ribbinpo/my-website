module.exports = {
  "**/*.{js,jsx,ts,tsx,css,scss}": ["prettier --write", "eslint --fix"],
  "**/*.{md,json}": ["prettier --write"],
};
