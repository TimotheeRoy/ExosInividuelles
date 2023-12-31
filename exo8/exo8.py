## on rentre un tableau de 4 couleurs. En sortie on a un tableau de 2 chiffres
## le premier chiffre représente le nb de bonne couleur bien placée, le 2e le nb de bonne couleur mal placée 
from random import randint

colors = ['red', 'green', 'blue', 'yellow','purple','grey','black','white']

def defineCode():
    code = []
    for _ in range(4):
        code.append(colors[randint(0,7)])
    return code

def isColors (tab) :
    for color in tab :
        if color not in colors:
            return False
    return True
## true si chaque couleurs du tab est dans la liste colors, false sinon

def checkPropal (tab,code):
    return tab == code
## condition de victoire

def getHint(tab,code):
    colorAndPos , color = 0, 0 
    for i in range(len(tab)):
        if tab[i] == code[i]:
            colorAndPos+=1
        elif tab[i] in code:
            color+=1                  
    return 'Bonnes couleurs à la bonne place : ' + str(colorAndPos) + '\nBonnes couleurs à la mauvaise place : '+ str(color)



def askColor(n):
    if n == 1:
        return input(f'Entrez la {n}ère couleur : ')
    else:
        return input(f'Entrez la {n}ème couleur : ')

def gameLoop():  
    print("Attention, il peut y avoir plusieurs fois la même couleur. En cas de doublon d'une couleur dans le code, si cette couleur est bien placée une fois, \nle jeu la comptabilisera à la fois comme bien et mal placée")
    print("Exemple d'interprétation de l'indice dans ce cas: \nCode = [black,black,purple,white] et proposition = [black,purple, purple, white] \nRenvoie 3 Bien placées et 1 mal placée \n ")        
    code = defineCode()
    while True:

        propal = [askColor(i+1) for i in range(4)]
        print('Proposition : ', propal)
        while not isColors(propal):
            print('Les couleurs possibles sont : ',colors)
            propal = [askColor(i+1) for i in range(4)]
        
        if checkPropal(propal,code):
            print('Tu as trouvé !')
            break

        print(getHint(propal,code))
    
    
gameLoop()