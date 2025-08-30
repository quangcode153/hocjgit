//baitap set map
#include <bits/stdc++.h>
using namespace std;
int main(){
    //baitap dem phan tu khac nhau
   cout << "nhap so lan ktr trong mang"<<endl;
   int t; cin>> t;
while(t--){
    cout << " nhap so luong phan tu trong mang"<<endl;
    int n; cin >> n;
    set<int> btset;
    for(int i=0;i<n;i++){
        cout << "nhap gia tri thu "<<i+1<<":"<<endl;
        int x;cin >> x;
        btset.insert(x);//tính số lượng theo giá trị
    }
    cout << "trong cac gia tri ban nhap co "<< btset.size()<< "gia tri khac nhau"<<endl;
}
/*
while(t--){
    cout << " nhap so luong phan tu trong mang"<<endl;
    int n; cin >> n;
    map<int,int> btmap
    for(int i=0;i<n;i++){
        cout << "nhap gia tri thu "<<i+1<<":"<<endl;
        int x; cin>>x
        btmap[x]=true;//tính sô lượng theo key được tạo => dạng bài nay tính theo giá trị gì mà nó không được trùng
    }
    cout << "trong cac gia tri ban nhap co "<< btmap.size()<< "gia tri khac nhau"<<endl;
  
}
*/
/*
int n; cin >> n;
int array[n];
for (int &x:array) cin >> x;
sort(array,array+n);
int dem=1;//luôn tồn tại 1 giá trị
for(int i=0;i<n-1;i++){
    if(array[i]!=array[i+1]) dem++;
}
    cout<<"co"<<dem<<"gia tri khac biet"<<endl;//cách tính theo mảng thông thường 
*/
//ktr có giá trị nay trong mnagr hay không 
set<int> btset;
cout << " nhap so luong phan tu:"<<endl;
int n; cin >> n;
for (int i=0;i<n;i++){
    int giatri; cin>>giatri;
    btset.insert(giatri);
}
int target; cin >> target;
if(btset.count(target)!=0) cout<<"YES"<<endl;
else cout<<"NO"<<endl;
/*dùng map
map<int, int> btmap;
cout <<"nhap so luong phan tu co trong mang"<<endl;
int n; cin >> n;
for(int i=0;i<n;i++){
    cout<<"nhap gia tri thu "<<i+1<<":"<<endl;
    int x; cin>>x;
    btmap[x]++;
}
cout<<"nhap gia tri ban muon tim:"<<endl;
int target; cin >>target;
if(btmap.count(target)!=0) cout<<"yes"<<endl;
else cout << "NO"<<endl;
*/
/*
//tìm theo mảng
int n; cin >> n;
int array[n];
for (int &x:array) cin>>x;
bool found=false;
cout <<"nhap gia tri ban muon tim:"<<endl;
int target;cin>>target;
for(int i=0;i<n;i++){
    if(array[i]==target){
        found=true;
        break;
    }
}
cout<< (found? "yes":"No")<<endl;
*/
//in phần tử thuộc mảng a mà không thuộc mnarg b
set<int> set2;
cout<<"nhap so luong phan tu cua mang 2"<<endl;
int m; cin >>m;
for(int i=0;i<m;i++){
    int x; cin>>x;
    set2.insert(x);
}
bool Found=false;
for(int x:btset){
    if(set2.count(x)==0) {
        cout<<x<<endl;
        Found=true;
    }
}
if(!Found) cout<<"NO FOUND"<<endl;
/*

int m; cin>>m;
map<int , int> map2;
for(int i=0;i<m;i++){
    int x; cin>>x;
    map2[x]=true;
}
bool Found=false;
for(pair<int,int> x:btmap){
    if(map2.find(x.first)==map2.end()){
         cout<<x.first<<endl;
         Found=true;
    }
}
if(!Found) cout<<"NO FOUND"<<endl;    
*/
//bài có số lần xuất hiện nhiều nhất trong mảng
int soLuong;
cout<<"nhập so luong phan tu trong mang:"<<endl;
cin>> soLuong;
map<int,int> map4;
for(int i=0;i<soLuong;i++){
    int x;cin>>x;
    map4[x]++;
}
int res2,fre2 =INT_MIN;
for(pair<int, int> x:map4){
    if(x.second>fre2){
        fre2=x.second;
        res2=x.first;
    }
}
cout<<res2<<" "<<fre2<<endl;

//bài kí tự xuất hiện nhiều nhất trong xâu kí tự
//bằng mảng
string s;
getline(cin,s);
int a[256]={0};//khởi tạo mảng với các giá trị ban dầu =0
for(char x:s){
    a[x]++;//đến kí tự nào nó tự quy về theo bản quy ước để xác định ô nhớ và tăng giá trị ở ô đó từ 0 ->
}
char res; int  fre=0;
for(int i=0;i<256;i++){
    if(a[i]>fre){
        fre=a[i];
        res=(char)(i);
    }
}
cout<<(char)(res)<<" "<<fre <<endl;
//bằng map
map<char,int> map5;
for(char x:s){
    map5[x]++;
}
fre=0;
char res2;
for(pair<char,int> x:map5){
    if(x.second>fre){
        fre=x.second;
        res2=(char) x.first;
    }
}
cout<<(char)(res2)<<" "<<fre <<endl;

//đếm số ký tự khác nhau trong chuỗi 
//dùng set
set<char> set6;
for(char x:s){
    set6.insert(x);
}
cout<<set6.size()<<endl;
//dung map
map<char,int> map6;
for(char x:s){
    map6[x]=true;
}
cout<<map6.size()<<endl;
//đếm sô từ trong chuỗi
set<string> words;
stringstream ss(s);
string word;
while(ss>>word){
    words.insert(word);
}
cout<<words.size()<<endl;
/* dùng map
map<string,int> map7;
stringstream ss(s);
string word;
while(ss>>word){
    map7[word]++;
}
cout<<map7.size()<<endl;
//nếu muốn thêm từ nào xuất hiện nhiều nhất 
string wordmap;int fre=0;
for(pair<string,int> x:map7){
    if(x.second>fre){
       fre=x.second;
       wordmap=x.first;
    }
}
    cout<<....như bth

*/
//tạo tên ng dùng
map<string,int> map9;
int n2; cin >> n2;
cin.ignore();
while(n2--){
    string s2; getline(cin,s2);
    if(map9.count(s2)==0) map9[s2]=1;
    else cout<<s2<< "đã tồn tại"<<endl;

}

return 0;
}