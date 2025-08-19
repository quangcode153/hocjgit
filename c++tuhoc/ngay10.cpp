//dữ liệu sets & maps
#include<iostream>
#include<bits/stdc++.h>
#include<set>
using namespace std;
//insert(hàm thêm phần tử của sets)
//độ phức tạp O(log n)
//find(cũm là hàm kiểm tra xem giá trị có tồn tại trong lưu trữ hay không tuy nhiên câu trl nó sẽ khác thay vì 1 và 0 nó sẽ trả lời theo hướng trả về vị trí của giá trị muốn hỏi nếu địa chỉ trả về là .end() tức vị trí sau vị trí cuối cùng thì là không tồn tài còn khác vị trị này thì là nó có tồn tại)
//count(hàm kiểm tra 1 giá trị tồn tại bao nhiêu lần trong lưu trữ nếu có nó trả về >1 còn không có lần nào thì nó trả về 0)
//erase(xóa giá trị)
//multiset nó giống set đều để lưu dữ liệu nhưng multiset có thể lưu các giữ liệu khác nhau và tính số lượng các phần tử giống trong mảng  và vector tính cả phần tử trùng, ngoài điểm này thì multiset vẫn có thể sử dụng các hàm phía trên của set
//unordered_set:lưu các phần tử riêng biệt nhưng không được sắp xếp 
int main(){
    set<int> testsets;//lưu tập hợp mà các gias trị trong tập hợp đó đó không có các giá trị giống nhau 
    testsets.insert(1);
    testsets.insert(2);
    testsets.insert(4);
    testsets.insert(2);
    testsets.insert(5);
    testsets.insert(1);
    cout << testsets.size() <<endl;//kq=3 [1,2,4] các giá trị còn lại bị trùng sẽ không được thêm vào 
    if(testsets.count(5)) cout<<" gia tri 5 co ton tai trong set"<< endl;
    else cout<<"khong tòn tai gia tri 5 trong set"<<endl;
    for(int i:testsets){
        cout<<i<<endl;
    }
    if(testsets.find(5)!=testsets.end()) cout<<"gia tri 5 co ton tai trong set"<<endl;
    else cout<<"gia tri 5 khong ton tai trong test"<<endl;
    testsets.erase(5);//xóa phần tử 5
    //hoặc 
    testsets.erase(testsets.find(5));//kiểm tra có tồn tại hay không rồi xóa
    cout<<*(testsets.begin())<<endl;//phần tử đầu tiên hay nói cách khác phần tử nhỏ nhất
    cout<<*(testsets.rbegin())<<endl;//giá trị lớn nhất trong set
    for(set<int>::iterator it=testsets.begin();it!=testsets.end();++it){//cũm là 1 cấu trúc hàm for bth thôi vì các giá trị trong 1 kho giữ liệu cách nhau 1 đơn vị địa chỉ nên ++ có thể nhảy qua nhà thằng tiếp theo 
        cout << *it <<endl;//cách in ra cả set băng iterator hay contro thông minh

    }
    set<int> b;
    int n; cin>>n;
    for (int i=0;i<n;i++){//có thể khai báo như sau giống với vector ha
        int tmp;cin>>tmp;
        b.insert(tmp);
    }
    cout<<b.size()<<endl; // sẽ ra số lượng phần tử khác nhau đã nhập
    multiset<int> testmts;
    testmts.erase(3);//xóa 1 giá trị 3 tức xóa toàn bộ 3
    testmts.erase(testmts.find(4));//xóa 1 phần tử có giá trị là 4 các giá trị 4 khác vẫn còn
    testmts.erase(testmts.find(1),testmts.find(3)); // xóa từ giá trị 1 đến trước giá trị 3 hay nói cách khác xóa đoạn [1,3)
    int p,k;cin>>p>>k;
    int h[p];
    for(int &i:h) cin>>i;
    for(int i=0;i<k;i++){//lưu 3 giá trị đầu
        testmts.insert(h[i]);
    }
    for(int i=k;i<p;i++){//thực hiện in giá trị lớn nhất trong 3 giá trị rồi xóa giá trị đầu tiên thêm giá trị tiếp theo cứ thế  biến đổi 3 giá trị trong testmts liên tục đến hết
        cout<<*testmts.rbegin()<<endl;
        testmts.erase(testmts.find(h[i-k]));
        testmts.insert(h[i]);

    }
    cout<<*testmts.rbegin()<<endl;
    unordered_set<int> testud;//nó chỉ khác về tốc độ vì độ phân tích của unordered_set là 0(1)hoặc o(n)

    return 0;
}