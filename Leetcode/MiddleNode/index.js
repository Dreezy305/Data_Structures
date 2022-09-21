var middleNode = function (head) {
  let len = head.length;
  let divide = len / 2;
  let result = [];
  let arr;
  let roundX;
  if (len % 2 !== 0) {
    roundX = Math.floor(divide);
    ar = head.splice(roundX);
    result = ar;
  } else if (len % 2 === 0) {
    arr = head.splice(divide);
    result = arr;
  }
  console.log(result);
  return result;
};

// OR

var middle = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    if (!fast.next) break;
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

middleNode([1, 2, 3, 4, 5]);
middleNode([1, 2, 3, 4, 5, 6]);
