// Destructuring (Phân rã)- Array- dùng ngoặc vuông
var array = ["Javascript", "PHP", "Ruby"];
var [a, b, c] = array;

// rest parameters: Lấy phần tử còn lại của mảng
var [a, ...rest] = array
var [a, b ,c] = array;

console.log(a,c);
console.log(rest);

var course = {
    name: "Js",
    price: 1000,
    image: "image"
}

var {name, price, ...newObj} = course;
console.log(name, price, newObj);


