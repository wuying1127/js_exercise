Array.prototype.bubbleSort = function() {
  for (var i = 0; i < this.length; i++) {
    for (var j = (i + 1); j < this.length; j++) {
      if (this[i] > this[j]) {
        let current = this[i];
        this[i] = this[j];
        this[j] = current;
      }
    }
  }

  return this;
};

Array.prototype.bubbleSort = function() {
  let isSorted = false;

  while(!isSorted) {
    isSorted = true;

    for (var i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        isSorted = false;
      }
    }
  }

  return this;
};

String.prototype.substrings = function() {
  let result = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = (i + 1); j < this.length + 1; j++) {
      result.push(this.slice(i, j));
    }
  }

  return result;
};
