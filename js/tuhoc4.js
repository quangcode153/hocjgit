//BÀI $ PHẠM VI HÀM VÀ XỬ LÍ CHUỖI
/*phạm vi của hàm
1.global scope:phạm vi toàn cục là những  biến được khai báo bên ngoài không nằm trong phạm vi của hàm nào có thẻ truy suất được mọi nơi 
Function-scope:phạm vi của hàm hay trong hàm chỉ có thể truy suất ở trong hàm  mà thôi 
3.block-scope:phạm vi nhỏ hơn nữa là các câu lệnh nằm trong dấu ngoặc nhọn {} thường được dùng với hàm for hoặc if ... những biến được khai báo trong đây không thể truy suất từ bên ngoài hàm ngoài biến đc khỏi tạo với kiểu var vì kiểu var có function scope
Phạm vi sử dụng là một cách quan trọng để tránh xung đột tên biến
Với const và let thì biến truy suất được nếu cùng cấp hoặc từ phạm vi cấp thấp hơn

*/
/*
hoisting và so sánh var let const
var:Được nâng cao(hoisted)- có thể sử dụng trước khi nó được khai báo trong mã lệnh 
let,const cung được nâng cao (hoisted)-tuy nhiên biến sẽ nằm trong vùng temporal dead zone - không thể sử dụng biến trước khi nó được khai báo 

*/
console.log(a);
var a=3;//với  var nó sẽ không lỗi mà với câu lệnh này nó tương đương đẩy var a; lên cùng rồi thay câu này thành a=3; nhớ nó chỉ đẩy khai báo thôi còn phần gán giá trị nó vẫn ở chỗ đó nên khi khai báo kiểu này nó sẽ nhận in ra giá trị là undefined
// console.log(b);
// let b=3;//lỗi 
//về tiểu sử thì var ra đời đầu tiên về sau để tránh lỗi và cho dòng code chạy tuần tự từ trên xuống dưới mới có sự xuất hiện ra đời của let và const
/*về điểm khác nhau: 
var:có phạm vi là funstion scope: nếu một biến được khái báo bằng var phạm vi của nó sẽ là phạm vi của hàm (function)-> biến sẽ được đẩy lên đầu phạm vi function scope tức thoát khỏi {} 
let,const: có phạm vi block scope
-khai báo lại
Var: có thể khai báo lại một biến sử dụng như var mà không gaay ra lỗi
let: không thể khai báo lại một biến sử dụng let trong cùng 1 phạm vi(toàn cục , hàm, block{})

*/
//cách sử lý chuỗi index, length phần này khá quan trọng vì những thông tin hiện trên màn hình để người dùng đọc và tương tác đều là chuỗi nên là cần ghi kĩ 
/*
 trong js string là tập hợp các ký tự, vd như chữ cái, số hoặc ký tự đặc biệt:
 có 3 dấu có thể ngoặc nội dung in ra màn hình của hàm console.log là "" '' ``(riêng cái này có thể xuống dòng còn các cái kia muón xuống dòng phải \n) 
 để khởi tạo chuỗi không có phức tạp như c là phải fgets(bien,sizeof(bien),std);bien(strcspn[bien,"\n"])=0;
 còn trong python và js chỉ cần khởi tạo như 1 biến có giá trị là 1 nội dung chuỗi như bình thường bth 
 let a=`hôm nay trời nắng 
 tôi quyết định đi bơi` cũm được chỉ cần xuống dòng vậy là máy tự hiểu như \n
 1 chuỗi như 1 mảng có các giá trị là các kí tự và được bắt đầu từ 0 và muốn kiểm tra chiều dài một biến ta sử dụng .length vd console.log(namebien.length); vd
 */
