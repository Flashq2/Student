write_file = open ("D:\\dic.txt",'r')
print (write_file.read())
dict = dict()

for x in write_file:
    arr = x.split(':')
    dict[arr[0]] = arr[1]

# =====Oup put======
text = input("Enter text : ")
for key in dict:
    print (dict[key])
    # print (key.index(text))