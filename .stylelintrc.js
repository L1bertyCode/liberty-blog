module.exports = {
  extends: "stylelint-config-standard-scss",
  rules: {
    "selector-class-pattern": null,
    "no-duplicate-selectors": null,
    // "no-empty-source": null,
    // "at-rule-empty-line-before": null,
    // "keyframes-name-pattern": null,
  },
  ignoreFiles:["build-prod/**/*.css"]
};
