#include <stdio.h>
#include <math.h>

int main() {
   system("cls");
    int o=55;
    
    int a[8];
    int i ;
    int dec = 0;

   printf("\nEnter an 8 bit binary\n");
    
    for(i=0; i<8 ;i++) {
        scanf("%d", &a[i]);

        if (a[i]>1) {
        printf("thats not a valid number, the number has to be either a zero or one"); 
        } else if (a[i]<0) {  
            printf("thats not a valid number, the number has to be either a zero or one");
        }
    }

     int temp;
    int j;

    for(int i = 0; i<4; i++){
        j=7-i;
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    } 
    
    for(i=0; i<8 ;i++) { 
        dec = dec+( a[i]*pow(2,i));
   } 

   printf("This is the decimal equivalent \n", '\n');
   printf("%d\n", dec);

    system("pause"); 
return 0;
}