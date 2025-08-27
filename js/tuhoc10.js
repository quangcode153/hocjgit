//getter and setter (đây là cơ chế để truy cập và thay đổi thuộc tính của object một cách an toàn) đặc biệt khi muốn kiểm soát logic khi đọc hoặc gán giá 
//getter là một phương thức được sử dụng để lấy giá trị của một thuộc tính dùng khi muốn tính toán giá trị dựa trên các thuộc tính khác mà không lưu trữ trực tiếp
/**
 * giúp cho dữ liệu có thể thay đổi liên tục khi thay đổi dữ liệu khác
 * tiết kiệm bộ nhớ chỉ tính ra kết quả khi cần tới 
 * đảm bảo tính đúng đắn tránh lỗi dựa trên giá trị gốc
 * không cho người khác dễ dàng sửa dữ liệu gốc 
 */
//setter là một phương thức được sử dụng để thiết lập giá trị cho một thuốc tính sử dụng khi muốn kiểm tra validate hoặc xử lí dữ liệu trước khi lưu vào thuộc tính 
/**
 * khi gọi setter thì như gán một thuộc tính bình thường nhưng bên trong setter có thể xử lí, kiểm tra hoặc thay đổi giá trị trước khi lưu 
 * giúp cho kiểm soát dữ liệu trước khi lưu(vd kiểm tra sô tiền >0 rồi mới tiến hành cộng vào tài khoản )
 * ẩn dữ liệu thực 
 * tách logic xử lí
 */
//tóm tắt getter chỉ để xem giá trị còn setter dùng để gán giá trị, kèm logic kiểm tra xử lí 
class school{
    constructor(id,name,birthYear,score){
        this.id=id;
        this.name=name;
        this.birthYear=birthYear;
        this._score=score;//khi có kí hiệu _ nghĩa là thuộc tính này được bảo vệ (protect)ta không nên truy cập nó từ bên ngoài mà nên thông qua  phương thức nào đó quy ước giữa các lập trình viên

    }
    calcAge(currentYear){
        return currentYear-this.birthYear;
    }

    //getter cho thuộc tính score
    get score(){
        return this._score;
    }//khi gọi getter chỉ cần như khi gọi với thuộc tính cứ coi đây là 1 thuộc tính đặc biệt cũm được school.

    set score(value){
        if(value>0) this._score+=value;
        else console.log(`gia tri ban nhap khong hop le`);
    }
    //khi dùng set ta có thể nhập giá trị của thuộc tính kèm theo điều kiện để kiểm tra giá trị đó có hợp lệ để lưu hay không 
    get age(){
        currentYear= new Date().getFullYear();
        return currentYear-this.birthYear
    }
    set age(value){
        currentYear= new Date().getFullYear();
        this.birthYear=currentYear-value;
    }

}
const john = new school(1023,"quang",2006,24);
console.log(john.score);//24,gọi 
john.score=22;//gọi setter gán giá trị trực tiép như thuộc tính 
console.log(john.score);//46
console.log(`nam nay em ${john.age} tuổi`); //19
john.age=20;
console.log(john.birthYear);2005;// age có thể dựa vào tuổi mà thay đổi năm sinh
//2 phương thức này hỗ trợ cho việc nhập xuất dữ liệu của 1 object có thể tiện lợi hơn đảm bảo nhiều tính chất về bảo mật an toàn tránh lỗi trong quá trình nhập xuất dữ liệu 
//encapsulation(tính đóng gói)
/**
 * Là việc giấu đi dữ liệu bên trong object và chỉ cho phép truy cập thay đôi dữ liệu đó thông qua những phương thức method được định nghĩa nói dễ hiểu object như là 1 các hộp data trong đó là đồ vật ng bên ngoài không được thò tay lấy đồ trực tiếp trong hộp họ chỉ được dùng những cái cửa (method:getter setter) mà object cho phép (nghe như gắp gấu bông ấy nhờ)
 * mục đích : bảo mật dữ liệu không cho code bên ngoài chỉnh sửa lung tung 
 * Kiểm soát truy cập: quy định cái nào public(ai cũm sài được ) cái nào private ( chỉ sài trong class) cái nào protected(chỉ class con mới xài được )
 * Dễ bão trì: nếu muốn thay đổi cách lưu trữ dữ liệu chỉ cần sửa trong class, code bên ngoài không bị ảnh hưởng 
 * Che dấu đi sự phức tạp: người dùng chỉ thấy API đơn giản không thấy những chi tiết bên trong 
 * Tóm tắt: tác dụng là giấu dữ liệu + kiểm soát cách truy cập nó 
 */
