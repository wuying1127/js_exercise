Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

Array.prototype.myMap = function(func) {
  let arr = [];

  this.myEach(ele => arr.push(func(ele)));

  return arr;
};

Array.prototype.myReduce = function(func, initialValue) {
  let acc = this[0];

  if (initialValue) {
    acc = initialValue;
  }

  this.myEach(el => acc = func(acc, el));

  return acc;
};
