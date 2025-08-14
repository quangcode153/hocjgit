//array
let arr1=[];//tạp 1 mảng rỗng 
let n=parseInt(prompt("nhập số lượng phần tử có trong mảng 1"));
for(let i=0;i<n;i++){
    arr1.push(prompt(`nhập giá trị thứ ${i} trong mảng`));
}
console.log(arr1);
let arr2= new Array(n);
console.log(arr2.length);//in độ dài
//ta có thể sử lí mảng như bên c và c++ có thể truy cập trực tiếp các giá trị trong mnarg bằng vị trị của nó arr1[index]
for (let i of arr2){//các giá trị trong hàm này chỉ để xem không thể thay đổi 
    console.log(i);//như for(int i:arr) trong ngôn ngữ c chạy toàn bộ giá trị có trong mảng
}


