#include<iostream>
#include<bits/stdc++.h>
#include<algorithm>//thư viện nhị phân
using namespace std;
// thuật toán tìm kiếm tuyến tính (linear search) độ phức tạp O(n) tìm kiếm bth duyệt từng giá trị bằng hàm for bth thôi
bool ls(vector <int> &a,int n,int x ){
    for(int i=0;i<n;i++){
        if(x==a[i]) return true;
    }
    return false;
}
//thuật toán tìm kiếm nhị phân(binary search) độ phức tạp O(log n) //các phần tử trong mảng phải được sắp xếp tăng hoặc giảm dần
bool bs(vector <int> &a,int n, int x){
    int l=0,r=n-1;
    while(l<=r){
        int mid=(l+r)/2;
        if(x==a[mid]) return true;
        else if(x>a[mid]){
            l=mid+1;
            
        }
        else if(x<a[mid]){
            r=mid-1;
              
        }
    }
    return false;
}
//sử dụng đệ quy
bool binary_search(vector <int> &a,int l, int r,int x){
    if(l>r) return false;
    int mid=(l+r)/2;
    if(x==a[mid]) return true;
    else if (x>a[mid]){
        //l=mid+1; ta có thể thay trực tiếp vào () của hàm cũm đc
        binary_search(a,mid+1,r,x);
    }
    else {
       // r=mid-1;
        binary_search(a,l,mid-1,x);
    }
}
int first(vector<int> &a,int n,int x){
    int l=0,r=n-1;
    int res=-1;
    while(l<=r){
        int m=(l+r)/2;
        if(x==a[m]){
            res=m;
            //kiểm tra tiếp bên trái;
            r=m-1;
        }
        else if(x>a[m]){
            l=m+1;
            
        }
        else if(x<a[m]){
            r=m-1;
              
        }
    }
    return res;
}
int last(vector<int> &a,int n,int x){
    int l=0,r=n-1;
    int res=-1;
    while(l<=r){
        int m=(l+r)/2;
        if(x==a[m]){
            res=m;
            //kiểm tra tiếp bên phải;
            l=m+1;
        }
        else if(x>a[m]){
            l=m+1;
            
        }
        else if(x<a[m]){
            r=m-1;
              
        }
    }
    return res;
}//first và last là 2 hàm xem 1 value xuất hiện đầu tiên ở index nào vào xuất hiện cuối cùng ở index nào và nếu muosn biết trong hàm có bao nhiêu giá trị giống nhau ta lấy last - first + 1 sẽ ra
//hàm lower_bound và upper_bound
//lower_bound(inter1,iter2,value)//kiểm tra từ iter1->trước iter2 trả về vị trí của phần tử đầu tiên >= value vd 1 2 3 6 nếu từ (a.begin(),a.end(),4) thì nó sẽ trả về index 3 tức là giá trị 6 là giá trị đầu tiên >=4
//upper_bound(iter1,iter2,value)// trả về iterator của phần từ đầu tiên > value vd 1 1 2 2 3 5 thì kết quả của (a.begin(),a.end(),2)kq là index 4 tức giá trị 3 là số đầu tiên > 2 nếu dùng lower - upper mà kết quả > 0 ta kết luận số đó có tồn tại và sẽ có được số lượng value giống nhau trong mảng còn nếu lower - upper == 0 thì nghĩa là giá trị đó không tồn tại 
int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        a[i] = i; // dùng giá trị i cho nhanh
    }
    int x;
    cin >> x;

    if (bs(a, n, x)) {
        cout << x << " có trong mảng\n";
    } else {
        cout << x << " không nằm trong mảng\n";
    }//ngoài làm tay kiểu này ta có thể dùng hàm có sẵn trong thư viện 
    if(binary_search(a.begin(),a.end(),x)){//nếu là mảng tĩnh thay a.begin()=a và a.end()=a+n đầy là con trỏ trỏ điểm bắt đầu cần tìm và điểm cuối kết thúc dãy cần tìm; còn nếu trong khoảng x y thì (a.begin()+x,a.begin()+y,value) 
        cout<<x<<"found\n";
    }
    else {
        cout << x<<"not found!\n";
    }
    return 0;
}
