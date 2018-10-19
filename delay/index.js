// Much like setTimeout, invokes function after wait milliseconds. If you pass the optional arguments, they will be forwarded on to the function when it is invoked.
// delay(function, wait, *arguments);
//
// const notify = function (message) { alert(message); };
// delay(notify, 1000, 'One second has passed!');
// => 'One second has passed!' // A alert appears after one second.
const delay = (func, wait, ...args) => {
  setTimeout(() => {
    func(...args);
  }, wait);
};
module.exports = { delay };
