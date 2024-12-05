#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main() {
	int random_number;
	int i = 0;
	srand(time(NULL));
	for (i = 0; i <= 10; i++)
	random_number = (int)rand();
	{
		printf("%d\n", random_number);
	}
	return 0;
}