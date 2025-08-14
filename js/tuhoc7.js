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
/*
1.thêm xóa phâng tử
 các phương thức để lằm việc với mảng
 push(): thêm vào cuối mảng vd arr.push(4); thay vì ta thêm 1 giá trị ta cũm có thể thêm 1 amngr vào cuối mảng tuy nhiên nó sẽ tồn tại dưới dạng 1 giá trị mảng vd [1,2,[3,4]] nếu thêm [1,2]push([3,4])
 pop(): xóa phần tử cuối mảng vd arr.pop();
 unshift() thêm vào đầu mảng arr.unshift(0);
 shift(): xóa phần tử đầu mảng arr.shift();
 splice(start,deletecount,item...): xóa chèn bổ sung tại vị trí bất kì vd arr.splice(1,0,'a'); chèn a vào index 1 dịch các giá trị từ vị trí 1 đổ đi sang phải hay nói cách khác là thêm giá trị vào mảng giá trị này có thể là 1 2 hay nhiều có thể là mảng biến tùy theo số lượng item mà thêm trong dấu ..., nếu arr.splice(1,1)  thì nó sẽ xóa giá trị tại vị trí index 1, nếu arr.splice(1,1,item) thì nó sẽ xóa giá trị tại vị trí 1 và thêm vào vị trí đó giá trị item thực hiện việc xóa và thêm liên kề 1 cách dễ dàng với mảng và đương nhiên sô lượng item có thể thêm không phải chỉ 1 gia trị đơn thuần 
2.kết hợp/ tách mảng
 concat() : nối mảng vd [1,2].concat([3,4]) kết quả [1,2,3,4]
 slice(start,end)  cắt ra mảng con mà không ảnh hưởng đến mnarg gốc vd let cop=arr.slice(1,3); vậy cop đang giữ giá trị từ index 1 đến trước index 3 bao gồm cop=[arr[1],arr[2]]; nếu end =0 và start>0 thì mảng rỗng, nếu không điền end thì nó duyệt từ start đến hết mnarg gốc, nếu start âm thì nó tính từ cuối lên từ 1=n-1, 2=n-2 vd mảng có 5 phần tử nếu start =-2 thì nó sẽ hiện [arr[3],arr[4]] hay nói cách khác chạy ngược lên về với khởi đầu là 1 thay vì 0 như  chạy theo xuôi
 join(separator): nối các phần tử thành chuỗi vd arr=["python","js"] thì arr2=arr.join() thì arr="python,js" hoặc trong ngoặc là dấu ngăn giữa các phần tử có thể là join(-) thì python-js ...
 arr.toString() tương tự như join nhưng ngăn cách giữa các phần tử luôn là ,
3.tìm kiếm thì lại file tuhoc4.js
4.duyệt mảng
 forEach(callback(value,index,array)): duyệt từng phần tử  vd arr.forEach(x=>console.log(x)); trong phần trong ngoặc sẽ có thể làm hàm hay bất cứ thứ gì có thể làm với giá trị và vị trí của bién vd arr=[1,2,3,4] arr.forEach((value,index)=>{console.log(`${index}:${value}`)}) hay thực hiện 1 công việc nhất định có sử dụng đến các giá trị trong mảng nên nhớ các vị trí trong hàm này lần lượt là value, index, array nó là bất biến đặt tến biến trước đến gán các giá trị rồi làm gì thì làm 
 map(callback): ở cái trên chỉ duyệt không trải về cái j nhưng hàm này trả về 1 hàm mới dựa trên hàm cũ vs let number=[1,2,3]; let newNumber=number.map((value)=>{return value*2}) kết quả của newNummber=[2,4,6] tương tự như cái ở trên cái vị trí của mảng lần lượt là value, index và ta có thể sử dụng các giá trị đó làm các tác vụ ngoài ra ta còn có thể tạo hàm bên ngoài còn vô trong chỉ cần gọi tên vd function tong(value){return value*2} arr=[1,2,3] let newarr=arr.map(tong); là được nó sẽ newarr=[2,3,6];
 filter(callback):lọc mảng theo điều kiện let newarray=arrfilter(x=>x%2==0); newarray=[2,4,6];
 reduce(callback, initialValue): gộp tích lũy toàn bộ phần tử mảng thành 1 giá trị duy nhất: trong đso callback như trên là một hàm lấy các thông tin của mảng lần lượt là value index để thực hiện 1 tác vụ cụ thể , initialValue là giá trị ban đầu  như sum thì giá trị ban đầu khi mới khởi tạo là 0 vd let sum=number.reduce((a,b)=>a+b,0);
 some(callback):kiểm tra có ít nhất 1 phần tử thỏa điều kiện không trả về true hoặc false callback có  thể là điều kiện vd number.some(x=>x>5) nếu có ít nhất 1 giá trị >5 thì đáp án trải về là true còn lại nếu không có đáp án nào > 5 thì nó trả về false 
 every(callback):kiểm tra tất cả các phần tử trong mảng có thỏa mãn điều kiện không nếu có thì trả về true nếu 1 cái không thỏa mãn nó sẽ trả về false vd numbers.every(x=>x>0) nếu tất cả các giá trị trong mảng number đều dương thì đap án trả về sẽ là true nếu 1 giá trị trong mảng âm thì sẽ là false
5.sắp xếp đảo ngược
 sort() sắp xếp vd arr.sort((a,b)=>a-b) tăng dần và ngược lại b-a là giảm dần
 reverse(): đảo ngược mảng dễ nên khỏi ví dụ 
 */

