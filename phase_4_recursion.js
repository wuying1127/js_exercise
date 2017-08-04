function range(start, end) {
  if (start === end) {
    return [];
  }

  let result = range(start, end - 1);
  result.push(end - 1);
  return result;
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let lastNum = arr[arr.length - 1];
  return sumRec(arr.slice(0, arr.length -1)) + lastNum;
}

function exponent1(base, exp) {
  return exp === 0 ? 1 : (base * exponent1(base, exp - 1));
  // if (exp === 0) {
  //   return 1;
  // }
  //
  // return base * exponent1(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp % 2 === 0) {
    let result = exponent2(base, exp / 2);
    return result * result;
  } else {
    let result = exponent2(base, (exp - 1) / 2);
    return base * (result * result);
  }
}

function fibonacci(n) {
  let arr = [0, 1];
  if (n < 3) {
    return arr.slice(0, n);
  }

  let fibs = fibonacci(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
  // arr.push(n + fibonacci(n - 1));
  // return fibs;
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  const midIdx = Math.floor(arr.length / 2);
  const midNum = arr[midIdx];

  if (target === midNum) {
    return midIdx;
  } else if (target < midNum) {
    const left = arr.slice(0, midIdx);
    return bsearch(left, target);
  } else {
    const right = arr.slice(midIdx + 1);
    const tOnRight = bsearch(right, target);

    return tOnRight === -1 ? -1 : (tOnRight + (midIdx + 1));
  }
}

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  let midIdx = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midIdx));
  let right = mergeSort(arr.slice(midIdx));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    let num = left[0] < right[0] ? left.shift() : right.shift();
    merged.push(num);
  }

  return merged.concat(left, right);
}

function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const first = array[0];
  const noFirst = subsets(array.slice(1));
  const withFirst = noFirst.map(sub => [first].concat(sub));

  return withFirst.concat(noFirst);
}
