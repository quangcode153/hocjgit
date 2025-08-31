//các phương phá sắp xếp phần 2 sắp xếp trộn(merge sort) đếm số cặp nghịch thế trong mảng bằng merge sort
#include<bits/stdc++.h>
using namespace std;
/*gồm 3 bước
Tư tưởng: thuật toán sắp xếp trộn sử dụng phương pháp chia để trị chia dãy ban đầu thành các dãy con cho tơi khi dãy chỉ còn 1 phần tử sau đó thực hiện trộn 2 dãy con tăng dần thành 1 dãy với độ phức tạp tuyến tính
- 1.chia : chia mảng thành 2 nửa (dãy 1 [l, m] dãy 2 [m+1,r])
- 2. Trị đệ quy sắp xếp từng nửa 
- 3. Trộn trộn 2 nửa đã sắp xếp thành 1 mảng đã sắp xếp 
Độ phức tạp O(n log n) 

*/
void merge(int a[],int l, int m, int r){//tăng dần
    vector<int> x(a+l,a+m+1);//dãy 1 bên trái [l,m]
    vector<int> y(a+m+1,a+r+1);//dãy 2 bên phải [m+1,r]
    int i=0, j=0;// chỉ số i trỏ vào x, j trỏ vào y
    //So sánh các giá trị trong 2 mảng và thêm lại vào mảng a theo chiều tăng dẫn, mỗi lần gán giá trị thì chỉ số ở dãy đó tăng thêm 1 tức nhảy sang giá trị tiếp theo
    //Trộn 2 dãy đã sắp xếp thành 1 dãy duy nhất
    while (i<x.size()&&j<y.size())
    {
        if(x[i]<=y[j]) a[l++]=x[i++];//gán giá trị vào mảng bắt đầu từ gốc  l rồi tăng lên theo số lần gán
        else a[l++]=y[j++];
    
    }
    //Ktr xem trong mảng còn giá trị nào chưa được so sánh không nếu cho thì tiếp tục gán giá trị đó cho đằng sau a
    while(i<x.size()) a[l++]=x[i++];
    while(j<y.size()) a[l++]=y[j++];
//lưu ý 2 dãy được trộn đã là dãy được sắp xếp rồi mới tiến hành trộn và sắp xếp lần 2 được (ở đây 2 dãy x và y luôn được đảm bảo đã được sắp xếp ( do bước đệ quy trước đso trong mergesort xử lý))
}
void mergetsort(int a[],int l,int r){
    if(l>=r)  return;//khi đoạn chỉ còn 1 phần tử thì không cần đệ quy nữa
    int mid = (l + r)/2;//tiến hành chia đôi mảng
    //đệ quy để nó tách ra rồi sắp xếp rồi trộn lại
    mergetsort(a,l,mid);//sắp xếp hoặc tiếp tục tách bên trái 
    mergetsort(a,mid+1,r);//sắp xếp hoặc tiếp tục tách bên phải đến khi thành từng giá trị riêng lẻ không còn chung mảng rồi tiến hành sắp xếp rồi lại trộn các giá trị đó thành cặp theo thứ tự rồi lại thành 4 theo thứ tự đến khi xong 1 bên hay nói ngắn gọn là tiếp tục chia nửa đến sử khai rồi sắp xếp trộn lại 
    //khi cả trái và phải sắp xếp xong sẽ tiến hành trộn 2 dãy thành dãy lớn có thứ tự 
    merge(a,l,mid,r);//Trộn 2 nửa đã sắp xếp
    //Lưu ý bản thân mergesort không sắp xếp trực tiếp mà dựa vào 
    //1.đệ quy chia nhỏ đến khi chỉ còn 1 phần tử(khi này có thể coi là nó đã được sắp xếp)
    //2. merge() để ghép dần các đoạn nhỏ thành mảng lớn đã sắp xếp
}
//khai niệm cặp nghịch thế là các cặp mà các giá trị ở trước lại lớn hơn giá trị ở sau hay (a[i]>a[j] && i<j)
//bth thường ta dùng 2 vòng for thì quá dễ ròi nhưng ta cũm có thể sử dụng mergesort
int merge2(int a[], int l, int m, int r){
    vector<int> x(a+l,a+m+1);
    vector<int> y(a+m+1,a+r+1);
    int i=0,j=0,sum=0;
    while (i<x.size()&&j<y.size())
    {
        if(x[i]<=y[j]){
            a[l++]=x[i++];
             
        }
        else{
            a[l++]=y[j++];
            sum+=x.size()-i;
        }
    }
    //nếu còn giá trị chưa xét thì lưu theo thứ tự còn dư mà đè vào mảng
    while(i < x.size()) a[l++] = x[i++];
    while(j < y.size()) a[l++] = y[j++]; 
    return sum;
}

int mergesort2(int a[], int l, int r){
    int dem=0;
    if(l<r){
        int m=(l+r)/2;
        dem+= mergesort2(a,l,m);
        dem+= mergesort2(a,m+1,r);
        dem+= merge2(a,l,m,r);

    }
    return dem;
}


int main(){
    
}