/**khái niệm
 * public fields: trường công khai hay trường công cộng 
 * Private fields: trường riêng tư 
 * Public method: phương thức công khai
 * Private method: phuong thức riêng tư
 * tính đóng gói cho phép 
 */
class Wallet{
    constructor(bankName,pin){
        this.bankName=bankName;
        this.pin=pin;
        this.balance=0;//tài khoản ban đầu bằng không
    }
    //phương thức gửi tiền vào tài khoản
    deposi(value){
        this.balance+=value;
    }
    //phương thức rút tiền
    Rut(value,pin2){
        if(this.balance<value) console.log("tiền trong tài khoản của quý khách không đủ");
        else{
            if(this.pin==pin2){
                 this.balance-=value;
                console.log(`bạn rút tiền thành công ${value}, số tiền còn lại : ${this.balance}`);
               
            }
            else{
                console.log("mật khẩu của bạn không hợp lệ ");
            }
            
        }
    }
}
const nhung=new Wallet("Agribank",224);
nhung.deposi(26);
nhung.Rut(20,224);
//các thuộc tính và phương thức ta dùng ở trên gọi là trườn công cộng và phương thức công cộng là từ ngoài class có thể truy cập 1 cách đơn giản 
//dùng dấu thanh để đánh dầu trường riêng tư 
class Wallet2{
    #pin;//khai báo trường riêng tư trong thân class và khi này các thuộc tính này sẽ không thể được gọi từ bên ngoài 
    #balance;
    #inputpin=false;
    constructor(bankName,pin){
        this.bankName=bankName;
        this.#pin=pin;
        this.#balance=0;//tài khoản ban đầu bằng không
    }
    //phương thức gửi tiền vào tài khoản
    deposi(value){
        this.#balance+=value;
    }
    
    #inputpin2(pin){
        return this.#pin===pin;
    }
    check(pin){
        if(this.#inputpin2(pin)) this.#inputpin=true;
        else console.log(`mk lỗi`);
    }
    //phương thức rút tiền
    
    Rut(value){
        if(this.#balance<value) console.log("tiền trong tài khoản của quý khách không đủ");
        else{
            if(this.#inputpin){
                 this.#balance-=value;
                console.log(`bạn rút tiền thành công ${value}, số tiền còn lại : ${this.#balance}`);
               
            }
            else{
                console.log("mật khẩu của bạn không hợp lệ ");
            }
            
        }
    }
    xemtk (){
        if(this.#inputpin) console.log(`tien con lai trong tai khoan cua ban là ${this.#balance}`);
        else console.log("mật khẩu sai");
    }
    doimk(pin2){
        if(this.#inputpin){ 
            this.#pin=pin2;
            console.log(`mk mới đã được cập nhật`);
        }
        
    }
    //viecj thông qua nhiều bước để kết luận true false giống như hàm dễ tái sử dụng dể bảo trì chứ không ở trên ta dùng if === là ra rồi không cần phải dùng nhiều hàm # như vậy này chỉ test thôi 
 //nhập mật khẩu
}

const tuan=new Wallet2("pham quang quoc tuan",123);
tuan.check(123);//khi nhập đúng mới cso thể dùng các chức năng bên dưới giống chỉ khi đăng nhập rồi mới có thể tiến hành thao tác á
tuan.xemtk();
tuan.deposi(200);
///... Cách chức năng còn lại 





