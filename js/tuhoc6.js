//Date and Time  
//1.tạo đối tượng Date ta sử dụng new Date()
let currenDate= new Date();//gán cho biến currenDate Thời gian lúc chạy tới câu lệnh đó 
// và currenDate có kiểu loại là object
//đối tượng date sẽ tự động lấy thời gian hiện tại khi tạo tức là nó được gán giá trí khi dòng lệnh đó được thực thi và không thay đổi theo thời gian sau đó nếu không khai báo lại

alert(`${currenDate}`);
//thông tin mà biến currenDate Giữ gồm nhiều loại như year month date minutes getsecond.. Và cách để triết suất từng thông tin trong đấy ra là ;
const year=currenDate.getFullYear();
const month=currenDate.getMonth()+1;// vì giống trong mảng tháng bắt đầu từ 0
const day=currenDate.getDate();
// còn getDate() getHours()... Có thể tìm hiểu khi cần 
alert(`hiện tại là ngày  ${day} tháng ${month}`);
let moc0=new Date(0);//nếu trong ngoặc không có gì nó sẽ lấy thời gian thực hiện câu lệnh còn nêu là 0 nó thì nó sẽ theo quy ước là 00:00:00 ngày 1 tháng 1 năm 1970;
alert(`mộc 0 la : ${moc0}`);
//2.có 1 khái niệm là timestamp giá trị này được tính khi sử dụng hàm .getTime(); trong biến thời gian có tác dụng để gán giá trị thời gian cho 1 giá trị nào đó vd 
//còn nếu muốn lấy thời gian kể từ mốc 0 tính bằng milisecond ta thao tác như sau
let timestamp=new Date().getTime();//và thời gian này vô cùng lớn
alert(`giờ kể từ mốc 0 là ${timestamp}`);//giá trị in ra lúc này là 1754309690827(lúc thử lại có thể sẽ lớn hơn) giá trị này là timestamp và nó đc sử dụng như sau
let time2=new Date(timestamp);
alert(`thời gian ${time2} được timestamp có giá tri${timestamp} lưu  `);
//vậy timestamp là giá trị của 1 thời gian cụ thể dược tính từ mốc 0 có đơn vị là miligiaay hay nói đơn giản hơn trong ngoặc new Date(a); thì a là nếu ko đc nhập nó sẽ tự tính là giá trị hiện tại khi câu lệnh chạy  còn nếu nhập thì sẽ hiện thời gian sau a minigiaay kể từ mốc 0
let timenow=currenDate.getHours();
alert(`hiện tại là:${timenow} giờ`);
//sét ngày tháng theo ý muôn 
//cách 1:new Date(year, monthindex, day, hour, minutes, seconds, mili);
let mydate=new Date(2025, 7, 4);//nhớ tháng luôn lui về 1 giá trị; các tham số trong ngoặc lần lượt là (year, monthindex, day, hour, minutes, seconds, miligiay); nếu chỉ nhập 1 giá trị nó sẽ  tự tính đó là miligiay còn nếu ko nhập nó sẽ tự tính đó là thời gian lúc câu lệnh thực hiện
alert(`thời gian tôi mới nhập là:${mydate}`);//kiểu này nó sẽ in theo form nguyên bản muốn in kiểu bình thường thì làm theo ở dưới 
alert(`thời gian tôi vừa nhập lại theo form bình thường là: ${mydate.toLocaleDateString()}`);//như này nó sẽ in dưới dạng dd/mm/yy
//cách 2:new Date(datestring)
let mydate2=new Date("2025-08-04T22:43:27");//kiểu chuỗi theo thứ tự "năm-tháng-ngayfTgio-phút-giây";ngày tháng cách với giờ phút bởi chữ T
//còn cách in ra màn hình tương tự có thể trực tiếp theo kiểu tostring nguyên bản hoặc toLocaleDateString() như ở trên 
//cách 3 sử dụng setFullYear, setMonth, setDate
let mydate3=new Date();
mydate3.setFullYear(2024);
mydate3.setMonth(7);
mydate3.setDate(4);
//và in ra màn hình 1 trong 2 cách trên là được cách này hỗ trợ trong việc sửa chữa 1 thông tin ngày tháng hoặc năm ... Trong 1 hỗn hợp thông tin ngày thắng cụ thể 
//như vậy để lấy thông tin là .get..., còn để sửa thông tin là .set...
//ngoài nguyên bản và .toLocaleDateString Thì ta có thể làm thủ công theo ý ta muốn 
let thang0=month<10?"0":"";//nếu muốn trước tháng <10 có só 0
let ngay0=day<10?"0":"";//nếu muốn trước ngày <10 có só 0
alert(`thời gian hiện theo cách thủ công là ngày ${ngay0}${day} tháng  ${thang0}${month} năm ${year}`);
//3.setTimeout 
/*cú pháp
setTimeout(function,milloseconds, param1, param2...);
Trong đó function: là tên hàm;
milloseconds:thời gian delay hay sau bao nhiêu giây thì hàm function hoạt đọng đơn vị mili giây
Param1,param2... là các đối số nhập vào trog hàm nếu có vd tong(a,b); thì param1,param2 ở đây là a và b 
*/
//mẫu
function xinchao(name){
    alert(`xin chào bạn ${name}`);
}
setTimeout(xinchao,2000,"quang");//như vậy sau 2000 mili giây nó sẽ thực hiện hàm xin chào in lên màn hình thông báo xin báo với đói số quang sau đó 
//ngoài việc phải gọi gián tiếp vậy ta cũm có thể tạo hoàn toàn hàm trong settimeout 
setTimeout(function tambiet(){
    alert(`tam biệt bạn nha tớ đi ngủ`);
},3000);
//hoặc bỏ luôn tên hàm đi cũm đc suy cho cùng hàm là những câu  lệnh thực hiện 1 công việc cụ thể 
setTimeout(function (){
    alert(`ngủ ngon nhá`);
},4000);
//mỗi set time out có 1 id ta có  thể clear ko cho settimeout đó thực hiện nữa ta có thể làm như sau 
let timeOUt=setTimeout(xinchao,2000,"quang");//trong câu lệnh này nếu ta sử quang thành 1 tên khác nó cũm sẽ cập nhật tên mới đó ở trên
clearTimeout(timeOUt);//như vậy nó  sẽ không còn thực thi nữa 
//setInterval giúp thực hiện lặp đi lặp lại sau mỗi khoảng thời gian 
//cú pháp giống với settimout khác việc là settimeout thực hiẹn 1 lần còn cái này thực hiện liên tục sau 1 khoangr thời gian
//cách sử dụng cũm có thể gọi tên hàm trực tiếp hoặc thông qua tên hàm tên biến
setInterval(xinchao,30000);
//chỉ như vậy thôi  cứ sau 30s nó sẽ thực hiện câu lệnh này 1 lần 
//ứng dụng
function updatetime(){
    let newtime=new Date();
    alert (`test setIntterval ${newtime}`);
}
setInterval(updatetime,6000);















