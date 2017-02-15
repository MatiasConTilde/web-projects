list_length = 3*8+1

all_numbers = []
for i in range(list_length):
    all_numbers.append(i+1)
#print(all_numbers)

while len(all_numbers) > 2:
    divisible_sums = []
    for n in all_numbers:
        for m in all_numbers:
            if m > n and (n + m) % 8 == 0:
                divisible_sums.append(n)
                divisible_sums.append(m)
    #print(divisible_sums)

    times_of_number = {}
    for n in all_numbers:
       times_of_number[n] = divisible_sums.count(n)
    print(times_of_number)

    # Amelie
    min_value = ((list_length-1)/8)+1
    for i, n in times_of_number.items():
        min_value = min(min_value, n)
    for i, n in times_of_number.items():
        if n == min_value:
            all_numbers.remove(i)
            print(i)
            break
    #print(all_numbers)
    if len(all_numbers) <= 2: break

    # Boris
    max_value = 0
    for i, n in times_of_number.items():
        max_value = max(max_value, n)
    for i, n in times_of_number.items():
        if n == max_value:
            all_numbers.remove(i)
            print(i)
            break
    #print(all_numbers)

#print(list_length, sum(all_numbers), sum(all_numbers) % 8 == 0)
