import math

MAX = 50000

primes = [0 for i in range(MAX + 1)]
primes[0] = 1
primes[1] = 1

for i in range(2, len(primes)):
    if(primes[i] != 0):
        continue
    k = i
    while(k + i < len(primes)):
        primes[k + i] = 1
        k+=i

ans = 1

x = int(input())
if(x == 0):
    print(0)
    exit(0)

for i in range(len(primes)):
    if(primes[i] == 0):
        cnt = 0
        while(x % i == 0):
           x/=i
           cnt+=1
        if(cnt != 0):
            ans*=(1 + cnt)


if(x != 1):
    ans*=2

print(ans)

# x = int(input())
