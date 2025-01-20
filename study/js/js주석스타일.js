/* 
    아래와 같이 주석을 작성하면 
    매개변수와 returns 값을 명시가능
*/

/**
 * 함수명 : gfnFocus
 * 설명   : 숫자 객체에서 콤마 제거
 * @param obj
 * @returns 콤마제거된 값
 */

function gfnFocus(obj) {
    var x = obj.val();
    x = gfnRemoveCommas(x); 

    return x;
}