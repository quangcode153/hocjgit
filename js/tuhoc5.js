//bài tập chuỗi 
//bài tập 24: nhập vào 1 chuỗi từ bàn phím, đếm xem có bao nhiêu kí tự thường, bao nhiêu in hoa, bao nhiêu số, bao nhiêu space
let cha="Nhập 1 Chuỗi kĩ tự";
let hoa=0;
let thuong=0;
let so=0;
let trang=0;
for(let i=0;i<cha.length;i++){
    if(cha[i]>="a"&&cha[i]<='z') thuong++;
    else if(cha[i]>='A'&&cha[i]<='Z') hoa++;
    else if(cha[i]>='0'&&cha[i]<='9') so++;
    else if(cha[i]===" ") trang++;
}
console.log(`chuỗi có ${hoa} kí tự hoa, ${thuong} kí tự thường, ${so} số và ${trang} khoảng trắng`);
let matkhau=prompt("nhập mật khẩu của bạn");
let hoa2=0;
let thuong2=0;
let so2=0;
let i=0;
let thu=0;
do{
    for(let j=0;j<matkhau.length;j++){
        if(matkhau[j]>='a'&&matkhau[j]<='z') thuong2++;
        else if(matkhau[j]>='A'&&matkhau[j]<='Z') hoa2++;
        else if(matkhau[j]>='0'&&matkhau[j]<='9') so2++;
    }
    if(hoa2>=1&&thuong2>=1&&so2>=1&&matkhau.length>=6) i=1;
    else {
        thu++;
        alert(`bạn đã sai (${thu}/5)`);
        if(thu==5){
            alert(`bạn đã hết lượt nhập`);
            break;
        }
        matkhau=prompt("nhập lại mật khẩu khác");
        
    }
}while(i !== 1)
// bài tập mã hóa mật khẩu 


const a="abcdefghijklmnopqrstuvwxyz";
const b="zxcvbnmasdfghjklqwertyuiop";
let chuyenDoi=function(vanban,a,b){
    let vanban2="";
    for(let i=0;i<vanban.length;i++){
        let c=vanban[i];
        for(let j=0;j<a.length;j++){
            if(c>='a'&&c<='z'){
                if(c==a[j]) {
                    vanban2+=b[j]; break;
                }
            }
            else if(c>='A'&&c<='Z'){
                if(c==a[j].toUpperCase()){
                    vanban2+=b[j].toUpperCase(); break;
                } 
            }
            else if(c>='0'&&c<='9'){
                vanban2+=c; break;
            }  
            else if(c==" "){
                vanban2+=" "; break;
            } 
            else {
                vanban2+='*'; break;
            }
        }
    }
    return vanban2;   
}
//hoặc tối ưu hơn ta có thể dùng hàm IndexOf
let chuyenDoiToiUu=function(vanban,a,b){
    let vanban2="";
    for(let i=0;i<vanban.length;i++){
        let c=vanban[i];
        if(c>='a'&&c<='z'){
            let index=a.indexOf(c);//vị trí của c trong chuỗi a;
            vanban2+=b[index];
        }
        else if(c>='A'&&c<='Z'){
            let index=a.indexOf(c.toLowerCase());//đổi kí tự hoa thành kí tự thường rồi xét xem vị trí của  kí tự thường đấy là ở đâu
            vanban2+=b[index].toUpperCase();//xét xem với vị trí ấy ở a thì b là kí tự gì rồi biến nó thành kí tự hóa rồi bổ sung nó vào văn bản

        }// còn số và kí tự lỗi cứ như bth;
    }
    return vanban2;
}
let vanban=prompt("nhập nội dung bạn muốn mã hóa:");
let vanban2=chuyenDoi(vanban,a,b);
alert( `nội dung của bạn sau khi chuyển đổi là:${vanban2}`);

//còn tìm có bao nhiêu giá trị tồn tại trong 1 chuỗi ta sử dụng hàm str.split("kí tự").length-1
let abh="tôi chăm học tôi chịu khó tôi đẹp trai";
let dem=abh.split("tôi").length-1;//hàm split tách từ 1 chuỗi ra mảng có các giá trị dc tách bởi ranh giới 2 bên của từ tôi, hàm .length là độ dài của chuỗi hoặc mẳng và vì luôn có 2 giá trị 2 bên nên số giá trị nhiều hơn số ranh giới là 1 nên -1 là ra
alert(`từ tôi xuất hiện ${dem} lần trong chuỗi ${abh}`);
//bài tách phần chữ à số ra khỏi 1 chuỗi hỗn hợp
let baicuoi="abc123";
let phanChu=""; phanso="";
for(let  i=0;i<baicuoi.length;i++){
    if(/[a-zA-Z]/.test(baicuoi[i])) phanChu+=baicuoi[i];
    else if(/[0-9]/.test(baicuoi[i])) phanso+=baicuoi[i];
    else continue;
}
alert(`trong chuỗi ${baicuoi} phan chữ bao gồm: ${phanChu} phân số bao gồm :${phanso} `);
