def sign(x):
    if(x > 0): return 1
    if(x < 0): return -1
    if(x == 0): return 0

a = [int(i) for i in input().split()]
b = [int(i) + 1 if sign(a[i + 1]) == sign(a[i]) else ''  for i in range(0,len(a) - 1)]
b = list(filter(None, b))

if(len(b) >= 1):
    print(a[b[0] - 1], a[b[0]])