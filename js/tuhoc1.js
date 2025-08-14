//CÁC MỨC ĐỘ ƯU TIÊN CỦA JS VÀ CÁC KIẾN THƯC CƠ BẢN VỀ GÁN ÉP KIỂU TOÁN TỬ CÁC PHÉP SO SÁNH
//1.
//hàm hiện thị hộp thoại lên trên trình duyệt cho người dòng đọc
alert("đây là nội dung js của html");
//hàm hiện thị hộp nhập liệu cho người 
prompt("mời nhâp vào tên của bạn");//giống input("nội dung kêu nhập:") của python và scanf("%d",&a); của ngôn ngữ c
//tiếp tới là biến về nội dung biến thì đã biết ở ngôn ngữ c, ở ngôn ngữ js chỉ có 3 loại là var let const ít hơn nhiều so với ngôn ngữ c gồm (int, float, double, char...)
/*trong đó 
var:từ khóa khai báo biến trước ES6
let:từ khóa khai báo biến được giới thiệu từ ES6
const:KHai báo hằng hằng số: biến không thể thay đổi sau khi đã được gán*/
 //2.khai báo biến
var myname
 //khởi tạo biến
var mtname="hà văn quang"
let mpname="hà văn vinh"
const diem=10;
console.log(mtname);
console.log(mpname);
console.log("điểm của bạn là:"+ diem +" điểm");
let testname=prompt("vui lòng nhập tên của bạn:");
console.log("chào mừng "+ testname +" đến với js");
//3.quy tắt đặt tên biến viên hoa chữ cái đầu từ âm thứ 2 của 1 từ còn lại viết 
/*có các kiểu dữ liệu trong js là :
String:kiểu chuỗi
Number:kiểu số còn về các kiểu số thì biết rồi âm duong nguyên thực ...
Boolean:đúng hoặc sai không có nửa đúng nửa sai
Undefined: giá trị của các biến chưa được gán giá trị
NULL:dùng để gán giá trị mặc định hoặc reset biến 
*/
//4.
console.log(typeof(usename));//cách kiểm tra kiểu dữ liệu của biến 
//cách xuất dữ liệu của biến
let a=20,b=20,kq=a*b;
console.log("mũ 2 của" + a +" là: "+a*a);//có thể ctr + D để thay đổi hàng loạt nội dung giống nhau trong 1 câu lệnh 
//cách khác nếu trong python là f"nội dung {bien}", trong c là ("nội dung %d",tênbien số nguyên);
//còn trong này thì 
console.log(`can ban 2 cua ${b} la ${b}`);
//hoac nhu ngon ngu c
console.log(`so a la:%s so b la:%s `,a,b);
//c1
console.log("tich cua a va b la"+kq)
//c2
console.log("tich a va b la: ",kq);
//c3
console.log(`tich a va b la:${kq}`);
//c4
console.log(`tich a va b la:%s`,kq);
//vậy ta co tông 4 cach de khai bao
//vậy ta quy ước dùng cách khai bảo 4 và 1 vì nó gioonngs python và ngon ngu c ma ta đã học hoặc 3 vì nó khá tiện và dùng được với đa dạng kiểu ngôn ngữ
//5.tiếp theo là các phép toán cơ bản đã học ôn lại cũm được
let tong=a+b;
let hieu=a-b;
let tích=a*b;
let thuong=a/b;
let thuongLayDu=a%b;
//đã học nên nêu lại nhanh thôi
console.log(`tong cua a và b là:%s`,tong);
console.log(`thuong cua a và b là:%s`,thuong);
console.log(`hieu cua a và b là:%s`,hieu);
console.log(`du  cua phep chia lấy du giữa a và b là:%s`,thuongLayDu);
//quy tắc như cũ nhân chia trước cộng trừ sau và các phép tính phước tạp ưu tiên dùng ngoặc thể hiện sự ưu tiên của phép tính 
//+1 mẹo nhấn shift+9 để bỏ nội dung bôi đen vào ngoặc 
//đã học đến đây ta sẽ tiếp xúc đến 19 thứ tự ưu tiên trong js 
/*
1.member access(.): truy cập  thuộc tính đối tượng obj.name vd let a={tuoi:19,tên:"quang"} thì lúc này a.tuoi=19 sẽ được ưu tiên
2.computed member access([]): Khai báo 1 key ='thuoctinh của 1' khi này khai a[key] sẽ được ưu tiên key như tên của 1 thuộc tính, đặc trưng cho 1 thuộc tính được gán từ trước khi gọi key nó sẽ hienj ra có thể ứng dụng trong việc cử lý  toàn bộ thuộc tính trong vòng lặp for vd
        let user = { ten: "Quang", tuoi: 19, diachi: "TPHCM" };

        for (let key in user) {
        console.log(`${key}: ${user[key]}`); // key là "ten", "tuoi", "diachi"
        }Không thể dùng user.key vì key là biến, phải dùng user[key]. cũm có thể dùng để tìm kiếm thuoojjc tính do user nhập vd
        let user = { ten: "Quang", tuoi: 19 };
        let input = prompt("Bạn muốn biết gì? (ten hoặc tuoi)");
        alert(user[input]); // user["ten"] hoặc user["tuoi"]
        ==  hoặc cũm có thể tạo objectTừ dữ liệu linh hoạt
        let arr = ["ten", "tuoi"];
        let data = ["Quang", 19];
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = data[i]; // key từ arr[i]
        }
        console.log(obj); // { ten: "Quang", tuoi: 19 }
        ... Còn rất nhiều về sau có thể tìm hiểu thêm

3. Function call(){}  : kích hoạt hàm
4.new(với tham số):Dùng để tạo một instance mới từ constructor function hoặc class với tác dụng khởi tạo 1 object vd bên dưới 
        function Person(name, age){
            this.name = name;
            this.age = age;
        }
        let p1 = new Person("Quang", 22);//giống kiểu nhập 1 nội dụng mới vào 1 form có sẵn dùng được nhiều lần nếu trùng lặp form(trùng hợp các thuộc tính) còn thuộc tính là như ở 1. Á
        console.log(p1.name); // "Quang"
5.postfix increment/Decrement(++,--):cơ chế tăng giảm giá trị nhưng trả về giá trí cũ trước rồi mới thay đổi a++ a-- tức  là thực hiện câu lệnh xong mới tiến hành tăng giảm giá trị của biến
6.Logical NOT(!)/Bitwise NOt(~): trong đó ! Là đảo ngược Boolean(true->false) và ngược lại còn ~ đảo bit nhị phân  tức là cái nào 0 thì thành 1 và ngược lại và vì nó quá rắc rối nên ta có công thức ~n=-(n+1)
7.Unary Plus/Minus(+,-) + là ép kiểu về số, - là đổi dấu âm vd:+"10"=10;-"10"=-10
8.Prefix increment/Decrement:ngược lại với ý 5
9.typeof,void,delete:trong đó typeof:kiểm tra kiểu dữ liệu,void luôn trả về undefined,delete:xóa thuộc tính object. trong đó typedef hiểu rồi ha còn  delete là xóa 1 thuộc tính trong các thuộc tính của biến vd delete(a.tuoi) chẳng hạn, còn void thì nó không trả về gì cả chỉ thực hiện biến và các giá trị đều có bản chất là undefined
10.exponentiation(**) cơ chế mũ lũy thừa
11.Multiplication,Division,Modulo(*,/,%)
12.addtion/sudtraction(+,-)
13.Bitwise shift(<<,>>,>>>):cơ chế dịch bit sang trái phải: nó khá là khó hiểu vì nó liên quan đến bit lúc nào cần thì seachs ha
14.Relational Operators(<,>,<=,>=,in,instanceof) so sánh số, kiểm tra property:trong đó các kiểu kiểm tra điều kiện hiểu rồi ha còn in là kiểm tra 1 key có tồn tại trong object hay không, instanceof kiểm tra object có phải là instance của 1 constructor/class không nghĩa là kiểm tra xem 1 biến có nằm trong 1 form nào đó có ở trước đó hay không hoặc kiểm tra xem nó có thuộc nguồn object gốc hay cùng 1 nguồn hay không vd
        class Animal {}
        class Dog extends Animal {}
        let cho = new Dog();
        console.log(cho instanceof Dog);    // true
        console.log(cho instanceof Animal); // true
        console.log(cho instanceof Object); // true
Vì Dog kế thừa từ Animal, nên cho cũng là instance của Animal.
15.Equality Operators(==,!=,===,!==): Về bản chất  nó vẫn là so sánh giống và khác bth nhưng có thêm 1 dấu bằng thì nó sẽ so sánh luôn cả kiểu dữ liệu vd  1=='1' sẽ ra true nhưng 1==='1' sẽ ra false vì khác kiểu dữ liệu, 5!=='5' true vì nó khác nhau  thật.
tóm tắt 15 này cho dễ hiểu == nó sẽ tự động quy các giá trị so sánh về cùng kiểu để thực hiện ss, còn === nó nghiêm ngặt hơn xét cả nội dung và kiểu
16.Bitwise  AND(&)-toán tử AND nhị phân: 5&1 nó sẽ quy về nhị phân là 101&001 sẽ =001 tức 1 cách so sánh là so từng bit cái nào cả 2 cùng 1 thì giữ là 1 không thì chuyển về 0
17.Bitwise XOR (^) Toán tử XOR nhị phân : giống ở trên 16 nhưng ngược lại nếu giống nhau thì bằng 0 còn khác thì là 1 vd 5^1=101^001=110 rồi đổi từ 110 về kết quả
18.Bitwise OR (|) toán tử OR nhị phân : cũm đổi về nhị phân nhưng phải cả 2 đều là 0 thì mới là 0 còn nếu ít nhất 1 cái là 1 thì là 1 vd 5|1=101|001=111 vì cái nào cũng ít nhất 1 cái 1
19.Bitwise OR NOT (|=) tonas tử OR gán : là sự kết hợp giữ Bitwise OR(|) và Gán (=) tức là a|=b tương đương với a=a|b thực hiện OR giữa a và b rồi gán kết quả OR đó a
RỒi 19 sự ưu tiên trong js đã xong 
*/
//6.ép kiểu 
let ba=prompt("Nhập giá trị của số thứ nhất:");
//khi này giá trị của ba có kiểu dữ liệu là string nên nhớ các nội dùng nhâp thông qua hàm prompt đều có dạng string vì thế cần ép kiểu nếu nhập giá trị khác với cú pháp parse(kiểu dữ liệu viết hoa đầu như int float double char) 
let tu=parseInt(prompt("nhập gái trị của số thứ hai:"));
//như này ta đã ép nội dung cua biến tu thành int 
let hehe=prompt("nhap so thu tu");
hehe = parseInt(hehe);
console.log(typeof hehe);
// như vậy với thao tác trên ta có thể ép kiểu của dữ liệu và dù là float hay int đều hiện thị type là number
//ngoài ra ta có thể dùng hàm
let hoho=Number(prompt("nhập hoho:"));//chỉ nhận data nhập vào là 1 chuỗi thuần số nếu có 1 kí tự không phải số nó sẽ hiện NaN 
//còn parseInt và parseFloat sẽ nhận những con số xuất hiện đầu bên trái chuỗi các kí
/*7.toán tử gán(=;+=;-=;*=;/=;%=) nói thật tui thấy nó khiến bài code gọn hơn thôi chớ không khác gì mấy
1.(=):x=1<=>x=1;
2.(+=):x+=y<=>x=x+y;
3.(+=):x-=y<=>x=x-y;
4.(+=):x*=y<=>x=x*y;
5.(+=):x/=y<=>x=x/y;
6.(%=):x%=y<=>x=x%y; vì đã hiểu ngôn ngữ c rồi nên khỏi dài dònghay ví dụ ha
*/
/*8.toán tử logic
&&:toán tử và, true nếu tất cả điều kiện đều true, 1 cái false thì tổng kết quả là false
||:toán tử hoặc, chỉ cần 1 điều kiện true thì kết quả tổng là true
!: phép phủ định,!(true)=false;!(false)=true 
 bonus cách lấy số đằng sau dấu phẩy của số thực nếu trong ngôn ngữ c thì %.2f thì trong js là toFixed vd
      let a=9.023843478374;
      a=a.toFixed(2)//a=9.02
*/
/*9.các phép so sánh 
!=: xem có khác nhau không nếu khác ta sẽ được kết quả là true
>, <, >=. <=: biết rồi ha 
==:so sánh  không qutam kiểu dữ liệu ;
!==,===: so sánh cả kiểu dữ liệu lẫn giá trị đã từng nhắc đến ở mục mức độ ưu tiên 
bonus trong phép cộng cả 2 vế đều phải là kiểu number thì mới ra đáp án đúng còn không phải ép kiểu còn các phép như -,/,*,%... khi không cần ép kiểu nó cũm sẽ tự động chuyển ép kiểu 
*/
/*Các hàm toán học cơ bản 
-Math.sqrt(biến):căn bấc 2 của biến
-Math.pow(biến 1, biến 2):biến 1 mũ biến 2
-Math.abs(biến):giá trị tuyệt đối của biến 
-Math.ceil(biến): làm tròn biến lên;Math.floor: làm tròn xuống
-Math.round():làm tròn theo quy tắc toán học bình thường 
-biến.toFixed(n):làm tròn biến đến số thứ n sau dấu , lưu ý kết quả nhận được thuộc kiểu string
-parse.kiểu số(biến):ép kiểu cho biến theo kiểu sau chữ parse nhớ viết hoa chữ cái đầu vd parse.Int(biến)
-Math.min(biens1,bieens2,bien3... Bien n); giá trị bé nhất trong các giá trị trong ngoặc và ngược lại với Math.max() tính ra hàm này khá tiện trong khi trong ngôn ngữ c ta phải tự viết ra hàm này 
-Number(bien): Để chuyển value sang số nếu trong trường hợp không chuyển được nó sẽ trả về NaN(Not a Number)
-isNaN(value): hàm này khá hài về mặt dịch nghĩa để kiếm tra value không phải định dạng số hoặc không thể chuyển sang định dạng số. nếu thật như vật nó sẽ trả về true còn nếu giá trị là số hoặc có thể chuyển sang số thì nó trả về false kiểu xác định có vô sinh không nếu có thì true còn không là false
bonus: isNaN(true): kết quả là false vì true=1;
-Number.isNaN():quên kiến thức ở phần isNaN do dễ nhầm lẫn, rồi đến nội dung hàm này giúp ta kiểm tra xem giá trị có phải NaN ( lưu ý 1 giá trị có phải NaN không phải là kết quả chính xác NaN chứ không phải thông qua mắt ) vd:
let b="quang"
console.log(Number.isNaN(b)); thì kết quả sẽ là false
B=Number(b);
console.log(Number.isNaN(b)); thì kết quả sẽ là true Như vậy nó sẽ chỉ là true khi được máy tính gán là NaN mới true còn lại 1 chuỗi hay bất kì thứ gì bạn coi nhìn bắng mắt và quy chuẩn nó là NaN thì còn hên xui vd Number.isNaN("văn bản " hoặc {})kết quả nhận về sẽ là false, tưởng tượng như đây là hàm xem bệnh nhận đã được bệnh viên chẩn đoán là vô sinh không đã đc kí giấy xác nhận mới tính còn chưa xác nhận thì dù có biểu hiện j cũm không đc đoán bừa à Number.isNaN(isNaN)=true, xem đây là 1 hàm kiểm tra xem biến có giá trị là NaN không cũm đc cho nhanh
tóm lại cho đỡ lộn 1 cái là xác định bệnh nhân có vô sinh không
1 cái xác nhận đã được bệnh viện chẩn đoán vô sinh chưa có giấy kết quả in ra là NaN thì mới true
-Math.random()*n: trong đó Math.random() là 1 kết quả ngẫu nhiên từ 0->1 còn muốn phạm vi random lớn hơn ta có thể nhân thêm với n vd để random từ 1->10 ta có thể let a=Math.random()*10 và sau đó kết quả in của biến a sẽ là một số ngẫu nhiên trong phạm vi từ 0->10 nó sẽ ra cả số nguyên lẫn số thực vì thế nếu muốn kết quả là số nguyên ta ép kiểu là ddwuocj parseInt(Math.random()*10) là được à nên hiểu khoảng là từ (0->1) chứ không phải từ (0->1] nên kết quả sẽ không bao giờ là 1 hay 0;
còn nếu muôn chạy từ 10 thì math.random()*n+10 nói chung cứ cộng trừ vì thứ random duy nhất là hàm Math.random còn những phép tính sau đều như phép toán bình thường nên muốn từ đầu cứ cộng trừ bình thường 
*/
//10  về vòng lặp if else thì nó không khác ngôn ngữ c là mấy về cú pháp nên không cần thiết đi sâu quá 





