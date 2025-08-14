//MỞ ĐẦU LÀM QUEN 
#include<iostream>
using namespace std;
/*về kiểu dữ liệu
nhắc lại thôi
Về kiểu số nguyên ta có 2 kiểu thường dùng là(ngoài ra còn short) 
int: 4byte=32bit:-2^31->2^31-1
long long:8byte=64bit:-2^63-> 2^63 - 1
Về kiểu số thực ta có
float:4byte
double:8byte
Nếu muốn chính xác hơn thì ta dùng double
Còn có kiểu bool( true or false)
Char: kí tự 
*/
int main(){
    int dienTich=100, danSo=200, nhuCau=200;
    cout << "chao moi nguoi " << endl; //endl giúp xuống dòng
    cout << dienTich << " " << danSo << " " << nhuCau << endl;// khi in các biến nếu muốn có khoảng trống giữa các giá trị ta có thể làm như sau 
    int a;
    cin >> a;//nhập giá trị cho a như vậy trong c thì scanf("",&) trong python thì a=int(input("")) trong js thì là a=parseInt(prompt(""));
    cout << "vay a co gia tri la"<< " " << a << endl;
    return 0;

}
