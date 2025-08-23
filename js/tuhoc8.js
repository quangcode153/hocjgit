//object(đối tượng)
let a=5;
let b=6.5;
console.log(typeof a);
console.log(typeof b);
//vd 
let student ={
    //thuoc tinh: đặc điểm của đối tượng
    fullname:"hà văn quang",
    "2 fullName":"hà văn vinh",
    "color":"red",
    address:{
        city:"bao lộc",
        Country:"VietNam",
    },
    birthYear:2006,
    scores: [8,9,10],
    //phuong thức: hành vi của đối tượng 
    //vd1 lấy chuỗi
    getAge: function(){
        return 2025 - this.birthYear;//khi muốn sử dụng 1 giá trị trong chính object đang thực hiện câu lệnh đó ta sử dụng this.
    },
    //phương thức viết lại để trả về 1 thuộc tính
    getAge2: function(){//thuộc tính this.age chỉ được khởi tạo khi ta gọi hàm này vd dòng 57
        this.age=2025-this.birthYear//khởi tạo 1 thuộc tính mới trong object
        return this.age;//khi muốn sử dụng 1 giá trị trong chính object đang thực hiện câu lệnh đó ta sử dụng this.
    },
    //vd2 lấy điểm trung bình 
    diemTrungBinh : function(){
        let sumScores=this.scores.reduce((a,b)=>a+b,0);// còn này  chỉ là tạo 1 biến tạm thời để lưu giữ thôi ko so được với this.
        // trả về điểm trung bình
        return sumScores/this.scores.length;
    },
};
//hàm trong 1 object Được gọi như sau 
console.log(`năm nay em ${student.getAge()} tuổi`);
student2={fullname: student.fullname,//lấy tại tên cũ trong ojbject student 
          "1 fullName":"hà le quỳnh như",
          getAge:student.getAge,
          birthYear:2005,
          };//khi tạo 1 object mới mà muốn lấy hàm hay thông tin từ object cũ ta có thể thao tác như sau còn nếu muốn lấy giá trị từ 1 hàm trong object ta gọi thêm(), muốn thêm hay bổ sung cách gì ta cũm có thể thao tác như bth
console.log(student2.getAge());//20
//cách truy cập thuộc tính 
//cách 1 dùng (.) Dot Notation giống truy xuất dữ liệu trong struct
console.log(student.birthYear );//2006
console.log(student.address.city);//bao lộc
//cách 2 sử dụng [] Braket Notation cách này dùng khi key đặc biệt có khoảng trắng hoặc vi phạm quy tắc đặt tên biến 
console.log(student["color"]);//red
console.log(student["2 fullName"]);//hà văn vinh
console.log(student2["1 fullName"]);//hà le quỳnh như
let inputkey=prompt("nhập key bạn muốn truy suất (fullname;address)");//nhập thuộc tính muốn chọn để truy 
console.log("noi dung ban muon truy suat la:");
console.log(student[inputkey]);//nếu nội dung cảu inputkey không tồn tại nó sẽ trả về undefined
//truy cập phương thức 
console.log(student.getAge());//các bạn có thể nhấn ctrl rồi  click chuột trái nó sẽ chạy đến đoạn function đó cho chúng ta
student.getAge2(); //chỉ sau khi thực hiện câu lệnh này thì thuộc tính age mới được khởi tạo 
console.log(student.age);
//việc tạo ra 1 thuộc tính mới này sẽ giảm thời gian tính toán do việc gọi 1 hàm getAge cũ quá nhiều lần làm tăng tốc độ cho chương trình sử dụng mẹo gán giá trị trả về thuộc tính thì hàm chỉ cần gọi 1 lần 
//thêm thuộc tính 
student.email="quang@gmail.com";//thêm thuộc tính email:"quang@gmail."
console.log(student.email);
student["wedsite"]="http://tuhoc.cc";//cũm là 1 hình thức thêm thuộc tính mới 
//xóa thuộc tính
delete student.email //xóa thuộc tính email
//sửa thuộc tính
student.wedsite="http://tuhoc2.cc";
//các phương thức sẵn có trong 
/*1.lấy thông tin
Object.key(student): trả về 1 mảng chứa tất cả key trong object
vd: console.log(Object.key(student)); ["fullname","address",..., tên các thuộc tính hay còn gọi là key];
Object.value(student): trả về 1 mảng chứa tất cả các value trong object ["quang",19...các giá trị];
Object.entries(student):trả về các mảng chứa các cặp key-value vd [["fullname","quang"],["birtYear",2006]...các cặp pair];
Object.hasOwnProperty(email); kiểm tra xem đối tượng có một thuộc tính nào đó hay không nếu đúng nó sẽ trả về true

2. thao tác trên object
Object.assign(target,source) : copy các thuộc tính hay nói cách khác là bổ sung và ghi đè các thuộc tính từ cource lên target vd a{x:1} b{x:2,y:1} Object.assign(a,b) thì a sẽ thành a{x:2,y:1}
Spread operator(...) cách để tạo ra 1 phiên bản clone của 1 object 
vd  a={x:1,y:2};
    let b={...a}; <=> b={x:1,y:2} 
    ngoài ra assign và (...) có thể cho ra cùng 1 kết quả chỉ khác thao tác 
    a={x:1,y:2};
    b={z:4,l:9};
    d={...a,...b};//d={x:1,y:2,z:4,l:9};
    c=Object.assign({},a,b);//d={x:1,y:2,z:4,l:9};
    và ở (...)  cũm có trường hợp cái sau đè lên cái trước vd ở a và b có cùng chỉ số và ta để ...a  rồi mới ...b thì b sẽ đề và thêm cái mới vào a tạo ra 1 object mới
    nói chung 2 cái này đều có thể tạo ra 1 object mới 
    à ta cũm có thể thao tác như sau 
    d={...a,z:3};//d={x:1,y:2,z:3}; 
3. khóa object (bảo vệ dữ liệu)
Object.freeze(student): đóng băng không được thêm sửa làm bất kì điều gì thay đổi dữ liệu của  student
Object.seal(student): không cho thêm thuộc tính không cho xóa thuộc tính nhưng có thể sửa value của các thuộc tính hiện có
tóm tắt  freeze= đóng băng(không đụng được gì hết)
         seal=đóng kín chỉ cho sửa giá trị
         
*/


