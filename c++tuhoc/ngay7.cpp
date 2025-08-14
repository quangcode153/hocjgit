//bài tập mảng 
#include<iostream>//các hàm cơ bản của c như cin cout..
#include<vector>//dùng mảng động vector
#include<cmath>//toán học
#include<utility>//để dùng cặp giá trji pair
using namespace std;
int snt(int a){
    if(a<2) return 0;
    for(int i=2;i<=(int)sqrt(a);i++){
        if(a%i==0) return 0;
    }
    return 1;
}
void nhap(vector<vector<int>> &a, int m, int n){
    a.resize(m,vector<int> (n));//hàm resize dùng để tạo hoặc thay đổi kích thước
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cout<<"\nnhap gia tri a["<<i<<"]["<<j<<"]=";
            cin>>a[i][j];
        }
    }
}
void xuat(vector<vector<int>> &a,int m, int n){
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cout<<"a["<<i<<"]["<<j<<"]="<<a[i][j];
        }
        cout<<endl;

    }
}
int max(vector<vector<int>> &a,int m, int n){
    int max=a[0][0];
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(a[i][j]>max) max=a[i][j];
        }
    }
    return max;
}
int hangmax(vector<vector<int>> &a,int m,int n){
    int hangmax=0;
    for(int i=0;i<n;i++){
        hangmax+=a[0][i];
    }
    int vitri=0;
    for(int i=0;i<m;i++){
        int tong=0;
        
        for(int j=0;j<n;j++){
            tong+=a[i][j];
        }
        if(tong>hangmax)
        {
           hangmax=tong;
           vitri=i;
        } 
    }
    return vitri;
}
bool isfibo(int n){
    int x1 = 5 * n * n + 4;
    int x2 = 5 * n * n - 4;
    int s1 = sqrt(x1);
    int s2 = sqrt(x2);
    return (s1 * s1 == x1 || s2 * s2 == x2);
}

