module.exports = {
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'import',
  ],
  env: {
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    'import/prefer-default-export': 0,
  },
};
