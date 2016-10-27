// 存档
function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}
function sortRandom(arr) {
  for (var i = arr.length; i >= 1; i--) {
    var num = randomNumber(i);
    arr.push(arr[num])
    arr.splice(num, 1);
  }
  return arr;
}
function grouping(arr, number) {
  var a = [
  ];
  for (var i = number; i >= 1; i--) {
    var part = Math.round(arr.length / i);
    a.push(arr.slice(0, part));
    arr.splice(0, part);
  }
  return a;
} // arrayData 最原始数组
// number 分成几组

function randomGroup(arrayData, number) {
  // 洗牌
  var sortedArr = sortRandom(arrayData);
  var grouppedArr = grouping(sortedArr, number);
  console.info(grouppedArr);
}


console.info(new Date().toTimeString());

console.info('男单种子：ABCDEFGH：')
randomGroup(['姚昌',
'孙祥平',
'向宏伟',
'陈成昊',
'陈达',
'叶明',
'赵雷',
'张頔'], 8);
console.info('男单：ABCDEFGH：')
randomGroup(['车彦博',
'元中朋',
'王劲',
'董大祥',
'赵越',
'黄维勋',
'乐欣同',
'王延平',
'塔怀亮',
'靳甲广',
'彭永兴',
'陈艺',
'刘超',
'郭杰',
'刘钊',
'尚利宁'], 8);
console.info('======')
console.info('女单种子：ABC：')
randomGroup(['谭衍',
'戴海竹',
'刘宇航',
'孙丽',
'甘璐',
'李博文'], 3);
console.info('女单：ABCDEFGH：')
randomGroup(['祝金洁',
'张丽',
'于迅文',
'郭文文'], 3);
console.info('======')
console.info('混双：ABDC种子：')
randomGroup(['谭衍&雷绍泽',
'戴海竹&陈成昊',
'刘宇航&叶明',
'陈达&甘璐',
'李博文&向宏伟',
], 4)
console.info('混双：ABCD：')
randomGroup(['陈艺&孙丽',
'张丽&段伟',
'郭文文&郭杰'], 4)
console.info('======')
console.info('男双种子ABCD(D轮空)：')
randomGroup(['韩波&姚昌',
'孙祥平&陈成昊',
'彭永兴&陈艺',
'陈达&叶明'], 4);
console.info('男双ABCD：')
randomGroup(['刘超&黄维勋',
'赵越&郑广维',
'元中朋&郭杰'], 4);
console.info('======')
console.info('女双种子A,B：')
randomGroup(['戴海竹&刘宇航',
'孙丽&甘璐'], 2);
console.info('女双A,B：')
randomGroup(['王子&李薇澜',
'张丽&于迅文'], 2);
