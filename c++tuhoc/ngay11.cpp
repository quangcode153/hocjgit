//maps
#include<bits/stdc++.h>
using namespace std;
//map<datatype1,datatype2> namebien; trong đó datatype1 là kiểu dữ liệu cho key còn datatype2 là kiểu dữ liệu cho value
//nói cách khác map là lưu các pair thay vì pair chỉ chứa được 1 cặp số thì map chứa dc nhiều pair
//(key, value); key là độc nhất không được trungf nếu trùng nó sẽ ghi đè giá trị còn value có thể trùng
//count:nhớ trong map để tìm 1 giá trị ta dựa vào key chứ không dựa vào value 
//find:tìm kiếm key nếu không tồn tại nó sẽ trả về .end() và ngược  lại nó sẽ trả về địa chỉ phần tử đó
//erase:truyền giá trị key vào thì nó sẽ xóa cả cặp luôn
//multimap:có các key giống nhau cũm đc kiểu 1 vợ mà 2 chồng cũm đc á còn trên là phải 1 vợ 1 chồng có chồng mới phải bỏ chồng cũ (đè)
//unordered_map : giống chỉ 1 ket duy nhất chỉ khác map là các gí trị không được xếp theo thứ tự mà nó tùm lum hết 

int main(){
    map<int, string> testmap;
    //cách thêm 1
    testmap[100]="ca";
    testmap[200]="ca";//có thể cùng giá trị
    //cách thêm 2
    testmap.insert({300,"bo"});
    testmap.insert({400,"chim"});//
    cout<<testmap.size()<<endl;
    //cách in thông thường 
    for(pair<int, string> x : testmap){
        cout << x.first << " " << x.second << endl;
    }
    //in bằng dùng con tro
    for(map<int, string>::iterator it=testmap.begin();it != testmap.end();++it){
        cout<<(*it).first<<" "<<(*it).second << endl;
    }
    if(testmap.count(100) != 0){//xem trong map co key 100 khong
        cout<<"co ton tai "<<testmap[100]<<endl;
    }
    else cout<<"khong ton tai key 100"<<endl;
    //bài tính tần suất xuất hiện của 1 giá trị
    map<int,int> vdbaitap;
    int n;cin>>n;
    for(int i=0;i<n;i++){
        int x;cin >> x;
        vdbaitap[x]++;//khi mới khởi tạo 1 key mới ta sẽ có value =0 ; ++ thì 0-> 1 sau đó mỗi lần gặp lại key đã tồn tại thì value sẽ tăng lên 1 đơn vị
    }
    //bài tính chuỗi xuất hiện nhiều lần nhất
    map<string,int> dem;
    int m; cin>> m;
    for (int i=0;i<m;i++){
        string x; cin >> x;
        dem[x]++;
    }
    string res;
    int max_fre=0;
    for(pair<string, int> x : dem){
        if(x.second>/*= */max_fre){//nếu có 2 từ có số tần suất  giống nhau và đề muốn so  sánh theo kí tự thì nhớ kí tự có stt lớn ở đằng sau nên ta thêm dấu bằng >= là bắt  đc vì nó sẽ lấy thg lớn nhất nhất xeaps sau cùng
            max_fre=x.second;
            res=x.first;
            }
    }
    cout<<res<<":"<<max_fre<<endl;

}
