import _ from 'lodash' //깊은 복사

const str = 'Hello World'
console.log(str.slice(0,4))

const numbers = [1,2,3,5,6];
const b = numbers.map(function (item, index){
  return `${item}-${index}`
})
console.log(b);

const a = numbers.map(numbers => numbers > 3)
console.log(a)

//assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target ? 'true':'false');
//true
const returnedNewTarget = Object.assign({},target, source);
console.log(returnedNewTarget === target ? 'true':'false');
//false
//assign end

//얕은 복사 

const copyTest = { a: 1, b: 2,c:['a'] };
      
const copyTarget = Object.assign({}, copyTest)
//or
const copyTarget2 = {...copyTest}
copyTest.a=100
console.log('얕은 복사 :',copyTest === copyTarget2)
//문제점
copyTest.c.push('pushData')
console.log('얕은복사 문제점 :',copyTest.c === copyTarget2.c )//True 배열도 참조형 데이터이기 때문(C :배열)

//깊은 복사(lodash)
const copyLodash = _.cloneDeep(copyTest)
copyTest.c.push('pushData2')
console.log('copyTest :',copyTest )
console.log('copyLodash :',copyLodash )
console.log('깊은 복사 :',copyTest.c === copyLodash.c )
