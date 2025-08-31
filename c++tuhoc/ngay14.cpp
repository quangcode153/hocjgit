//cách sắp xếp trong c++
#include<bits/stdc++.h>
using namespace std;
//sort: sắp xếp các phần tử theo chiều tăng dần 
//sort(a,a+n), sort(a+x,a+y) => a[x;y-1];
//sort(a.begin(),a.end()) sort(a.begin()+x, a.end() + y) => a[x,y-1];
//greater: giảm dần hoặc có thể thay thế nó thành các hàm có độ phức tạp khác
bool cmp(int a,int b){
    return a>b;
}
bool cmp2(string a, string b){
   if(a.length()!=b.length()){
        return a.length()>b.length();
   }
   else return a>b;//sắp xếp các kí tự theo chiều giảm dần đọ dài nếu cùng độ dài thì ktr dựa vào thứ tự bảng  
}
//như vậy có thể viết các hàm với các diều kiện khác nhau để tiến hành sắp xếp các giá trị trong hàm 
//%sắp xếp chọn tóm tắt dùng 2 vòng lặp chọn ra giá trị lớn nhất( nhỏ nhất) trong khoảng xét và đứa ra đầu và các vị trí tiếp theo
void selectionsort(vector<int> &a, int n){//theo chiều tăng dần
    for(int i=0; i<n-1 ;i++){
        int min=i;
        for(int j=i+1;j<n;j++){
            if(a[j]<a[min]) min=j;
        }
        swap(a[i],a[min]);//đổi chỗ với vị trí có giá trị nhỏ nhất

    }
    for (int it:a){
        cout <<it<<" ";
    }
    cout << endl;
}//%sắp xếp nổi bọt tóm tắt tiến hành so sánh 2 giá trị liền kề nhau rồi đừa giá trị cao nhất ra sau cùng rồi kệ nó xét giá trị cao thứ 2 theo các tương tự mỗi lần đưa nó đến cuối mảng xét thì để im ko đụng đến nx
//Cách làm theo quang của bbs
void bubblesort(vector<int> &a,int n){//tăng dần
    do{
        int swapped=false;
        for(int i=0;i<n-1;i++){
            if(a[i]>a[i+1]) swap(a[i],a[i+1]);
            swapped=true;
        }
        n--;
        if(!swapped) break;//nếu không có sự sắp xếp nào trong vòng lặp for nghĩa là mọi vị trí đều đúng rồi out ra luôn thôi
        
    }while(n>=2);
    for (int it:a){
        cout<<it<<" ";
    }
    cout<<endl;
}
//Cách làm theo sgk của bbs
void bubblesort2(vector<int> &a,int n){//tăng dần
    for(int i=0;i<n-1;i++){
        bool swapped=false;
        for(int j=0;j<n-1-i;j++){
            if(a[j]>a[j+1]) swap(a[j],a[j+1]);
            swapped=true;
        }
        if(!swapped) break;//nếu duyệt cả mảng mà ko có sự sắp xếp nào nx nghĩa là đã đúng vị trí hết rồi thoát khỏi vòng lặp luôn
    }
    for(int &i:a){
        cout<<i<<' ';
    }
    cout<<endl;
}
//%Sắp xếp chèn tóm tắt tìm ra vị trí mà đằng trước là số bé hơn mình đăng sau là số lớn hơn mình rồi đẩy các số đằng sau lớn hơn mình sang phải và chèn giá trị đó vào vị trí phù 
void insertionsort(vector<int> &a,int n){//tăng dần
    for(int i=1;i<n;i++){
        int Value=a[i];
        int j=i-1;
        while(j>=0&&a[j]>Value){//dời các phần tử lớn hơn value sang bên phải
            a[j+1]=a[j];//dịch sang bên phải hay nói cách khác đè giá trị lên giá trị bên phải và yên tâm các giá trị sau nó cũm sẽ làm vậy luân phiên nhau đến khi không còn lớn hơn giá trị mà nó so sánh tức giá trị nhỏ hơn thì nó sẽ gán value giá trị cần gán vào trước vị trí bé hơn đấy để hiểu rõ hơn ta xem lại phần săp xếp chèn 19.1
            j--;
        }
        a[j+1]=Value;
    }
    for(int &i:a){
        cout<<i<<' ';
    }
    cout<<endl;

}
//sắp xếp theo phân phối như đánh dấu các giá trị thành index theo thứ tự xếp dần và in theo giá trị của từng index (số lượng giá trị trùng) 
int maxint(vector<int> &a,int n){//giá trị max
    int max=INT_MIN;
    for(int i=0;i<n;i++){
        if(a[i]>max) max=a[i];
    }
    return max;
}

