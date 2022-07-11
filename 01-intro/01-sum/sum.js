
function sum(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
     return (a + b);
  } else {
    throw Error;
  }
}
module.exports = sum;
