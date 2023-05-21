const firstCharLowerCase = require("../firstCharLowerCase");

module.exports = (componentName) => {
  const firstCharLowerComponentClassName = `${firstCharLowerCase(
    componentName
  )}`;
  return `.${firstCharLowerComponentClassName} {

        }`;
};
