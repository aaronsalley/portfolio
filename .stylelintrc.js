module.exports = {
  plugins: ["stylelint-scss", "stylelint-order"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
