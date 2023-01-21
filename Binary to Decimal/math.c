#include <stdio.h>
#include <math.h>

int main() {
    system("cls");

 int a[8] = {1,2,3,4,5,6,7,8};
int temp;
    int j;

    for(int i = 0; i<4; i++){
        j=7-i;
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;

    }

    for (int i = 0; i<8; i++){
    
    printf("%d",a[i]);
    }
    

return 0;
}