def check(x):
    return x != "NAN"

a = [int(i) for i in input().split()]
b = [int(a[i]) if a[i] > a[i - 1] and a[i] > a[i + 1] else 'NAN' for i in range(1,len(a)-1)]
b = filter(check, b)
print(len(list(b)))