void Ktrfibo(vector<vector<int>> &a,int m, int n){
    int demmax=0;
    int vitri2=0;
    for(int j=0;j<n;j++){
        int dem=0;
        for(int i=0;i<m;i++){
            if(isfibo(a[i][j])) dem++;
        }
        if(dem>demmax){
            demmax=dem;
            vitri2=j;
        }
    }
    cout<<"cot co nhieu so fibo nhat la:"<<vitri2;
}
void tamGiacDuoi(vector<vector<int>> &a,int m, int n){
    int tong=0;
    for(int i=1;i<m;i++){
        for(int j=0;j<min(i,n);j++){//tính chất tam giác đươi của 1 ma trận vuông luôn có j luôn nhỏ hơn i nhưng cũm ko đc quá n, hàm min là hàm so sánh nhanh giữa i và n cái nào nhỏ hơn để tính những trường hợp ma trận 0 vuông
            tong+=a[i][j];
        }
    }
    cout<<"tong cac gia tri tam giac duoi la:"<<tong;
}
int ktr8(int i,int j,int m,int n){
    if(i==0||j==0||i==m-1||j==n-1) return 0;
    return 1;
}
int tong8(vector<vector<int>> &a,int i, int j){
    int tong=0;
    tong=a[i-1][j-1]+a[i+1][j+1]+a[i+1][j-1]+a[i-1][j+1]+a[i-1][j]+a[i+1][j]+a[i][j-1]+a[i][j+1];
    return tong;
}
void thayDoiMaTran(vector<vector<int>> &a, int m, int n){
    vector<vector<int>> b=a;//tạo 1 bản sao từ ma trận gốc, phải có bản sao để lưu các giá tri thay đổi chứ nếu ko kết quả sẽ sai vì thay đổi giá trị từ ma trận gốc sẽ dẫn đến các toongr8 ở trên sử dụng kết quả tổng để cộng chứ ko còn dùng giá trị ban đầu từ bản gốc, vd  dòng thời gian ta phải tạo ra 1 thế giới // thay đôi thế giới // mới không ảnh hưởng đến thế giới gốc còn nếu ta lam trực tiếp với thế giới gốc sẽ dẫn đến hiện tượng cách bướm làm ảnh hưởng đến các kết quả sau hay nếu còn ko hiểu thì nếu ta làm thay dổi trực tiếp ma trận gốc thì các phép tính tổng sau sẽ dùng dữ liệu đã bị sửa dẫn đến kết quả sai lệch dây truyền 
    for(int i=0;i<m;i++){
        for (int j = 0; j < n; j++){
            if(ktr8(i,j,m,n)==1){
                b[i][j]=tong8(a,i,j);
            }
        }
    }
    a=b;
    xuat(a,m,n);
}
int ktrbien(int i, int j, int m, int n){
    if( i==0|| j==0|| i==m-1||j==n-1) return 1;
    return 0;
}
void inbien(vector<vector<int>> &a,int m,int n){
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(ktrbien(i,j,m,n)) cout<<a[i][j];
        }
    }
}
void insnake(vector<vector<int>> &a,int m, int n){
    for (int i=0;i<m;i++){
        if(i%2==0){
            for (int j=0;j<n;j++){
                cout<<" "<<a[i][j]<<" ";
            }
        }
        else{
            for(int j=n-1;j>=0;j++){
                cout<<" "<<a[i][j]<<" ";
            }
        }
        
    }
}
void xoanThuan(vector<vector<int>> &a,int m, int n){
    int cotTrai=0,hangduoi=m-1;
    int hangTren=0,cotphai=n-1;
    int dem=0;
    int total=n*m;
    while(dem<total){
        for(int i=0;i<=cotphai&&dem<total;i++){
            cout<<a[hangTren][i]<<" ";
            dem++;
        }
        hangTren++;
        for(int j=hangTren;j<=hangduoi&&dem<total;j++){
            dem++;
            cout<<a[j][cotphai]<<" ";
        }
        cotphai--;
        for(int k=cotphai;k>=cotTrai&&dem<total;k--){
            cout<<a[hangduoi][k]<<" ";
            dem++;
        }
        hangduoi--;
        for(int p=hangduoi;p>=hangTren&&dem<total;p++){
            cout<<a[p][cotTrai]<<" ";
            dem++;
        }
        cotTrai++;
    }
}
void xoaynguoc(vector<vector<int>> &a,int m, int n){
    int hangtren=0,hangduoi=m-1;
    int cottrai=0,cotphai=n-1;
    int dem=0;
    int total=n*m;
    while(dem<total){
        for(int i=cotphai;i>=cottrai&&dem<total;i--){
            cout<<a[hangtren][i] <<" ";
            dem++;
        }
        hangtren++;
        for(int j=hangtren;j<=hangduoi&&dem<total;j++){
            cout<< a[j][cottrai]<<" ";
            dem++;
        }
        cottrai++;
        for(int k=cottrai;k<=cotphai&&dem<total;k++){
            cout<<a[hangduoi][k]<<" ";
            dem++;
        }
        hangduoi--;
        for(int p=hangduoi;p>=hangtren&&dem<total;p--){
            cout<<a[p][cotphai]<<" ";
            dem++;
        }
        cotphai--;
    }
}
void sapxepmatran(vector<vector<int>> &a, int m, int n){
    int b[m*n];
    int dem =0;
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            b[dem]=a[i][j];
            dem++;
        }
    }
    for(int i=0;i<m*n-1;i++){
        for(int j=i+1;j<m*n;j++){
            if(b[i]>b[j]){
                int temp=b[i];
                b[i]=b[j];
                b[j]=temp;
                
            }
        }
    }
    int cottrai=0,cotphai=n-1;
    int hangtren=0,hangduoi=m-1;
    int total=m*n;
    int test=0;
    int dem2=0;
    while(test<total){
        for(int i=cottrai;i<=cotphai&&test<total;i++){
            a[hangtren][i]=b[dem2];
            test++;
            dem2++;
        }
        hangtren++;
        for(int j=hangtren;j<=hangduoi&&test<total;j++){
            a[j][cotphai]=b[dem2];
            test++;
            dem2++;
        }
        cotphai--;
        for(int k=cotphai;k>=cottrai&&test<total;k++){
            a[hangduoi][k]=b[dem2];
            test++;
            dem2++;
        }
        hangduoi--;
        for(int p=hangduoi;p>=hangtren&&test<total;p++){
            a[p][cottrai]=b[dem2];
            test++;
            dem2++;
        }
        cottrai++;
    }
    cout<<"\nma tran sau khi sap xep va in theo chieu xoay  oc thuan la:";
    xuat(a,m,n);

}
int lonhon2(int a, int b){
    return a>b ? a:b;
}
int lonhon3(int a, int b, int c){
    return max(a,max(b,c));//hàm max so sánh nhanh 2 giá trị
}
int tongmax(vector<vector<int>> &b, int i, int j, int n){
    if(j==0){
        return lonhon2(b[i-1][j],b[i-1][j+1]);
    }
    else if(j==n-1){
        return lonhon2(b[i-1][j],b[i-1][j-1]);
    }
    else{
        return lonhon3(b[i-1][j-1],b[i-1][j],b[i-1][j+1]);
    }
}
void maxiumpathsum(vector<vector<int>> &a,int m, int n){
    vector<vector<int>> b(m,vector<int> (n));

    for(int i=0;i<n;i++){
        b[0][i]=a[0][i];
    }
    for(int i=1;i<m;i++){
        for( int j=0;j<n;j++){
            b[i][j]=a[i][j]+tongmax(b,i,j,n);
        }
    }
    int k=-9;
    for(int i=0;i<n;i++){
        if(k<b[m-1][i]) k=b[m-1][i];
    }
    cout<<"duong di lon nhat co gia tri:"<<k;
}

