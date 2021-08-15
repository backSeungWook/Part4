import _ from 'lodash' //lodash lib(node_modules) //가져오기
//--import or export 예제
import getType from './getType2' 
// import {getType,getType1} from './getType'  == import * as T from './getType' 
//import { getTypeO, getType1 } from './getType' 
import * as T from './getType' 
//--import or export 예제


const str = 'Hello World'
console.log(str.slice(0,4))

const numbers = [1,2,3,5,6];
const b = numbers.map(function (item, index){
  return `${item}-${index}`
})
console.log(b);

const a = numbers.map(numbers => numbers > 3)
console.log(a)

//--assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target ? 'true':'false');
//true
const returnedNewTarget = Object.assign({},target, source);//얕은 복사 
console.log(returnedNewTarget === target ? 'true':'false');
//false
//assign end


//--얕은 복사 
const copyTest = { a: 1, b: 2,c:['a'] };
      
const copyTarget = Object.assign({}, copyTest)
//or
const copyTarget2 = {...copyTest}
copyTest.a=100
console.log('얕은 복사 :',copyTest === copyTarget2)
//문제점
copyTest.c.push('pushData')
console.log('얕은복사 문제점 :',copyTest.c === copyTarget2.c )//True 배열도 참조형 데이터이기 때문(C :배열)


//--깊은 복사(lodash)
const copyLodash = _.cloneDeep(copyTest)
copyTest.c.push('pushData2')
console.log('copyTest :',copyTest )
console.log('copyLodash :',copyLodash )
console.log('깊은 복사 :',copyTest.c === copyLodash.c )


//--import or export 예제
console.log('getType1() :',T)


//--JSON & localstorage & session  
//localstorage mdn 문서 참조
//localStorage 읽기 전용 속성을 사용하면 Document 출처의 Storage 객체에 접근할 수 있습니다. 
//저장한 데이터는 브라우저 세션 간에 공유됩니다
import myData from './myData.json'
import axios from 'axios'
console.log(myData)
console.log('json : ',myData.string)

const jsonData = {
  name: 'HEROPy',
  age:80,
  emaile:[
    'test@hanmail.net',
    'test@gmail.com'
  ]
}

localStorage.setItem('jsonData',jsonData)//문자열로 저장 시켜야 함
//=>
localStorage.setItem('jsonData2',JSON.stringify(jsonData))
//GET
console.log(localStorage.getItem('jsonData2'))//문자열 반환
// => 개체데이터로 변환
console.log(JSON.parse(localStorage.getItem('jsonData2')))//개체데이터
//localStorage 수정
const strJson = localStorage.getItem('jsonData2')
const objJson = JSON.parse(strJson)
objJson.age = 30
localStorage.setItem('jsonData2',JSON.stringify(objJson))
//localStorage 삭제
//localStorage.removeItem('jsonData')
//localStorage.removeItem('jsonData2')
//lowdb를 통해서 DB 환경 구축 가능.


//--omdb 영화정보 가져오는 예제(7035c60c)
function fetchMovies()
{
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => { 
      
      res.data.Search.forEach(element => {
        console.log(element)  
        const h1El = document.querySelector('h1')
        const imgEl = document.querySelector('img')
        h1El.textContent = element.Title
        imgEl.src = element.Poster
         //console.log(res.data.Search)
      });  
    }) 
}
fetchMovies()

