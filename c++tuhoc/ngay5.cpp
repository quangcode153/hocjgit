#include <bits/stdc++.h>
using namespace std;
int main(){
    int n,m;
    cout<<"nhap gia tri cua n và m:";
    cin >> n >> m;
    
    int a[n][m];
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cout<<"nhap  gia tri cua"<<"a["<<i<<"]"<<"["<<j<<"]:";
            cin>>a[i][j];
        }
    }
    cout<<"mảng 2 chiều bạn vừa nhập là:\n";
    //in ra theo hàng 
    for(int i=0;i<n;i++){
        int dem=0;
        for(int j=0;j<m;j++){
            
                cout<<"["<<a[i][j]<<"] ";
                dem++;
            
            if(dem==m) cout<<"\n";
            
        }
    }
    //còn đối với vector tạo mnagr 2 chiều như sau 
    vector<vector<int>> b(n, vector<int>(m));//đây là cách khai báo  mảng 2 chiều với vector 
    //cách nhập và in ra cũm giống như  mảng 2 chiều bth dùng 2 vòng for:
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cout<<"nhap  gia tri cua"<<"a["<<i<<"]"<<"["<<j<<"]:";
            cin>>b[i][j];
        }
    }
    cout<<"mảng 2 chiều bạn vừa nhập là:\n";
    //in ra theo hàng 
    for(int i=0;i<n;i++){
        int dem=0;
        for(int j=0;j<m;j++){
            
                cout<<"["<<b[i][j]<<"] ";
                dem++;
            
            if(dem==m) cout<<"\n";
            
        }
    }
    //xử lý với string
    string v[n];//mảng nhưng các giá trị trong mảng thay vì int thì là string(chuỗi kí tự)
    cin.ignore();//na ná  với getchar trong ngôn ngữ c
    for(int i=0;i<n;i++){
        getline(cin,v[i]);//giống fgets trong c bao gôm cấu trúc sau getline(a,b) trong đó a là luông nhận thường từ bản phím(cin) còn  b là biến string nhận giá trị ở đây v[i];
    }
    for(int i=0;i<n;i++){
        cout<<v[i]<<endl;
    }
    return 0;
}