//拓展在一个数组中，只有两个数出现了奇数次，其他数都出现了偶数次，怎么找到这两个数？
//拓展在一个数组中，只有两个数出现了奇数次，其他数都出现了偶数次，怎么找到这两个数？
#include<stdio.h>
int main() {
    int i = 0;
    int ero = 0;
    int right = ero & (-ero + 1);
    int arr[] = { 1,1,1,1,1,2,2,2,2,3,3,3,4,4,4,4 };

    // 假设数组中只有两个数出现了奇数次
    int num1 = 0, num2 = 0;
    for (i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) {
        ero ^= arr[i];
    }

    // 找到最右边的1，即两个奇数次出现的数的不同位
    right = ero & (-ero + 1);

    // 根据不同位将数组分成两组，分别异或
    for (i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) {
        if (right & arr[i]) {
            num1 ^= arr[i];
        } else {
            num2 ^= arr[i];
        }
    }

    printf("%d,%d", num1, num2);
    return 0;
}
