//CÁC HÀM TOÁN HỌC, HÀM CÁCH SỬ DỤNG #DEFINE CÁCH VIẾT TẮT và cơ bản về mảng
#include<bits/stdc++.h>

using namespace std;
//đầu tiên là toán tử nhứ gán so sánh hay toán học nó không khác ngôn ngữ c nên ta sẽ không tìm hiểu thêm về nó 
/*các hàm có thể đã học như 
abs():trị tuyệt đối
pow(a,b):a^b;
sqrt(x):căn x trả về spps double
round(x):làm tròn số thập phân gần nhất
ngoài ra còn rất nhiều hàm khác nào dùng tới có thể sợt 
- về cấu trúc if else if hay  else đã học nên  bỏ 
- vòng lặp for bạn cũng đã học nên bỏ qua for(biến xét;điều kiện  (có thể đơn giản có  thể phức tạp);câu lệnh thực hiện sau khi thực hiện cú pháp tròng for)
-còn hàm thì đụng lại ha
*/
void xinchao(){
    cout << "chao moi nguoi \n";
}
//void không trả về gì cả không cần return nó đảm nhận nhiệm vụ thực hiện các câu lệnh cụ thể
//còn int hay .... trả về các giá trị thì ta return thứ cần trả về 
//khi muốn viết 1 hàm ta cần cụ thể nhiệm vụ của nó, những yếu tố nó cần, và kiểu của nó rồi mới tiến hành 
//ta có  thể lồng hàm này trong hàm khác sử dụng giá trị hàm như giá trị của 1 biến ... 
//muốn thay đổi giá trị trong hàm main() ta sử dụng tham chiếu tức tong(int &a) kiểu như này thêm dấu  & trong khi tạo hàm là được 
/* tiếp tới là 2 từ khóa
typedef : dùng để khiến cho các từ gọi kiểu dữ liệu ngắn gọn hơn vd và dùng cho các kiểu dữ liệu đã có sẵn hoặc tự bạn khởi tạo  như struct
#define : cũm dùng như trên dùng tên mới để thay thế những kiểu dữ liệu cũ ngoài ra còn có thể định nghĩa kiểu dữ liệu nào đó vd
*/
//- tiếp theo là mảng 
typedef struct hocsinh{
    int lop;
    int soLuong;
}hs;
typedef long long ll;
#define PI  3.14//định nghĩa kiểu dữ liệu 
#define ll long long// viết tắt kiểu dữ liệu như 
// ngoài ra còn có thể dịnh nghĩa hàm 
#define FOR(i,a,b) for(int i=(a);i<b;++i)//không khuyến khích làm với các hàm vì này chỉ mình hiểu và đọc được 
int main(){
    xinchao();
    FOR(i,0,10){//như vậy vòng lặp giờ có thể tóm gọn như trên
        cout<<"hello\n";
    }
    ll a=1;
    int b[100];
    int n;
    cin>>n;
    
    for(int i=0;i<n;i++){
        cout<<"nhap gia tri phan tu thu "<<i<<":";
        cin>>b[i];
    }
    for (int i=0;i<n;i++){
        cout<<b[i]<<endl;
    }
    int sum=0;
    for(int i=0;i<n;i++){
        sum+=b[i];
    }
    /*for(int i:b){//giống  for i in range trong ngôn ngữ python duyệt từng phần tử  trong mảng 
        cout<<i;//chỉ dùng cho a[n] nếu không a[100] nó sẽ bắt nhập cho đủ 100 phần tử
    }*/
    cout<<"tong các gia tri trong mang la:"<<sum<<endl;
    return 0;
}