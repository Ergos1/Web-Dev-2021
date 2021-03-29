v = int(input())
t = int(input())

dis = v * t
dis%=109

if(dis < 0): dis+=109

print(dis)