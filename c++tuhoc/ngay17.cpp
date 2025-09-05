//cách sắp xếp quicksort
#include<bits/stdc++.h>
using namespace std;
//giống vun đống nó cũm là một thuật toán chia để trị
/*
nguyên tắc:
1. Chọn một phần tử làm chốt(pivot)
2. Chia mảng: các phần tử nhỏ hơn pivot sang trái lớn hơn pivot sang phải
3. Đệ quy: lặp lại bước trên cho mảng con bên trái và bên phải 
nó cũm có khá nhiều điểm giống với cách sắp xếp trộn là chia ra mảng nhỏ nhất có thể rồi ghép lại 
Tuy nhiên cái quick không cần hàm để trộn 2 hàm lại như merge và thay vì chia ra bằng chia đôi thì nó chọn 1 giá trị làm giá trị ở giữa làm ranh giới 
chọn phần từ cuối cùng của đoạn xét làm ranh giới
*/
//1. Phân hoạch Lomuto
//thuật toán chia giá trị lớn hơn và nhở hơn biên về 2 phía 
int Patition(int a[],int l, int r){//l và r là biên 2 bên đoạn có tác dụng phân hoạch đoạn từ l cho tới r
    int pivot=a[r];//phần tử cuối cùng của đoạn mình xét cũm làm biên
    int i=l-1;
    for(int j=l;j<r;j++){
        if(a[j]<=pivot){//nếu giá trị đang xét thỏa mãn yêu cầu  thì tiến hành cho i nhảy sang index kế tiếp để hoán đổi giá trị thỏa mãn yêu cầu lên đằng trước
            ++i;
            swap(a[i],a[j]);
        }
    }
    //sau vòng for thì các giá trị đã được sắp xếp thành 2 và biên nằm ở cuối 
    //tiến hành cho biên nhảy vào giữa
    i++;
    swap(a[i],a[r]);
    return i;//vị trí biên sau khi nhảy vào giữa
}
void quicksort(int a[],int l, int r){
    if(l<r){
        int p=Patition(a,l,r);//phân hoạch mảng ra làm 2 ngoài ra cũm góp vai trò sắp xếp các giá trị ở các vòng đệ quy sau 
        //vì có biên nên 2 khoảng 1 khoảng bắt đầu từ l->p-1; 1 khoảng từ p+1 -> r
        quicksort(a,l,p-1);//sắp xếp mảng bên trái bằng cách đệ quy phân hoạch mảng đến khi chỉ còn 1 phần tử đến lúc đó nó đã đc sắp xếp 
        quicksort(a,p+1,r);//sắp xếp mảng bên phải bằng cách đệ quy phân hoạch mảng đến khi chỉ còn 1 phần tử đến lúc đó nó đã đc sắp xếp 
    }
}
//nhận xét cách này đọc sơ qua có vẻ khó nhưng không đến nỗi
//tóm tắt lấy giá trị cuối cùng trong khoảng xét làm chốt rồi chia mảng ra làm 2 bên nhỏ hơn chốt bên lớn hơn chốt rồi đưa chốt  vào giữa cho làm biên trả về vị trí của biên rồi tiến hành xét 2 bên với cách tương tự (lưu ý 2 bên không bên nào có chốt cũ cứ để nó im đừng đụng nó sẽ tự đúng chỗ) lại chọn vị trí cuối ở khoảng ta xét làm chốt lại đùng nó chia mảng thành 2(lớn hơn và nhỏ hơn chốt) cứ thể chia mảng đến khi sơ khai nhất đén lúc này nó sẽ tự động sắp xếp trong lúc chia khác với sắp xếp trộn cách này không cần thêm 1 hàm sắp xếp là merge mà nó tự sắp xếp lúc chia 2 bên 
//2.phân hoạch Hoare
int hoare(int a[], int l, int r){
    int pivot=a[l];// thằng chốt bây giờ là thằng đầu bên trái 
    int i=l-1;//bắt đầu từ ngoài biên trái
    int j= r+1;//bắt đầu từ ngoài biên phải
    while(true){
        do{++i;}while(a[i]<pivot);//index chạy sang phải đến khi gặp vị trí không thỏa mãn
        do{--j;}while(a[j]>pivot);//index chạy sang trái đến khi gặp vị trí không thỏa mãn
        if(i<j){//chưa bước qua đời nhau
            swap(a[i],a[j]);
        }
        else return j;//đã bước qua
    }
}
void quicksort2(int a[],int l, int r){
    if(l<r){
        int h=hoare(a,l,r);//phân hoạch những giá trị thỏa mãn pivot đồng thời vô thức sắp xếp
        //do không có biên nên 2 khoảng từ l->h; h+1->r
        quicksort2(a,l,h);//vì trả về j khi này j và i bước qua nhau j<i nên khoảng bên trái bắt đầu từ l-> j điểm khác so với cách 1 
        quicksort2(a,h+1,r);//giải quyết bên phải giống cái trên 
    }
}//nhận xét nếu cách 1 dùng chốt làm biên chia ra 2 bên thì ở cách 2 dùng chốt để xác định 2 bên chứ không có biên xác định được j là biên phải ở bên trái thay vì xác định biên như ở cách 1 cách này thì hiệu quả hơn cách 1 nên xử dụng chỉ là cần cẩn thận hơn 
//tóm tắt dùng giá trị đầu tiên trong khoản làm chốt rồi xét từng giá trị từ 2 phía xác định cái nào sai bên(lớn hơn chốt bên phải nhở hơn chốt bên trái) so với chốt thì tiến hành đổi chỗ cho nhau cho đến khi i>j tức chúng đi qua nhau thì tiến hành trả về j ta dùng đệ quy cứ làm thế đến hết
int main(){

    return 0;
}