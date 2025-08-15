//vector
#include <iostream>
#include <bits/stdc++.h>
#include <vector>
using namespace std;

int main(){
    int n,m;
    cin >> m >> n;
    vector<int> a(m,0);//1 chiều với các phàn tử ban đầu là 0
    vector<vector<int>> b(m,vector<int> (n,0));//2 chiều với các giá trị ban đầu =0
    vector<int> v;
    v.push_back(10);//thêm
    v.push_back(20);
    for(int i:v){//cách duyệt 1
        cout << i <<endl;
    }
    for(int i=0;i<v.size();i++){//cách 2
        cout << v[i]<<endl;
    }
    for(vector<int>::iterator it=v.begin(); it != v.end(); ++it){
        cout<< *it<<endl;//cách 3 dùng con tro bắt đầu từ begin điều kiện trỏ khác phần tử sau phần tử cuối cùng
    }
    for(auto it=v.begin(); it != v.end();++it){
        cout << *it << endl;//auto là nó sẽ tự suy luận kiểu dữ liệu cần để gán vào trươc biến thay thế cho các kiểu dữ liệu dài 
    }
    cout<<v.size()<<endl;//size() kích thước hay số lượng
    cout<<v[v.size()-1]<<endl;//phần tử cuối trong mảng 
    cout<<v.back()<<endl;//tuong tự cũm là phần tử cuối cùng
    //cách khai bao bằng con trỏ 
    cout << v[2]<<endl;
    cout << *(v.begin()+2)<< endl;//.begin() là con trỏ chứa địa chỉ của phần tử đầu tiên còn * đằng trước là tham chiều để lấy giá trị của 1 địa chỉ, còn end() là chưa địa chỉ của giá trị sau giá trị cuối cùng 
    // nếu muốn nhập 1 số lượng phần tử cho 1 vector không khởi báo số lượng giá trị từ trước ta thực hiện như thế này 
    vector<int > d;
    for(int i=0;i<n;i++){
        int x; cin >> x;
        d.push_back(x);// như này ta có thể thêm giá trị cho vecto x 
    }
    string s="python js";//tách các phần tử trong chuỗi thành các giá trị riêng trong mảng
    stringstream ss(s);
    string tmp;
    vector<string> f;
    while(ss>>tmp){
        f.push_back(tmp);
    }
    for(string i:f){
        cout << i<<endl;
    }
    
    return 0;
}