/* 
    자료구조
    
    객체 - 키가 있는 컬렉션 저장 
    ex ) key : value;

    배열 - 순서가 있는 컬렉션을 저장함
    ex ) ["가", "나", "다", "라", "마", "바"]

    그 중 맵 (Map)은 키가 있는 데이터를 저장한다는 점에서 객체와 유사
*/

// 맵은 키로 객체를 허용한다.
// 객체에도 문자열 키를 사용할 수는 있으나, 객체 키는 사용할 수 없다.

let john = {name : "john"}

// 가게 방문 횟수 
let visitCountMap = new Map();
visitCountMap.set(john, 123)

console.log( visitCountMap.get(john))

// 맵 요소 반복 작업하기 *(중요)
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onions', 50]
])

for (let vegetable of recipeMap.keys()){
    console.log(vegetable) 
    // key값 만큼 vegeterble에 값 순회
}

for (let amount of recipeMap.values()){
    console.log(amount)
    // 500 , 350 , 50
}
