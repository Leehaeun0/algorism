let arr = [];
const tags = ['tst', 'sdf'];
tags.forEach(tag => {
  if (arr.some(v => v.name === tag)) {
    arr = arr.map(v => (v.name === tag ? { ...v, count: v.count + 1 } : v));
    return;
  }
  arr.push({ key: arr.length + 1, name: tag, count: 1 });
});

// [입출력 예]
// orders	course	result
// ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]	[2,3,4]	["AC", "ACDE", "BCFG", "CDE"]
// ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]	[2,3,5]	["ACD", "AD", "ADE", "CD", "XYZ"]
// ["XYZ", "XWY", "WXA"]	[2,3,4]	["WX", "XY"]

// orderArr = ['A', 'b', 'c']
// menu = A 즉 글씨 한개다
// let combinations = {
//   // 2: [
//   //   { name: 'AB', count: 2 },
//   //   { name: 'AC', count: 1 },
//   // ],
//   // 3: [
//   //   { name: 'ABC', count: 2 },
//   //   { name: 'ACD', count: 1 },
//   // ],
// };

const getMiddle = (num, order, i) => {
  let middleMenu = '';
  for (let k = 0; k < num; k++) {
    middleMenu += order[i + 1 + k];
  }
  return middleMenu;
};

function solution(orders, course) {
  let combinations = {};
  let answerArr = [];

  course.forEach(courseNum => {
    combinations = { ...combinations, [courseNum]: [] };
    orders.forEach(order => {
      const orderArr = order.split('');
      orderArr.forEach((menu1, i) => {
        orderArr.forEach((menu2, j) => {
          if (j <= i) return;
          const num = courseNum - 2;
          if (j + num >= order.length) return;
          const combination = menu1 + getMiddle(num, order, i) + order[j + num];
          const combinationArr = combinations[courseNum];
          if (combinationArr.some(v => v.name === combination)) {
            combinations = {
              ...combinations,
              [courseNum]: combinationArr.map(v =>
                v.name === combination ? { ...v, count: v.count + 1 } : v,
              ),
            };
            return;
          }
          combinations[courseNum].push({ name: combination, count: 1 });
        });
      });
    });

    console.log(combinations);

    let maxCount = 1;
    let maxCountCombinations = [];
    combinations[courseNum].forEach(v => {
      if (!v || v.count === 1) return;
      if (v.count === maxCount) {
        maxCountCombinations.push(v.name);
      }
      if (v.count > maxCount) {
        maxCount = v.count;
        maxCountCombinations = [v.name];
      }
    });
    maxCountCombinations.forEach(v => answerArr.push(v));
  });

  return answerArr.sort();
}

console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]),
);

// ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]	[2,3,5]	["ACD", "AD", "ADE", "CD", "XYZ"]

// [입출력 예]
// orders	course	result
// ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]	[2,3,4]	["AC", "ACDE", "BCFG", "CDE"]
// ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]	[2,3,5]	["ACD", "AD", "ADE", "CD", "XYZ"]
// ["XYZ", "XWY", "WXA"]	[2,3,4]	["WX", "XY"]
