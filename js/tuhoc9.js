//Tổng quan về ES6 classes
/**
 về cơ bản ES6 sử dụng class để cung cấp cú pháp rõ ràng hơn so với sử dụng constructor function truyền thống trên thực tế các class chỉ là một loại hàm đặc biệt class vẫn tuân theo những gì ta đã học về kế thừa từ nguyên mẫu prototype
 */
//2.1 class expression (ít dùng hơn);
const SinhvienEx=class{};

//2.2 class declaration.(thường dùng vì nó ngắn gọn hơn);
class Sinhvien{
    //các thuộc tính riêng
    constructor(fullname,ID,birthday,homeTown){
        this.fullname=fullname;
        this.ID=ID;
        this.birthday=birthday;
        this.Town=homeTown;
    }
//các phương thức, khai báo trong thân class  ngoài constructor 
//không cần function keyword("=function") ko có cài nì như bth
showInfo(){
    return(`${this.fullname} ${this.ID} ${this.Town}`);
}
//currenYear nhập từ bên ngoài 
tinhNam(currenYear){
    return currenYear - 2020;
}
}
const nhung=new Sinhvien("nguyễn ánh nhung",20234,2006,"HaNoi");
console.log(nhung);
console.log(nhung.showInfo());
//và nếu kiểm tra nguyên mẫu đối tượng nhung chính là class sinh viên 
console.log(Object.getPrototypeOf(nhung));

console.log(Object.getPrototypeOf(nhung)===Sinhvien.prototype);//true
/**
 * tóm lại về cơ bản cách viết theo class giúp cú pháp nhìn gọn hơn phân tách rõ ràng thuộc tính và phương thức
 * nếu bạn học ngôn ngữ khác thì cách sử dụng Class sẽ giúp bạn dễ tiếp cận hơn nhưng lưu ý bản chất js không có class class là 1 hàm đặc biệt và nó tuân theo kế thừa từ prototype
 * classes are not hoisted (không tự đọng đứa khai báo lên đầu ) xem lại tuhoc4.js để hiểu lại
 * 
 */
//để thêm phương thức vào class ta thực hiện như thêm phương thức trong constructor 
Sinhvien.prototype.callAge=function(currenYear){
    return currenYear-this.birthday;
}
console.log(nhung.callAge(2025));//output:19
console.log(nhung);
console.log(nhung.tinhNam(2025));
//instance method : tạo ra một phương thức hoạt động theo từng object riêng 
//static method: tạo ra 1 phuong thức chung để xử lí các đối tượng có cùng class 
class hocSinh{
    constructor(fullname, birthYear){
        this.fullname=fullname;
        this.birthYear=birthYear;

    }
    //instance phương thức hoạt động riêng lẻ theo từng đối tượng 
    chao(){
        console.log(`chao  ban ${this.fullname}`);
    }
    //static phuong thức hoạt động rieng của class có tác dụng xử lí các đối tượng có cùng class hoặc làm 1 công việc của class chỉ gọi được qua class chứ khônng được qua object
    static soSanh(hsA,hsB){
        console.log(`bạn ${hsA.birthYear<hsB.birthYear ? hsA.fullname : hsB.fullname} lon tuoi hon  `);
    }
    static khaiBao(){
        console.log("toi la class hocSinh");
    }
}
const lan=new hocSinh("le thi lan",1997);
const huong= new hocSinh("hoài ánh hương",2006);
lan.chao();
console.log(hocSinh.soSanh(lan,huong));
//tóm lại  instance hỗ chợ các chức năng để xử lí thông tin theo từng đối tượng cụ thể 
//còn static hỗ trợ các chức năng xử lí thông tin của nhiều đối tượng có cùng class và là chức năng riêng của class đó cũm đc khi gọi
hocSinh.khaiBao();
//kế thừa (inheritance)
class truongHoc{
    constructor(name,cccd,namSinh,address){
        this.name=name;
        this.cccd=cccd;
        this.namSinh=namSinh;
        this.address={
            city: address.city,
            district: address.district,
            street: address.street,
        };

    }
}
/**tay nhanh hơn não nhưng không nỡ xóa thôi 
 * const sinhVien=new truongHoc("Nguyên Ngọc Hà",654235446,1998,{
    city:"HCM",
    district: "bình thạnh",
    street: "dienbienphu"
});
const giangVien=new truongHoc("Lê Thanh Tu",345262335,1989,{
    city:"HCM",
    district: "bình thạnh",
    street: "dienbienphu"
});
console.log(sinhVien.address.city);
 */
//làm lại
class School{
    constructor(id,name,birthYear){
        this.id=id;
        this.name=name;
        this.birthYear=birthYear;
    }
    //phuong thuc school;
    calcAge(currenYear){
        return currenYear-this.birthYear;
    }
}
//tạo con của lớp school
class Student extends School{
    constructor(id,name,birthYear,mon){
        super(id,name,birthYear);//lấy contructor từ lớp cha
        this.mon=mon;//thuoc tinh rieng cua lơp con
    }
    tienHocLai(){
        return this.mon*400;
    }
}
//con thừa hưởng lại những cái mà class cha đã có và có thể bổ sung thêm những cái mới của riêng mình còn cách tạo object triên khai thì vẫn như bth 
//ứng dụng
class shape{
    constructor(name){
        this.name=name;
    }
    calculateArea(){
        return 0;
    }
}
class Square extends shape{
    constructor(name,side){
        super(name);
        this.side=side;
    }
    calculateArea(){
        return this.side*this.side;
    }
}
class Rectangle extends shape{
    constructor(name,width,height){
        super(name);
        this.width=width;
        this.height=height;
    }
    calculateArea(){
        return this.width*this.height;
    }
}
const Sq1=new Square("vuong",3);
const rect1=new Rectangle("nhat",3,4);
console.log(Sq1.calculateArea());
console.log(rect1.calculateArea());




