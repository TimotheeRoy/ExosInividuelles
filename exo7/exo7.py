import tkinter as tk




leftMatches = 50
    

def removeMatches (nbToRemove):
    return leftMatches - nbToRemove

def askNbToRemove ():
    return int(input("Combien d'allumettes veux-tu enlever ?"))

def isInLimit (nbToRemove):
    if not(1 <= nbToRemove <= 6):
        print ("Tu ne peux qu'enlever 1 à 6 allumettes")
        return False
    else:
        return True 
    
def victoire (leftMatches):
    return leftMatches<=0


def tour(i, nbPlayers):
    global leftMatches

    print(f'Player {i} :')
    nbToRemove = askNbToRemove()

    while not isInLimit(nbToRemove):
        nbToRemove = askNbToRemove()
        
    leftMatches = removeMatches(nbToRemove)

    if victoire(leftMatches):
        print(f'Player {i} a gagné')
    else :
        print(f'Il reste {leftMatches} allumettes')
        tour(i%nbPlayers+1, nbPlayers)
    

def multiPlayer ():
    return int(input('Combien y a t il de joueurs.euses ?'))


tour(1,multiPlayer())