void countingsort(vector<int> &a,int n){
    int maxval=maxint(a,n);
    vector<int> count(maxval+1,0);
    for(int i=0;i<n;i++){
        count[a[i]]++;//đánh dấu số lần xuất hiẹn của các giá trị thông qua index(là các giá trị trong mảng)
    }
    int index=0;
    for(int i=0;i<=maxval;i++){
        if(count[i]>0){//nếu giá trị (index) đó đẫ được đánh dấu ở trên ít nhất 1 lần nó sẽ in ra
            while(count[i]){
                a[index]=i;
                index++;
                count[i]--;
            }
        }
    }
}
//cái cuối hơi khó hiểu kiểu như này đi lấy giá trị của mảng gốc biến nó thành vị trí trong mảng phụ và số lần xuất hiện của từng giá trị trong mảng gốc sẽ thành giá trị sau đó xét mảng phụ xem vị trí nào có giá trị ít nhất 1 lần thì sao lưu đè ngược lại mảng gốc
 
int main(){
   int n;
   cin>>n;
   vector<int> a(n);
   for(int &it:a){
    cin>>it;
   }  
   sort(a.begin(),a.end());//còn với mảng thì là sort(a,a+n)
   sort(a.begin(),a.end(),greater<int>());//thêm greater thì nó sẽ thành sắp xếp theo chiều giảm dần 
   sort(a.begin(),a.end(),cmp); //sử dụng hàm viết trên nó cũm có tác dụng sắp xếp theo chiều giảm dần 
   vector<string> b(n);
   cin.ignore();
   for(string &x:b){
    getline(cin,x);
   }
   sort(b.begin(),b.end(),cmp2);//dùng hàm so sánh các phần tử trong vector theo số lượng kí tự trong từ nếu số lượng bằng nhau thì chuyển sang so sánh theo thứ tự trong bảng quy ước 
/////////////////////////////////////////////
  //2. thuật toán sắp xếp chọn(selection sort) O(n^2)
vector<int> slt(n);
for(int &it:slt){
    cin>>it;
}
selectionsort(slt,n);
//////////////////////////////////

//3. thuật toán xắp sếp nổi bọt (bubble sort) về bản chất là so sánh 2 số liền kế xem số nào lớn hơn(hay nhỏ hơn) thì đứa số đó ra đằng sau đến cuối vòng lặp sẽ đứa số lớn nhất trong các số vừa xét về đầu dãy và không xét số đó nữa cứ thế sắp xếp hết dãy 
    vector<int> bbs(n);
    for(int &it:bbs){
        cin>>it;
    }
    bubblesort(bbs,n);
    
/////////////////////////////////////////
//4. thuật toán sắp xếp chèn ( insertion sort) về bản chất di chuyển 1 giá trị về vị trí phù hợp hay nói các khác di chuyển giá trị nếu gặp giá trị lớn hơn(tăng dần) value, nó sẽ chuyển giá trị đó sang phải cứ thế đến khi gặp giá trị nhỏ hơn thì nó cho value ở trước giá trị nhỏ hơn đó và đó là vị trí phù hợp 
vector<int> its(n);
for(int &i:its){
    cin>>i;
} 
insertionsort(its,n);
////////////////////////////////////////
//5. thuật toán sắp xếp counting sort 
vector<int> cts(n);
for(int &i:cts){
    cin>>i;
}
countingsort(cts,n);
for(int x:cts) cout<<x<<" ";
cout<<endl;
return 0;
}