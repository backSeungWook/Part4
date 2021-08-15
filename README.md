# Part4 JavaScript Level Up

## mdn 사이트 
<a href="https://developer.mozilla.org/ko/">자바스크립트 API</a> 

## String  
1. `slice`  
문자열의 일부를 추출  
    ```javascript
      const str = 'Hello World'
      str.slice(0,5)
    ```
    => Hello
1. `replace`  
첫번째 인수값 찾아서 2번째 인수로 변경  
    ```javascript
        const str = 'Hello World'
      str.replace('World','H2')
    ```   
    => Hello H2
1. `match`  
인자에 포함된 문자를 찾으면 이를 반환함 정규식을 사용하여 문자 추출 가능

## Array
1. `concat()` : array1.concat.array2 array1과 array2를 병합 후 새로운 배열을 반환(원본에 영향이 없음.)
    1. lodash : .unionBy(Array1,Array2,'개체데이터') ex)
        ```javascript
        const userA =[
          {userId:'1',userData:'Data1'}
          ..
        ]
        const userA=[{...}]
        _.unionBy(userA,userB,'userId')
        ```
     
    
1. `forEach()` : 베열에 값만큼 반복(리턴값 없음)
    ```javascript
    numbers = [1,2,3]
    numbers.forEach(function (item, index){
      console.log(item,index)
    })
    ```
1. `map` : forEach과 같이 배열값만큼 반복(새로운 배열로 반환)
    ```javascript
    numbers = [1,2,3]
    const b = numbers.map(function (item, index){
      return `${item}-${index}`
    })
    ```
    => (3) ["1-0", "2-1", "3-2"]
1. `filter()` : 조건에 맞는 데이터만 새로운 배열로 반환
1. `find()` : 특정 조건에 맞는 데이터를 반환 하고 반복 종료 
    1. lodash .find(): 배열안에 있는 개체데이터를 찾고 싶으면  
        사용법(findIndex,remove 동일)
        ```javascript
        _.find(Array,{name:'Data1'}) 
        ```
1. `findIndex()` : 특정 조건에 맞는 인덱스 번호를 반환 하고 반복 종료 
1. `includes()` : 베열에 매개변수 데이터가 들어있으면 True 없으면 false 반환
1. `push()` (배열 원본이 수정될 수 있음)  
: 원본 배열 맨 뒤쪽에 매개변수 데이터가 삽입
1. `unshift()` (배열 원본이 수정될 수 있음)    
: 원본 배열 맨 앞쪽에 매개변수 데이터가 삽입
1. `reverse()` (배열 원본이 수정될 수 있음)  
: 배열의 아이템을 역순으로 정렬
1. `splice()` (배열 원본이 수정될 수 있음)  
: splice(배열인덱스, 첫번째 매개변수 부터 지울 데이터 갯수) `3번째 매개변수 지정 시` : 삽입할 데이터  
`삭제`와 데이터 `삽입` 기능을 가지고 있음.

## Object
1. `assign` :출처 객체로부터 모든 열거할 수 있는(enumerable) 하나 이상의 속성(own properties)들을 목표 객체로 복사합니다. 이는 수정된 목표 객체를 반환합니다  
ex)
    ```javascript
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
    ```
1. `keys` : 개체 데이터의 key값 을 반환
## 전개 연산자 (...변수) 
쉽표로 구분 된 아이템으로 전개됨.
매개 변수에서도 사용 가능 나머지를 다 매개변수로 받음.  
```javascript
  const test = ['A','B','C','D']
  //객체 데이터만들 때 속성이름과 변수 이름이 같으면 하나만 작성
  const toObject = (a,b, ...c) => ({a,b,c})
  console.log(toObject(...test))
```
---
<br/>

#### 참조형데이터에서 대입은 메모리 주소값만 대입a=b. `원본 데이터를 변경시 원본 데이터 메모리 주소를 가지고있는 변수(b)에서도 변경 주소값을 참조 하고 있기 때문`
#### 똑같은 데이터를 새로운 메모리에 할당 시 복사하여 사용.
1. 얕은 복사  
    ```javascript
        const target = { a: 1, b: 2,c:['a'] };
      
        const copyTarget = Object.assign({}, target)
        //or
        const copyTarget2 = {...target}
        //문제점
        target.c.push('push data')
        console.log(target.c === copyTarget2 )//True 배열도 참조형 데이터이기 때문(C :배열)
    ```
