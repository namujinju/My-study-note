//slice
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = arr1.slice(2, 5);
console.log(arr1); // [1, 2, 3, 4, 5, 6]
console.log(arr2); // [3, 4, 5]
// slice는 원본 보존

//splice
let arr3 = arr1.splice(2, 2, "a", "b", "c");
console.log(arr1); // [1, 2, "a", "b", "c", 5, 6]
console.log(arr3); // [3, 4]
//splice는 원본 변경

//push, pop
const apple = ["a", "p", "p", "l", "e"]; // <-- push
apple.push("d");
console.log(apple); // ["a", "p", "p", "l", "e", "d"]
apple.pop(); // 오른쪽에서 없앤다
apple.pop();
apple.pop();
console.log(apple); // ["a", "p", "p"]
//push, pop은 배열의 뒤에 원소를 붙이거나 뗀다. 원본 변경.

//map, filter
// 다음 배열의 각 원소를 제곱한 배열을 만들어라.(map)
let my_arr = [3, 6, 8, 0, 13, 22, 5];
let my_arr2 = my_arr.map((x) => x ** 2);
console.log(my_arr2); // [9,36,64, ....]

// 다음 배열의 각 원소 중 3의 배수를 제거하라.(filter)
let arr = [2, 5, 6, 8, 1, 9, 15, 7];
let arr_ = arr.filter((x) => x % 3 != 0);
console.log(arr_); // [2,5,8,1,7]

//template literal

function mul3() {
  n = prompt();
  if (n % 3 == 0) {
    console.log(`${n}은 3의 배수입니다.`);
  } else {
    console.log(`${n}은 3의 배수가 아닙니다.`);
  }
  // 따옴표가 아닌 백틱을 이용해야 함.
}

mul3();
