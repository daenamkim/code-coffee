// Fill in undefined properties in object with the first value present in the following list of defaults objects.
// defaults(object, *defaults);
//
// const aws = {compute: "ec2"};
// defaults(aws, {compute: "lambda", storage: "s3"});
// => {compute: "ec2", storage: "s3"}
const defaults = (object, ...items) => {
  items.forEach((item) => {
    Object.keys(item)
      .filter((key) => {
        return !Object.keys(object).includes(key);
      })
      .forEach((key) => {
        object[key] = item[key];
      });
  });
  return object;
};

module.exports = { defaults };
