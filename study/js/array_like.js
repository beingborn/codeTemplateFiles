// 배열은 index를 갖는다. 
// 배열이 아니지만 배열처럼 활용할 수 있는 객체를 array-like라 부름
// 그리고 배열의 엘리멘트 수를 나타내는 length라는 내장 프로퍼티가 있다.

const values = {0 : "zero", 1: "one", 2: "two", length: 3}

for (var k; k < values.length; k++){}

console.log(values[0])
console.log(values[1])
console.log(values[2])

// Array와 다르게 key 값 자체가 value로 작용 key++ (0,1,2)
for (var key in values){
    console.log(key ,":", values[key])
}  