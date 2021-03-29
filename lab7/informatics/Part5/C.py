def xor(x,y):
    if((x or y) and (x != y)):
        return 1
    return 0

a,b = map(int, input().split())
print(xor(a,b))