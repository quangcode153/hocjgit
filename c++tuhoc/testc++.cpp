#include <bits/stdc++.h>
using namespace std;

int timmax(const vector<int>& a){
    int maxVal = a[0];
    for(int val : a){
        if(val > maxVal) maxVal = val;
    }
    return maxVal;
}

int main(){
    int n;
    cout << "Nhap so luong phan tu trong mang: ";
    cin >> n;

    vector<int> a(n);
    unordered_set<int> tapSo; // để lưu lại các số đã xuất hiện

    for(int i = 0; i < n; ++i){
        cout << "Nhap gia tri thu " << i+1 << ": ";
        cin >> a[i];
        tapSo.insert(a[i]);
    }

    sort(a.begin(), a.end());

    cout << "Gia tri trong mang theo thu tu tang dan: ";
    for(int val : a) cout << val << " ";
    cout << endl;

    int maxVal = timmax(a);
    int minMissing = -1;

    for(int i = 1; i < maxVal; ++i){
        if(tapSo.find(i) == tapSo.end()){ // nếu không tìm thấy
            minMissing = i;
            break;
        }
    }

    if(minMissing == -1)
        cout << "Tat ca cac so tu 1 den " << maxVal-1 << " deu xuat hien." << endl;
    else
        cout << "Gia tri be nhat chua xuat hien trong mang la: " << minMissing << endl;

    return 0;
}