1. 깊은 복사 (lodash lib 사용)  - 개체 데이터 안에 참조형데이터가 있을 시  
사용법 : import _ form 'lodash'  
_.cloneDeep(복사할 참조형데이터)

## JSON & storage 
<a href="https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage">localstorage mdn 문서 참조</a>  
<a href="https://github.com/backSeungWook/Part4/blob/master/main.js">예제 참조</a>


읽기 전용 속성을 사용하면 Document 출처의 Storage 객체에 접근할 수 있습니다.  
저장한 데이터는 브라우저 세션 간에 공유됩니다. localStorage는 sessionStorage와 비슷하지만,  
localStorage의 데이터는 만료되지 않고 sessionStorage의 데이터는 페이지 세션이 끝날 때,  
즉 페이지를 닫을 때 사라지는 점이 다릅니다.  
("사생활 보호 모드" 중 생성한 localStorage 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워집니다.)


</br>

---

## OMDb<a href="https://github.com/backSeungWook/Part4/blob/master/main.js">(참조)</a>
---
</br>

## 정규표현식(RegExp)
### 정규식 테스트 사이트  
- <a href="https://regex101.com/">https://regex101.com/</a>  
- <a href="https://regexr.com/">https://regexr.com/</a>  
- <a href="https://regexper.com/">https://regexper.com/</a>  

### 역활
- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

### 정규식 생성 방법

```js
//생성자 
new RegExp('표현','옵션')
const regexp1 = new RegExp("^abc")
const regexp2 = new RegExp("^abc",'gi')

//리터널 방식
//정규표현식은 `/` 로 감싸진 패턴
/표현/옵션
const regexp3 = /^abc/gi
```

### 정규표현식을 다루는 다양한 메소드
메소드 | 문법 | 설 명
-----|-----|------
`test`|`정규식.test(문자열)`|일치 여부 반환(Boolean)
`match`|`문자열.match(정규식)`|일치하는 문자열의 배열 반환(Array)
`replace`|`문자열.replace(정규식,대체문자)`|일치하는 문자열을 대체하고 대체된 문자열 반환(String)

#### 예제 문자
```js
const strRegExp = `
010-1234-5678
thesecon@hanmail.net
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog
abbcccdddd
`
```

### 플래그(옵션)

플래그 | 설 명
--|--
`g` | 모든 문자 일치(global)
`i` | 영어 대소문자를 구분 하지 않고 일치(ignore case)
`m` | 여러 줄 일치(multi line)

### 패턴(표현)

패턴 | 설 명
--|--
^`ab` | 줄 시작에 있는 `ab`와 일치
`ab`$ | 줄 끝에 있는 `ab`와 일치
. | 임의의 한 문자와 일치
`a`&verbar;`b` | `a` 또는 `b`와 일치 
a`b`? | `b`가 없거나 `b`와 일치
{`3`} | `3`개 연속 일치
{`3`,} | `3`개 이상 연속 일치
{`3`,`5`} | `3`개 이상 `5`개 이하(3~5) 연속 일치
[`abc`] | a 또는 b  또는 c
[`a-z`] | a ~ z 사이의 문자 구간에 일치(소문자)
[`A-Z`] | A ~ Z 사이의 문자 구간 일치(대문자)
[`0-9`] | 0 ~ 9 사이의 문자 구간 일치(정수)
[`가-힣`] | 가 ~ 힣 사이의 문자 구간 일치(한글)
`\w` | 63개 문자(Word, 대소영문52 + 숫자10 + _)에 일치
`\b` | 63개 문자에 일치하지 않는 문자 경계(특수문자)
`\d` | 숫자에 일치
`\s` | 공백(Space,Tab 등) 에 일치
`(?=)` | 앞쪽 일치
`(?<=)` | 뒤쪽 일치 