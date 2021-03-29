def power(a,b):
    res = 1
    while(b):
        res*=a
        b-=1
    return res

a,b = map(float, input().split())
print(power(a,b))
