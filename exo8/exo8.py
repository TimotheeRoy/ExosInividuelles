## on rentre un tableau de 4 couleurs. En sortie on a un tableau de 2 chiffres
## le premier chiffre représente le nb de bonne couleur bien placée, le 2e le nb de bonne couleur mal placée 
from random import *
from collections import Counter


colors = ['red', 'green', 'blue', 'yellow','purple','grey','black','white']
def defineCode():
    code = []
    for i in range(4):
        code.append(colors[randint(0,7)])
    return code



def isColors (tab) :
    for color in tab :
        if color not in colors:
            return False
    return True

## isColors return true si chaque couleurs du tab est dans la liste colors, false sinon

def checkPropal (tab,code):
    return tab == code
## condition de victoire, true si propal = code, false sinon

def hint(tab,code):
    colorAndPos , color = 0, 0 
    setCode, setTab = set(code), set(tab)  

    for i in range(len(tab)):
        if tab[i] == code[i]:
            colorAndPos+=1
        
    counterCode, counterTab = Counter(code), Counter(tab)
    for colorToFind in counterCode:
        for colorToCheck in counterTab:
            if colorToFind == colorToCheck:
                color += min(counterCode[colorToFind], counterTab[colorToCheck])
        #elif tab[i] in code:
        #    color+=1                  
    return ['Bonnes couleurs à la bonne place : ' + str(colorAndPos),
            'Bonnes couleurs à la mauvaise place : '+ str(color-colorAndPos)]



def askColor():
    return input('Entrez une couleur : ')

def gameLoop():            
    #code = defineCode()
    code = ['black', 'black', 'purple', 'white']
    while True:

        propal = [askColor() for _ in range(4)]
        print('Proposition : ', propal)
        while not isColors(propal):
            print('Les couleurs possibles sont : ',colors)
            propal = [askColor() for _ in range(4)]
        
        if checkPropal(propal,code):
            return print('Tu as trouvé')
            break

        print(hint(propal,code))
    
    
gameLoop()