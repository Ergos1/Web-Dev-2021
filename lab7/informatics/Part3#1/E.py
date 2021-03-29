x = input()

res = 0

for i in x:
    res+=(int(ord(i) - ord('0')))


print(res)