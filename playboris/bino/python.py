def a(n):
    if n == 0: return 1
    else: return a(n-1)*(4-(2/n))

for i in range(515):
    print(a(i))
