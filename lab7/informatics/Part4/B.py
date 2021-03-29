def isEmpty(x):
    return x != ''

a = [i if int(i)%2 == 0 else '' for i in input().split()]

print(' '.join(filter(isEmpty,a)))