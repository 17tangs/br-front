/* Textbook 5.12 partially used as a base for code from the provided book solution, along with lecture info*/

void newPsum(float a[], float p[], long n){
    long i;
    float val, last_val;
    last_val = p[0] = a[0];
    float tempFloat0, tempFloat1, tempFloat2, tempFloat3;

    for(i = 1; i < n - 4; i++)
    {
        tempFloat0 = last_val + a[i];
        tempFloat1 = tempFloat0 + a[i + 1];
        tempFloat2 = tempFloat1 + a[i + 2];
        tempFloat3 = tempFloat2 + a[i + 3];

        p[i] = tempFloat0;
        p[i+1] = tempFloat1;
        p[i+2] = tempFloat2;
        p[i+3] = tempFloat3;

        last_val = last_val + (a[i] + a[i + 1] + a[i + 2] + a[i + 3]);

    }

    for(; i < n; i++)
    {
        last_val += a[i];
        p[i] = last_val;
    }

}