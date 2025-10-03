// 1. Định nghĩa key: value cho Object 
var name = "javascript";
var price = 1000;

var course = {
    name,
    price,
}
console.log(course);
// 2. Định nghĩa method cho Object
var newCourse = {
    name,
    price,
    // Không cần khái báo thêm chữ fucntion vào
    getName() {
        return name;
    }
}
console.log(newCourse.getName());

// 3. Định nghĩa key cho Object dưới dạng biến 
var fieldName = "Name";
var fieldPrice = "Price";

const Course = {
    [fieldName]: "javascript",
    [fieldPrice]: 1000,
}
console.log(Course);

/* Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array 
thành object. Gợi ý: Sử dụng phương thức reduce */ 
let infoArr = [["name", "John"], ["age", 30], ["city", "New York"]];
function arrToObj(arr) {
    return arr.reduce((acc, [key, value]) => {
        acc[key] = value;  // Thêm cặp key-value vào accumulator (acc)
        return acc;        // Trả về đối tượng accumulator
    }, {});  // {} là giá trị khởi tạo của accumulator
}
console.log(arrToObj(infoArr));
