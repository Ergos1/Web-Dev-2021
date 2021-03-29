
a = [int(i) for i in input().split()]
b = [str(a[i]) if a[i] > a[i - 1] else '' for i in range(1,len(a))]

print(' '.join(list(filter(None, b))))
