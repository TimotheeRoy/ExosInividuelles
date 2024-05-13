file = open('data.txt', 'r') 
data = file.read()

test = 'GTTCGTTGACGGTCCGGACCAATGAAACAGACCCAACCAAGCTTTCGCTCAACGACCATTCCCCACCTTCCGTCT'
conversionTable = {'ATA':'I',
'ATC':'I',
'ATT':'I',
'ATG':'M',
'ACA':'T',
'ACC':'T',
'ACG':'T',
'ACT':'T',
'AAC':'N',
'AAT':'N',
'AAA':'K',
'AAG':'K',
'AGC':'S',
'AGT':'S',
'AGA':'R',
'AGG':'R',
'CTA':'L',
'CTC':'L',
'CTG':'L',
'CTT':'L',
'CCA':'P',
'CCC':'P',
'CCG':'P',
'CCT':'P',
'CAC':'H',
'CAT':'H',
'CAA':'Q',
'CAG':'Q',
'CGA':'R',
'CGC':'R',
'CGG':'R',
'CGT':'R',
'GTA':'V',
'GTC':'V',
'GTG':'V',
'GTT':'V',
'GCA':'A',
'GCC':'A',
'GCG':'A',
'GCT':'A',
'GAC':'D',
'GAT':'D',
'GAA':'E',
'GAG':'E',
'GGA':'G',
'GGC':'G',
'GGG':'G',
'GGT':'G',
'TCA':'S',
'TCC':'S',
'TCG':'S',
'TCT':'S',
'TTC':'F',
'TTT':'F',
'TTA':'L',
'TTG':'L',
'TAC':'Y',
'TAT':'Y',
'TAA':'_',
'TAG':'_',
'TGC':'C',
'TGT':'C',
'TGA':'_',
'TGG':'W',}

def splitData(data, n) :
    return [data[i:i+n] for i in range(0,len(data),n)]

# A
dataA = data + 'G'
splitedDataA = splitData(dataA,3)
convertedDataA = list(map(lambda e : conversionTable[e] , splitedDataA))
#print(''.join(convertedDataA))

# B
splitedDataB = (splitData(data,25))
superSplited = list(map(lambda e : splitData(e,5) , splitedDataB)) # liste de liste de 5*5 lettres
finalFormat = []
for line in superSplited:
    for chars in line:
        finalFormat.append(' '.join(chars))
    finalFormat.append(' ')
print((superSplited))

