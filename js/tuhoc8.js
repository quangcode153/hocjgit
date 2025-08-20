//object(đối tượng)
let a=5;
let b=6.5;
console.log(typeof a);
console.log(typeof b);
//vd 
let student ={
    //thuoc tinh: đặc điểm của đối tượng
    fullname:"hà văn quang",
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
    //vd2 lấy điểm trung bình 
    diemTrungBinh : function(){
        let sumScores=this.scores.reduce((a,b)=>a+b,0);
        // trả về điểm trung bình
        return sumScores/this.scores.length;
    },
};
//các hàm trong 1 object Được gọi như sau 
console.log(`năm nay em ${student.getAge()} tuổi`);
student2={fullname: student.fullname,getAge:student.getAge,birthYear:2005};//khi tạo 1 object mới mà muốn lấy hàm hay thông tin từ object cũ ta có thể thao tác như sau còn nếu muốn lấy giá trị từ 1 hàm trong object ta gọi thêm()
console.log(student2.getAge());//20