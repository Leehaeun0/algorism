function commaize1(num) {
  let returnNum = '';
  let numToString = num + '';

  const count = Math.ceil(numToString.length / 3);

  for (let i = 1; i <= count; i++) {
    returnNum = numToString.slice(-3) + ',' + returnNum;
    numToString = numToString.slice(0, -3);
  }
  returnNum = returnNum.slice(0, -1);
  return returnNum;
}

function commaize2(num) {
  let returnNum = '';
  let numArr = (num + '').split('');
  numArr.forEach((v, i) => {
    returnNum = numArr[numArr.length - i - 1] + returnNum;
    if (!((i % 3) - 2) && i !== numArr.length - 1) returnNum = ',' + returnNum;
  });
  console.log(numArr);
  return returnNum;
}

console.log(commaize1(1234567));
console.log(commaize2(1234567));
console.log(commaize2(123432533245321367));
