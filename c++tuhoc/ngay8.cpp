//xâu kí tự 
#include <iostream>
#include <math.h>
#include <string.h>
#include <sstream>//thư viện để dùng stringstream ss(o);
//hoặc có thể dùng thư viện tổng hợp sau
#include <bits/stdc++.h>//thì không cần khai báo các thư viện khác tuy nhiên lúc làm bài thi hay ở 1 trường hợp phiên bản cũ nó sẽ  không thể sử dụng được

using namespace std;
int main(){
    int n; cin >> n;
    cin.ignore(1);//xóa 1 kí tự để xpas kí tự enter tránh việc biến s nhận kí  tự enter
    string s;
    getline(cin, s);
    cout<< s << endl;
    //ta cũm có thể xử lí chuỗi như xử lí mảng với các kí tự bắt đầu từ 0-> size()-1;
    cout<<s[1]<<endl;//hoặc có thể sửa từng kí tự trong chuói
    cout<<s.length()<<endl;//có tác dụng như hàm size 
    for(char i:s){
        cout << i << endl;
    }//cách in từng kí tự hoặc thủ công bth
    for ( int i=0;i<s.size();i++){
        cout << s[i] << endl;
    }
    string A="chao moi nguoi";
    string B=" em ten la";
    string C=A+B;
    cout << C <<endl;//có thể nối 2 chuỗi thẳng như này cũm  được 
    //có 1 hàm cắt 1 phần string của chuỗi kí tự khác đó là hàm substr(a,b) trong đó a là điểm khởi đầu cắt còn b là sô kí tự muốn cắt kể từ điểm a
    string D=A.substr(1,2);//nếu thiểu chỉ số thứ 2 thì nó tự động cắt từ a đến hết
    cout<< D << endl;
    //ngoài ra còn 1 số hàm như 
    A.append(B);// hàm này nối chuỗi a vào chuỗi B
    A.push_back('h');//thêm 1 kí tự vào chuỗi hiện có
    A.insert(3,"abc");//chèn chuỗi "abc " tại vị trí số 3 trong chuỗi hiện có
    A.pop_back();//xóa kí tự cuối
    A.erase(3,3);//xóa từ vị trí số 3 trong chuỗi dài 3 kí tự 
    A.find("moi");//vi tri dau tien tim thay chuoi moi trong chuỗi S
    A.rfind("moi");//vi tri cuối cùng tìm thấy chuỗi moi trong chuỗi S
    A.replace(3,2,"chuoi_moi");//thay 2 kí tự từ vị trí số 3 trong chuỗi S bằng "chuoi_moi"
    //dể chuyển 1 số thành 1 chuỗi ta dùng hàm to_string(namebien)
    string v=to_string(n);
    string o="laptrinh python java c++";
    stringstream ss(o);
    string temp;
    while(ss>>temp){
        cout<<temp<<endl;//in ra từng chuỗi kí tự cách nhau bởi dấu chấm nếu muôn dấu hiệu khác có thể thay trong ngoặc while bắng getline(ss,temp,"dauhieu"); dauhieu có thể là . , hay các kí tự đặc biệt nào khác
        
    }

    return 0;
}
