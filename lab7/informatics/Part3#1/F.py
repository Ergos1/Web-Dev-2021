x = input()

lead = True

for i in reversed(x):
    if(i != '0'): lead = False

    if(lead and i == '0'):
        continue
    else:
        print(i, end = "")
