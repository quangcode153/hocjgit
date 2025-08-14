//CÁC CÁCH XỬ LÍ ĐIỀU KIỆN IF ELSEIF VÀ ELSE,switch VÀ TOÁN TỬ BA NGÔI
//test bài tập
alert("test thử 1 số dạng bài tập");

let tongHaiSo=Number(prompt("nhập giá trị tổng của 2 số"));
let hieuHaiSo=Number(prompt("nhập giá trị hiệu của 2 số"));
let x=(tongHaiSo+hieuHaiSo)/2
let y=tongHaiSo-x;
console.log(`giá trị của x là:${x}`);
console.log(`giá trị của y là:${y}`);
let chieuCao=Number(prompt("nhập chiều cao của bạn"));
let canNang=Number(prompt("nhập cân nặng của bạn"));
let BMI=canNang/(chieuCao*chieuCao);
if(BMI<15){
    console.log("thân hình của bạn quá gầy");
}else if(BMI>=15 && BMI <16){
    console.log("thân hình của bạn gầy");
}else if(BMI>=16  && BMI<18){
    console.log("thân hình gầy");
}else if(BMI>=18.5  && BMI<25){
    console.log("thân hình bình thường");
}else if(BMI>=25  && BMI<30){
    console.log("thân hình hơi béo");
}else if(BMI>=30 && BMI<35){
    console.log("thân hình gầy");
}else if(BMI>=35){
    console.log("thân hình quá béo");
}
else console.log("chỉ số bạn nhập vô lý");
var testNam=function(ho){
    
    if((ho%4===0&&(ho%100!==0))||ho%400===0){
    return 1;
    }
    else return 0;
     
}
let nam=Number(prompt("nhập năm bạn muốn kiểm tra:"));
if((nam%4===0&&(nam%100!==0))||nam%400===0){
    console.log("nam bạn vừa nhập là năm nhuận");
}
else console.log("năm bạn vừa nhập không phải là năm nhuận");
let thang=Number(prompt("nhập tháng bạn muốn kiểm tra"));

switch(thang){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:{
        console.log(`tháng ${thang} có 31 ngày`);
        break;
    }
    case 4: case 6: case 9: case 11:{
        console.log(`tháng ${thang} có 30 ngày`);
        break;
    }
    case 2:{
        if(testNam(nam)==1) console.log(`tháng ${thang} có 29 ngày`);
        else console.log(`tháng ${thang} có 28 ngày`);
        break;
    }
    default:
        console.log("tháng bạn nhập không hợp lệ");
}
//toán tử 3 ngôi 
let number=parseInt(prompt("nhập số bạn muốn kiểm tra là dương hay âm"));
let number2=number>=0?"số dương":"số âm";//toán tử này dùng cho các phép xét điều kiện mà chỉ có 2 kết quả ĐÚNG thì gán kết quả bên phải sai nó nhận kết quả bên phải sai thì nó nhận kết quả bên phải ngoài kết quả thẳng nó cũm có thể được thay thế bằng các câu lệnh hay điều kiện khác 
console.log(number2);
let a=parseInt(prompt("vui lòng nhập số bạn muốn kiểm tra là chẵn hay lẻ"));
let a2=(a%2===0)?"số chẵn":"số lẻ";
console.log(a2);
let diem=parseInt(prompt("nhập điểm trung  bình cả năm của bạn"));
let ketQua=(diem>0&&diem<=10)?(diem>=8?"giỏi":(diem>=6.5?"khá":(diem>5?"trungbinh":"yếu"))):"vô lý";//cách này khiến cho câu lệnh trở nên gọn gàng hơn bth thì ít ai dùng toán tử 3 ngôi vào 1 bài toán quá nhiều kết quả lồng nhau chỉ làm cái này cho mi hiểu thôi
console.log(ketQua);