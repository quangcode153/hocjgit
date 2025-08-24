//object kiến thức về object 2
//tìm hiểu về constructor hàm tạo khuôn mẫu trong js
const student ={
    fullName : "hà văn quang",
    birthYear : 2006,
    address :{
        city : "bao loc",
        country : "viet nam",
    },
    getAge : function(){
        return 2025 - this.birthYear;
    },
}
//để tạo ra nhiều đối tượng có cùng khuôn mẫu(prototype) ta sử dụng constructor
//cách 1 function expression(ít dùng);
const SinhVien=function(fullName, ID, birthYear, hometown){
    this.fullName=fullName;
    this.ID=ID;
    this.birthYear=birthYear;
    this.homtown=hometown;
    this.showInfo=function(){
        return `${this.fullName} ${this.ID} ${this.hometown}`;
    };
};
//cách 2 function declaration (thường dùng hơn)
function Student(fullName,ID,birthYear,hometown){
    //thuộc tính
    //tạo ra thuôc tính mới với this.key=value; trong đó this có tác dụng tham chiếu động hiểu hơn ở dòng 39
    this["full Name"]=fullName;//cách thao tác với các tên key không hợp lệ 
    this.ID=ID;
    this.birthYear=birthYear;
    this.homtown=hometown;
    //
    this.showInfo=function(){
        return `${this["full Name"]} ${this.ID} ${this.hometown}`;
    };
}
//tạo 1 đối tượng cụ thể (instance - 1 thể hiện) từ hàm Student;
const nhung=new Student("le khánh nhung",22,2005,"HaNoi");//khi này this sẽ thành nhung và gán tạo ra các phuong thức trong hàm vd: this ID=ID <=> nhung.ID=ID; đó là tác dụng của this
console.log(nhung.ID);
const lan=new SinhVien("le thi lan",23,1997,"lamdong");
//kết quả như nhung
console.log(lan.showIndo());//nếu key của phương thức là 1 tên không hợp lệ thì ta gọi như sau lan["showInfo"]();
//kiểm chứng instance là kiểm tra xem 1 object có phải là instance của 1 constructor/class hay không
console.log(nhung instanceof Student);// true
console.log(nhung instanceof Object);//true
console.log(nhung instanceof Array);//False
//và nhung lan giờ là các object nên có thể thực hiện các thao tác như các object bth vd như them xóa sửa sử dụng các hàm như Object.key...các phương thức ghi ở tuhoc8
//2.prototype trong js mỗi đối tượng đều có một nguyên mẫu chame(prototype) ngoiaj trừ dói với tượng gốc objectBase 
//-objectBase Là gốc của tất cả các đối tượng trong js nếu chúng ta lần theo đến cùng sẽ thấy object và nó không có nguyên mẫu hoặc cha mẹ 
//-vd array sẽ gồm các thuộc tính sau{length:0,prototype:array(0)}trong thuộc tính prototype: array nó sẽ có các thuộc tính và đến prototype ở sâu cuối cùng là object và người ta gọi nó là objectBase 
//để kiểm tra prototype của 1 đối tượng ta thao tác như sau:
console.log(Object.getPrototypeOf(nhung));//Student(...);
console.log(Student.prototype);//Student(...);)
console.log(Student.prototype===Object.getPrototypeOf(nhung));//true
//trong đó Student.prototype: trỏ đến chính thuộc tính prototype của Student; Object.getPrototypeOf: trỏ đến chính prototype của nguyên mẫu cha của đối tượng 
//như vậy khi kiểm tra 1 cái khuôn ta sử dụng .prototype còn khi ktr 1 đối tượng ta dùng Object.getPrototypeOf(doituong) 
//hoặc cách khác 

console.log(Student.prototype.isPrototypeOf(nhung));//ktra Student.prototype có phải cha mẹ của nhung không (true-false)
// ĐỂ  THÊM PHƯƠNG THỨC vào prototype(khuon hay chame) ta thao tác như sau 
Student.prototype.sua =function(){
    console.log(`${this["full Name"]} gau gau`);
}
//them phuong thuc vao đói tượng cụ thể
nhung.khoc=function(){
    console.log(`${this["full Name"]} huhu`);
}
//tóm tắt để thêm thuộc tính cho cái khuôn chung ta dùng đến prototype nó sẽ cho thêm thuộc tính đó cho tất cả các object có chung prototype đó 
//còn nếu muốn thuộc tính riêng biệt của từng đối tượng cụ thể ta gọi tên thuộc tính mới gán như bth là được 
//ĐỂ THÊM THUỘC TÍNH vào prototype
Student.prototype.emailtruong="utc2@gmail.com";
console.log(nhung.emailtruong);//"utc2@gmail.com"
//ktr nhung có trực tiếp chứa thuộc tính emailtruong hay không
console.log(nhung.hasOwnProperty(emailtruong));//false vì email mới được thêm chứ ko phải có ngay từ khi mới khởi tạo ban đầu nên chỉ được coi là kế thừa chứ không trực tiếp chứa 
