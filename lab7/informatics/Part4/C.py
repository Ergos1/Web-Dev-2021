def isPositive(x):
    return x > 0

a = [int(i) for i in input().split()]
a = filter(isPositive, a)

print(len(list(a)))