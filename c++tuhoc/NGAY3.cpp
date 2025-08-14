//Mảng 1 chièu và 1 số bài tập(1) làm quen với mảng vector
#include<bits/stdc++.h>
using namespace std;

int timmax(int a[100],int n){
    int max=0;
    for(int i=0;i<n;i++){
        if(max<a[i]) max=a[i];
    }
    return max;
}
int timmax2(const vector<int>& a){//có 3 cách thường dùng trong c++ để tiết kiệm là : vector<> a: dùng khi cần bản riêng để chỉnh không ảnh hưởng bản gốc, vector<>& a: khi muốn chỉnh sửa bản gốc; const vector<>& a :khi chỉ đọc dữ liệu không tạo bản sao tiết kiệm bộ nhớ mà không là thay đổi bản gốc hay nói chỉ đọc dữ liệu 
    int max=a[0];
    for(int i=0;i<a.size();i++){//hoặc có thể dùng ngắn hơn là for(int i:a){}cách ngắn này chỉ dùng cho vecto hoạc array thuần 
        if(i>max) max=i;
    }
    return max;//với vecto ta
    
}
int timmin(int a[100],int n){
    int min=9999;
    for(int i=0;i<n;i++){
        if(min>a[i]) min=a[i];
    }
    return min;
}
int main(){
    int a[100];
    int n;
    cout<<"nhap so luong phan tu co trong mang la :";
    cin>>n;
    vector<int> b(n);
    for(int i=0;i<n;i++){
        cout<<"nhap gia tri thu: "<<i+1<<":";
        cin>>a[i];
    }
    for(int i=0;i<n;i++){
        int temp;
        for(int j=i+1;j<n;j++){
            if(a[i]>a[j]){
               temp=a[i];
               a[i]=a[j];
               a[j]=temp;
            }
        }
    }
    //sắp xếp các giá trị trong mảng
    cout<<"gia tri trong mang theo thu tu tang dan la:";  
    for(int i=0;i<n;i++){
        cout<<""<<a[i];
    }
        //tìm số nguyên dương bé nhát chưa xuất hiện trong mảng
    int lonNhat=timmax(a,n);
    int beNhat=timmin(a,n);
    int min=99;
    for(int i=beNhat;i<lonNhat;i++){
        int temp=0;
       
        for(int j=0;j<n;j++){
            if(i==a[j]) temp=1;
        }
        if (temp==0 && i<min ) min=i;
    }

    cout<<"\n gia trị be nhat chua xuat hien trong mang la:"<<min;
    cout<<"\nnhap cac gia tri cua mang b\n";
    for(int i=0;i<b.size();i++){
        cout<<"\nnhap gia tri thu "<<i+1<<":";
        cin>>b[i];
    }
    //khoảng cách giữa 2 số nhỏ nhất trong mảng
   
    int minSo=INT_MAX;//số nguyên lớn nhất
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            int kc=abs(b[j]-b[i]);
            if(kc<minSo) minSo=kc;
        }
    }
    //ngoài cách này ra có ta có thể sắp xếp mảng theo chiều tằng dần và so sánh độ chênh lệch giữa 2 giá trị lien tiếp cũm sẽ đạt được kết quả tương tự chỉ là hơi dài đi 1 xíu 
    //cứ dùng for bth trong cách phép tính cho đỡ loạn còn khi xuất giá trị dùng hàm tắt cũm được 
    cout<<minSo;
    //tìm xem trong mảng có bao nhiêu giá trị trùng nhau 
    int  dem =0;
    for(int i=0;i<n-1;i++){
        bool daxet=false;
        for(int k=0;k<i;k++){//kiểm tra đã từng xuất hiện chưa kiểm tra từ đầu đến xét
            if(b[i]==b[k]){
                daxet=true;
                break;
            }
        }
        if(daxet) continue;//nếu đã xét thì bỏ qua vòng lặp này
        for(int j=i+1;j<n;j++){//kiểm tra từ xét đến cuối
            if (b[i]==b[j]){
                dem++;
                break;
            }
            //trùng 1 là đủ để xác định nó trùng 
        }
        }//cách phổ thông 
    int dem2=0;
    for(int i=0;i<n-1;i++){
        int giaTriKhac=0;
        for(int k=0;k<i;k++){
            if(b[i]!=b[k]) giaTriKhac++;//bản chất của cách này xem có bao nhiêu giá trị trước giá trị đang xét  khác với giá trị đang xét  
        }
        if(giaTriKhac!=i) continue;//nếu số lượng giá trị đang xét mà bằng i tức tất cả các số trước số đang xét đều khác nó thì nó là số dang xét đầu tiên còn nếu khác nghĩa là đã xét truóc đó trùng không xét lại
        for(int j=i+1;j<n;j++){//xét các số phía sau giống cách trên 
            if(b[i]==b[j]){
                dem2++;
                break;
            }
        }//cách này tự chế nên khá rối và không tối ưu
    }
    cout <<"\n" <<dem ;
    //hiệu lớn nhất của  1 cặp phần tử với điều kiện gái trị lớn hơn nằm ở sau giá trị bé hơn vd [2,4,6,7,1,] thì giá trị hiệu lớn nhất là 7-2=5 còn 7 và 1 không thỏa điều kiện
    int hieuMax=0;
    for(int i=0;i<n-1;i++){
        for(int j=i+1;j<n;j++){
            int hieu=b[j]-b[i];
            if(hieu>hieuMax) hieuMax=hieu;
        }
    }
    cout<<"\n"<<hieuMax;
    //hoặc có cách 1 vòng for là ;
    int hieumax=0;
    int vanhieu=b[0];
    for(int i=1;i<n;i++){
        int hieu=b[i]-vanhieu;
        if(hieumax<hieu) hieumax=hieu;
        if(vanhieu<b[i])  vanhieu=b[i];
    }
    cout<<"\n"<<hieumax;//cách tối ưu của  seris

    return 0;
}
