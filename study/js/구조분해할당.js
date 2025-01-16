/* 
    구조 분해 할당
    객체, 배열을 변수로 '분해' 하는 문법
    
    활용 : 
    매개변수 기본 값 활용, 객체 배열 전달    
*/

let arr = ["mh", "lee"]

let [firstName, subName] = arr;
/* 
    let firstName = arr[0]
    let subName = arr[1]
*/

console.log(firstName) // mh
console.log(subName) // lee

/* split 활용 */
let [시, 구] = "서울특별시 은평구".split(' '); // 공백을 두 개 띄울 경우 공백
console.log(시)
console.log(구)

/* 기본 값 설정 */
let [name = "guest" , surname = "Anonymus"] = ["lee"]

/* 
    객체 분해하기

    = 우측엔 객체, 좌측엔 객체 프로퍼티 패턴 넣기
    = 각 키 값을 변수로 할당
*/

let options = {
    title : 'Menu',
    width : 100,
    height : 200
}
let {title, width, height} = options;
console.log(title) // Menu
console.log(width) // 100 
console.log(height) // 200





