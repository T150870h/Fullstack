// Arrow function không thể sử dụng contructor hoặc context
// Arrow function
const logger = (log) => {
    console.log(log);
}

logger("Arrow function....")

// Vd 2: 
const sum = (a, b) => {
    return(a + b)
}
let a = 10;
let b = 20;
console.log(sum(a, b));

// cách viết gọn
const  sum2 = (a, b) => a + b;
console.log(sum2(a, b));

// Muốn gán giá trị Object cần dùng dấu ngoặc đơn 
const sum3 = (a, b) => ({a: a, b: b})
console.log(sum3(a, b))

// Khi chỉ có 1 đối số thì có thể bỏ qua dấu ngoặc đơn
const logger2 = log => console.log(log);
logger2("Arrow function chỉ có 1 đối số") 
