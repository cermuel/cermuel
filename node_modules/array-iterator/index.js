
module.exports = function* arrayIter(arr) {
  for (var i = 0, len = arr.length; i < len; i++) yield arr[i];
}
