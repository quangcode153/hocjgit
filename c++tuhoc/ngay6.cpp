//mảng cộng dồn 
#include <bits/stdc++.h>
using namespace std;
int main(){
    int n; cin>>n;
    int a[n];
    for(int &x:a) cin>>x;//cách nhập từng giá trị trong mảng 1 chiều 
    int q; cin>>q;//số lần muốn dùng
    
    while(q--){
        int l,r; cin>>l>>r;
        int sum=0;
        for(int i=l;i<r;i++){
            sum+=a[i];
        }
        cout<<sum<<"\n";
    }
    //hoặc ta có thể tạo 1 mảng vecto  cộng dồn như sau
    vector<int> prefix(n+1,0);//trong đó n+1 số lượng phần tử của vector, 0 là gí trị  của các phần tử khi mới được khởi tạo
    //để tạo 1 mảng 1 chiều mà tính chất như ở trên ta có thể diễn tả như sau int prefix[n+1]={0};
    for(int i=1;i<n;i++){
        prefix[i]=prefix[i-1]+a[i-1];//mảng cộng dồn luôn lớn hơn mảng gốc 1 giá trị và giá trị đầu tiên trong mảng cộng dồn là 0; nên ta sẽ gán giá trị cho mảng cộng dồn từ 1->n+1 thay vì từ 0->n và với công thức giá trị n+1=giá trị cộng dồn n + giá trị gốc ở vị trí đó
        //vd mảng gốc là [1,2,3] thì mảng cộng dồn là [0;1;3;6] 
        //ở i=0 ha  thì prefix[1]=prefix[0]+a[0]=0+1=1;
        //ở i=1 ha  thì prefix[2]=prefix[1]+a[1]=1+2=3;
        //ở i=2 ha  thì prefix[3]=prefix[2]+a[2]=3+3=6; vậy => prefix[i+1]=(a[0]+a[i-1])+a[i] nến chỉ có 2 giá trị đã có thê tính tổ  các giá trị trước đó, lấy tổng của các giá trị trước i + giá trị tại i để ta có giá trị i+1
        //hiểu thì là prefix[i]=a[0]+...+a[i-1] nến prefix[i]+a[i] sẽ =a[0]+...+a[i-1]+a[i]=prefix[i+1] vì prefix là mảng chứa các giá trị là tổng của các giá trị trước nó 
        //nếu vẫn chua hiểu ta cố thể khởi tạo như này int a[n+1];
        //int prefix[n+1] 
        //thì phép tính sẽ là prefix[i]=prefix[i-1]+a[i]
    }
    int test; cin>>test;
    while(test--){
        //có thể bổ sung thêm điều kiện của r và l cho chắc
        int l,r;cin>>l>>r;
        cout<< prefix[r]-prefix[l]<<"\n";
    }
    //mảng cộng dồn 2 chiều 
    int m, p; cin >>m>>p;
    int b[m][p];
    for(int i=0;i<m;i++){
        for(int j=0;j<p;j++){
            cout<<"\nnhập giá trị b["<<i<<"]["<<j<<"]=";
            cin>>b[i][j];
        }
    }
    cout<<"nhập số lần bạn muốn tính giá trị cộng dồn:";
    int test2;cin>>test2;
    while(test2--){
        int h1,h2,c1,c2;
        cout<<"nhập giá trị lần lượt của giới hạn hàng và cột bạn muốn tính giá trị cộng dồn:";
        cin >> h1 >> h2 >>c1 >> c2;
        int sum=0;
        for(int i=h1;i<=h2;i++){
            for (int j=c1;j<=c2;j++){
                sum+=b[i][j];
            }
        }
        cout<<"giá trị cộng dồn trong khoảng hàng từ "<<h1<<"đến"<<h2<<"từ cột "<< c1<< " đến cột" <<c2<<"bằng:"<<sum;
    }
    

}