let s3=prompt("nhập văn bản của bạn:");
if(s3.length>14){
    alert("nội dung văn bản vượt quá mức cho phép :")
    s3=prompt("nhập lại văn bản của bạn:");
}
else{
    alert(
    `bạn đã nhập :${s3} có ${s3.length} ký tự 
    số tự tự còn lại là ${14-s3.length}`
);
}
//đó là cách sử dụng hàm đo độ dài văn chuỗi 
/*
các phương thức xử lý chuỗi 
1.trim(): xóa toàn bộ khoản trắng ở cả hai đầu chuỗi
2.trimEnd():xóa toàn bộ khoảng trắng ở cuối chuỗi
3.trimStart(): xóa toàn bộ khoảng trắng ở đầu vd như s3= ("    he    loo   ");
    s3=trim(s3); s3 sẽ thành "he      loo"
    S3=trimEnd(s3) s3 sẽ thành "      he     loo"
    S3=trimStart(s3) s3 sẽ thành "he    loo     "
4.str1.concat(str2,str3,...,strN):  nối các chuỗi vào trong ngoặc vào chuỗi 1 vd
    let Newstring=str1.concat(str2,str3,...,strN);
5.toUpperCase():chuyển toàn bộ chuỗi sang in hoa cách thao tác có thể là gán có thể là gọi in ra vd 
    let Newstring=oldstring.toUpperCase(); rồi gọi console 
    Hoặc console.log(oldstring.toUpperCase());
6.toLowerCase():chuyển toàn bộ chuỗi sang in thường cách dùng như trên 
7.charAt(index):trả về chuỗi nằm ở vị trí index được truyền vào hay nói cách khác bảo nó in ra char nằm ở vị trí nào đó vd
    console.log(oldstring.charAt(2)) thì nó sẽ in ra kí tự ở vị trí thứ 2 của chuỗi vd hello nó in ra l hoặc đơn giản hơn là oldstring[2] cũm có kết quả tương tự 2 cách này có vài điểm nhỏ khác nhau Nếu vượt quá độ dài charAt() sẽ trả về "" chuỗi rống  còn a[] sẽ trả về undefined
8.replace(oulvalue,newvalue):thay thế giá trị (oulvalue) đầu tiên được tìm thấy trong chuỗi bằng giá trị mới (newvalue).
    let s14="học học nữa học mãi";
    console.log(s14.replace("học","ngủ"));//kq:ngủ học nữa học mãi (thay kĩ tự đầu tiên nó tìm thấy)
    console.log(s14.replace(/học/g,"ngủ"));//ngủ ngủ nữa ngủ mãi (thay tất cả kí tự có trong chuỗi mà nó tìm thấy)
9.repeat(count): lặp chuỗi count lần count: số lần lặp lại chuỗi (cách thao tác có thể tạo biến và gán giá trị hoặc gọi console)
    console.log(s14.repeat(3));//in ra trực tiếp s14 3 lần
    let s15=s14.repeat(3)//rồi gọi console.log cũm Được
10.indexOf(searchvalue,[fromindex]):timf kiếm (searchValue) xuất hiện lần đầu trong chuỗi. Nếu tồn tại trả về vì trí index, nếu không tồn tại sẽ trả về -1
    vd: let s15="chao moi nguoi";
    s14=s15.indexOf("a"); s14 sẽ có giá trị là 2 vì a nằm ở vị trí 2 trong s15
    s14=s15.indexOf("o",4);trong ngoặc có 2 mục 1 là kí tự cần tìm 2 là vị trì xuất phát tìm ở đây tìm kí tự 0 từ vị trị 4 = 6
11.lastIndexOf(searchValue,[endIndex]):Tìm kiếm giá trị xuất hiện cuối cùng của chuỗi (searchValue) trong chuỗi gốc Nếu giá trị tìm kiếm không được tìm thấy nó sẽ trả về giá trị là -1 endIndex(tùy chọn): tìm kiếm khoảng từ vị trí index 0->endIndex Nếu bỏ trống nó sẽ tìm kiếm trên toạn bộ chuỗi vậy nó ngược với cái trước 1 cái là cho biết điểm bắt đầu xét để tìm còn cái này cho biết giới hạn tìm
12.includes(searchString,[fromindex]):tìm kiếm (searchValue) có trong chuỗi gốc hay không nếu có trả về true còn không nó sẽ trả về false, fromindex(tùy chọn): vị trí bắt đầu tìm kiếm tỏng chuỗi nếu bỏ trống nó sẽ xét toàn CHUỖI
Cách thao tác của 11 và 12 khá giống 10 nến không cho ví dụ lại
13.startsWith:Kiểm tra xem chuối gốc có bắt đầu bằng searchvalue hay không? đùng trả về true sai trả về false startIndex(tùy chọn):Vị trí bắt đầu tìm kiếm trong chuỗi. Nếu bỏ trống: tìm kiếm sẽ bắt đầu từ dầu chuõi 
14.endsWith:Kiểm tra xem chuỗi gốc có kết thúc bằng searchValue hay không nếu có trả về true sai trả về false endIndex(tùy chọn):vị trí  kết thúc tìm kiếm trong chuỗi gốc nếu bỏ trống nó sẽ xét tới cuối chuỗi gốc

-Tách chuỗi thành các phần tử của mảng:string.split(separator,[limit])
-tách chuỗi trả về mảng(mảng sẽ học chuyên sâu sau nhé)
*Trong đó:
       string:chuõi gốc
       saparator:chuỗi để xác định vị trí thực hiện tách(nó có thể là 1 ký tự một biểu thức chính quy)
       limit(tùy chọn):giới hạn số lượng phần tử trong mảng kết quả 
    vd:
    let fruits="apple,orange,banana,grape";
    //tách dựa trên dấu
    let fruitsArray=fruits.split(",");
    console.log(fruitsArraay);
    //output:("apple","orange"...);
    //giới hnaj các phần tử mảng
    let fruitsArray2=fruits.split(",",3);
    //khi in fruitsArray2 ra chỉ có 3 phần tử không có phần tử cuói là 
    nếu split("",3) nó sẽ tách từng kí tự luôn là ["a","p","p"];.... tương tự với dấu cách cũng là 1 kí tự 
    
*/