int main(){
    //bài tập về snt
    int m,n;
    cout<<"nhap chieu dai chieu rong cua mang hai chieu::";
    cin>>m>>n;
    vector<vector<int>> a(m,vector<int> (n,0));//cách khai sinh magr 2 chiều với các giá trị ban đầu bằng 0
    //vậy ta hiểu trong ngoặc a(a1,a2) thì a1 là số lượng phần tử của mảng a, a2 là giá trị các phần tử của mảng a, nếu a2 là khởi tạo 1 vector thì sẽ tạo ra mảng vector 2 chiều với cú pháp của a2 lần này là vector<kiểu dữ liệu> (số luongj phần tử) hay nói cách khác a1 là số lượng hàng còn a2 là số lượng cột tạo ra ma trận 2 chiều 
    nhap(a,m,n);
    xuat(a,m,n);
    cout<<"\ncac gia tri la snt trong mang la:";
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(snt(a[i][j])==1) cout<<a[i][j]<<" ";
        }
    }
    //
    int inmax=max(a,m,n);//gán giá trji mã từ đầu chứ vào vòng for thì phải gọi hàm max liên tục tốn thời gian
    vector<pair<int,int>> vitrimax;//pair là hàm lưu 2 giá trị khác nhau
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(a[i][j]==inmax){
                vitrimax.push_back({i,j});
            }
        }
    }
    //cách in các giá trị trong hàm pair<int,int>
    for(pair<int,int> p:vitrimax){//nếu kiểu dữ liệu quá dài ta có thể dùng auto để tự động xác định kiểu dữ liệu khiến dòng code trở nên gọn hơn nhưng lưu ý chỉ dùng cho các kiểu dữ liệu có tên quá dài không sẽ có thể gây ra bug ẩn
        cout<<"\n vi tri chua gia tri max "<<inmax<<" la: ("<<p.first<<","<<p.second<<")";
    }
    
    //bài tìm hàng có tổng các phần tử lớn nhất trong ma trận 
    int Hang=hangmax(a,m,n);
    cout<<"\nhang co tong cac gia tri lon nhat la:"<<Hang<<endl;
    //bài tìm cột có nhiều số fibo nhât
    Ktrfibo(a,m,n);
// bài tính tam giác dưới của ma trận
    tamGiacDuoi(a,m,n);
    
    //thay  thế các gia trji được bao quanh bởi 8 giá trị khác trong ma trận bằng tổng 8 giá trị đó 
    thayDoiMaTran(a,m,n);//thay luôn ở hàm main 
    //in biên của ma trận 
    inbien(a,m,n);
    //in ma trận hình con rắn
    insnake(a,m,n);
    //in ma trận theo hình xoắn ốc
    xoanThuan(a,m,n);
    //in ma trận theo hình soắn ốc ngược
    xoaynguoc(a,m,n);
    //sắp xếp ma trận và in theo chiều xoắn ốc 
    sapxepmatran(a,m,n);
    //maximum path sum
    maxiumpathsum(a,m,n);
    return 0;
}