def decoupeChaine (str):
    res = str[0]
    for i in range(1,len(str)):
        if str[i] != str[i-1]:
            res += ' '
        res += str[i]
    return res

def decritChaine (string):
    count = 1
    res = ''
    for i in range(1,len(string)):
        if string[i] != string[i-1]:
            res += str(count) + string[i-1]
            count = 1
        else:
            count +=1
    res += str(count) + string[-1]
    return res


def suiteConeway (char , n):
    res = ''
    currentChar = char
    for _ in range(n):
        res += currentChar + '\n'
        currentChar = decritChaine(currentChar)
    return res


print(suiteConeway('1',5)) 
# doit renvoyer 
# a
# 1a
# 111a