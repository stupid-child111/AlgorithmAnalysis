//在一个数组中，只有一个数出现了奇数次，其他数都出现了偶数次，怎么找到这个数？
#include<stdio.h>
int main() {
	int Onlyone = 0;
	int i = 0;
	int arr[] = {1,1,2,2,2,2,3,3,4 };
	for (i = 0; i </*=*/ sizeof(arr) / sizeof(arr[0]); i++)
		Onlyone = Onlyone ^ arr[i];
	printf("%d", Onlyone);

	return 0;
}