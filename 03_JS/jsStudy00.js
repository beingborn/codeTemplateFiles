// 배열에서 특정 조건 맞는걸 찾고 싶을 때 => find 
const fruits = [
    {name: 'orange', price : 300 },
    {name: 'apple', price : 700 },
    {name: 'banana', price : 500 },
    {name: 'kiwi', price : 1000 },
    {name: 'lemon', price : 800 }
]

const item = fruits.find((fruit, index) => { // fruit = 배열 아이템 각각 , index = 배열 내에 순서
    if(fruit.price === 500 && index === 1) {
        return true; // 요소 반환 
    } return false; // undefined 반환
})

// findIndex() 요소의 index값 반환 
// 조건을 만족하는 요소가 없으면 -1을 반환
const itemIndex = fruits.findIndex((fruit)=>{
    if(fruit.price === 1000){
        return true;
    } return false;
})

// some 배열 안에서 특정 조건을 만족하는 게 있는 지 확인
const doesExist = fruits.some((fruit)=>{
    if(fruit.price > 600){
        return true
    } return false;
})

// every 배열 안에서 특정 조건을 모두 만족하는 지
const doesEveryExist = fruits.every((fruit)=>{
    if(fruit.price > 100){
        return true
    } return false
})

// filter 배열안에서 조건 맞는것들을 모아 새 배열 만들기
const newFruitArray = fruits.filter((fruit)=>{
    if(fruit.price > 500){
        return true 
    } return false
})

console.log(newFruitArray)

// map 다른 형태로 전체 배열을 변환
const priceTags = fruits.map((fruit)=>{
    // 요소를 어떤식으로 변환할 지 
    // 원본은 건드리지 않고, 새로운 배열을 생성하는 것이다.
    return `${fruit.name} : ${fruit.price}원`
})
console.log(priceTags)




