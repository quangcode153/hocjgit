//Mảng 1 chiều và bài tập (2) tiếp  tục làm quen với hàm vector
#include<bits/stdc++.h>
using namespace std;

int UCLN(int a, int b){
    while(b!=0){
        int r=a%b;
        a=b;
        b=r;
    }
    return abs(a);
}
int main(){
    int n;
    cout<<"nhap so luong phan tu trong mang:";
    cin>>n;
    vector<int> a(n);
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    //tìm UCLN các cặp giá trị trong mảng 
    int ucln=0;
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            int uclntemp=UCLN(a[i],a[j]);
            if(ucln<uclntemp) ucln=uclntemp;
        }
    }
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            int uclntemp=UCLN(a[i],a[j]);
            if(ucln==uclntemp) cout<<"uoc chung lon nhat la: "<<ucln << "cua cap gia tri:"<<a[i]<<" va "<<a[j];
        }
    }
    //ngoài ra có thể tối ưu không càn dùng 2 hàm for khiến hàm code trở nên tối ưu và sạch hơn
    //ta dùng vector<pair<int,int>> pair;
    vector<pair<int, int>> p;//thay vì lưu 1  giá trị nó lưu 1 cặp giá trị
    int max_ucln=0;
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            int uclntemp=UCLN(a[i],a[j]);
            if(max_ucln<uclntemp){
                max_ucln=uclntemp;
                p.clear();//xóa cặp cũ
                p.push_back({a[i],a[j]});
            }
        }
    }
    cout<<"uoc chung lon nhat la:"<<max_ucln<<'\n';
    for(auto [x,y]:p){
        cout<<"cap:"<<x<<"va"<<y<<'\n';
    }
    //đây là các thao tác như in và xử lý sử dụng vector được dùng để lưu giữ các thông tin khi chưa biết số luọng cụ thể dễ xóa thêm nhưng nếu biết số lượng vẫn khuyến cáo sử dụng mảng 1 chiều như cổ điển xử lí nhanh hơn so với mảng động
    //ngoài ra ta có thể tạo 1 danh sánh với vecto thuần như sau 
    vector<int> b;
    int x;
    for(int i=0;i<n;i++){
        cin >> x;
        b.push_back(x);
    }//như vậy ta có thể nhập dữ liệu cho danh sách b còn truy suất dữ liệu ta có thể làm như mảng bth dùng for(int i:a) để in ra hoặc for( int i=0...) để xử lý;
    cout<<b[1];
    return 0;

}
