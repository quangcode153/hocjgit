//CÁC GÍA TRỊ TRONG TRUE FALSE VÀ CÁC VÒNG lặp
//truthy and falsy values
//chúng ta cũng có thể ép ngược lại từ số -> chuoix
//trong ép kiểu ta cần chú ý với kiểu boolean(true |false)
/*trong js có 1 số giá trị là falsy (giá trị sai) những giá trị này khi được chuyển đổi thành boolean sẽ mang giá trị false ngược lại những giá trị không phải là falsy được coi là truthy (giá trị đúng);
1.false
2.0
3.-0
4.0n
5.""
6.null
7.undefined
8.NaN(Not a Number)
những giá trị được liệt kê ở trên khi chuyến sang kiểu boolean sẽ biến thành falsy 
*/
//cách xuất lựa chọn, thay vì trong ngôn ngữ c ta phải nhiều lần printf thì ở đây ta có thể xuống dòng thì nó vẫn nhận 
alert(`
    chọn cách  tìm kiếm :
    1. tìm kiếm theo tên
    2. Tìm theo tác giả
    3. Tìm theo nhà sản xuất
    4. Tìm theo tiêu đề
    `);
let a=Number(prompt("nhập lựa chọn của bạn:"));
// hoặc dồn vào như này
let b=Number(prompt(`
     chọn cách  tìm kiếm :
    1. tìm kiếm theo tên
    2. Tìm theo tác giả
    3. Tìm theo nhà sản xuất
    4. Tìm theo tiêu đề
    Nhập lựa chọn của bạn (1-4)
    `));
//hoặc dùng html
let chon=function(){
        let a= Number(document.getElementById("menu").value);//lấy  giá trị từ hàm select với id là menu 
        console.log(`bạn đã chọn : ${a}`);
        switch(a){
            case 1: 
                document.getElementById("test").innerHTML="bạn đã lựa chọn tìm theo tên"//gán cho hàm div trong html nội dung hiện ra màn hình
        }//... còn các kiểu khác nói chung khá cần học thêm html và css để hiểu đoạn kết nối này
}
//tiếp đến là hàm while  nó cũm giống c
let i = 1;
while(i<10){//nó sẽ thực hiện đến khi điều kiện không còn đúng nữa quy trình là kiểm tra nếu đúm thực hiện còn ko đúng sẽ thoát vòng lặp ngay lập tức
    console.log(`${i}. Anh yêu em`);
    i++;
}
do{
    console.log(`${i}.Anh yêu em`);
    i++;
}while(i<20);//do while là thực hiện câu lệnh trc 1 lần rồi kiểm tra nếu đk đúng thực hiện tiếp ko thì out
//có thể kiểm tra số nguyên bằng điều kiện
let n=prompt("nhập 1 số nguyên từ (1-99)");
while(isNaN(n)||n<1||n>99||n%1!==0){
    console.log("so bạn nhập không hợp lệ vui lòng nhập lại");
    n=prompt("nhập 1 số nguyên từ (1-99)");
}
//ngoài cách sử dụng vòng lặp trên ta có còn có thể dùng vòng lặp vô tận while true
while(true){//no sẽ chạy vô tận
    n=prompt("nhập tên người bạn thương nhớ");
    if(n==="thuong"){
        console.log("còn nhờ à");
        break;//thoát khỏi vòng lặp
    }
    else console.log("không nhớ à?");
}
//vòng lặp for
for(let i=0;i<10;i++){//khởi tạo biến-> kiểm tra điều kiện biến-> nếu đúng thì thực hiện cầu lệnh trong ngoặc nhọn -> tăng biến i lên 1 đơn vị rồi lại kiểm  tra đến khi không đúng thì out khỏi vòng lặp for
    console.log(`${i}.Anh  yeu em`);
}
//học rồi nên lướt
//tìm hiểu về continue và break
//break để thoát khỏi 1 vòng lặp
//continue dùng để bỏ qua 1 giá trị trong vòng lặp
for(let i=0;i<10;i++){
    if(i%2===0) continue;//nó sẽ nhảy qua vòng lặp tiếp theo còn break là cút  khỏi vòng for 
    else console.log(i);
}
let net=Number(prompt("nhập số chẵn"));
while(net%2!==0){
    alert(`sô bạn vừa nhập không phải số chẵn`);
    net=Number(prompt("nhập lại:"));
}
let sum=0;
for(let i=0;i<=net;i++){
    sum+=i;
}
console.log(`tổng các giá trị từ 0 đến số chẵn ${net} là:${sum}`);
//function expression (hàm)// gọi trước khi định nghĩa sẽ lỗi
let tong=function(){
    let net=Number(prompt("nhập số chẵn"));
    while(net%2!==0){
        alert(`sô bạn vừa nhập không phải số chẵn`);
        net=Number(prompt("nhập lại:"));
    }
    let sum=0;
    for(let i=0;i<=net;i++){
    sum+=i;
    }
    console.log(`tổng các giá trị từ 0 đến số chẵn ${net} là:${sum}`);
}
tong();
let tong2so=function(a,b){//không có 
    console.log(a+b);
}
tong2so(3,4);
//cách khai báo khác thay vì python là def tenham(thành phần): thì cái này function declaration gọi trước khi định nghĩa sẽ không lỗi nhớ định nghĩa là sau đó là 
function tenfunction(a,b){//có hoisting
    return a+b;
}//không khác nhau là mấy 
//tóm tắt về kiểu hàm khai báo như biến và hàm này nội dung gần giống nhau muốn hoạt động thì gọi ten là đc tuy nhiên cách khai báo hàm như ở bên c nó có thể gọi tên rồi khai báo cũm đc còn kiểu khai báo như biến phải khai báo trước mới gọi sau đc nếu gọi truóc rồi mới khai báo sẽ lỗi
//và ta có thể gọi hàm ở trong hàm khác
//ngoài ra còn có 1 kiểu khác là 
let tenfunction2=()=>{//không có hoisting
    console.log(`hello`);
}//kiểu này và kiểu 1 giống nhau đều khai báo trước mới gọi được còn kiểu giống c thì thoải mãi hơn có thể gọi hàm trước khi khai báo 
// đệ quy dùng hàm và gọi lại chính nó 
function giaithua(n){
    if(n===0||n===1) return 1;
    else return n*giaithua(n-1);//vd n=3 sẽ là 3*2*1 nó sẽ thực hiện phép nhận này với giá trị tiếp theo nhỏ hơn giá trị trước đó 1 đơn vị đến khi giá trị đó 1 hoặc 0  sẽ kết thúc vòng lặp và trả về kết quả 

}//đệ quy là gọi lại chính nó trong hàm của nó để thực hiện 1 công việc có vòng lặp và dừng khi găp điều kiện 
//quy tắc lập hàm đệ quy cần có 2 cái
//xác định điểm dừng của bài toán hay điều kiện két thức hàm
//xác định được quy luạt của bài toán để khiến nó thực hiện ra kết quả mong muốn 
