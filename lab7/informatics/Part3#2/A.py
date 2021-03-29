import math

a = int(input())

i = 1

while(i <= a):
    c = int(math.sqrt(i))
    if(c * c == i):
        print(i)
    i+=1