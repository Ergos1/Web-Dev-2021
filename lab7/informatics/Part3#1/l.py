x = input()

res = 0

p = 1

for i in reversed(x):
    if(i == '1'):
        res+=p
    p*=2

print(res)