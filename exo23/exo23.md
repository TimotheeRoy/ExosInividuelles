# 1. Enoncé

L’objectif de cet exercice de d’apprendre à faire des tests unitaires. Pour cela nous allons nous concentrer sur un langage, le python 🐍 et son framework `unittest` pour les tests unitaires.

Je vous propose de soit reprendre votre code de l’exercice individuel du démineur, même s’il n’est pas finit, soit vous pouvez reprendre cette code base :

- Code base démineur en python
    
    ```python
    import random
    
    def placeRandomBombe(nbBombs, nbColumns, nbLines):
        for i in range(nbBombs):
            x = random.randint(0,nbColumns-1)
            y = random.randint(0,nbLines-1)
            grid[y][x] = 'X'
    
    def gridGenerator(n, m, char):
        array = [[char for column in range(n)] for line in range(m)]
        return array
    
    def displayGrid(gridToDisplay):
        for row in gridToDisplay:
            print("  ".join(str(cell) for cell in row))
            print("")
    
    def case(x, y):
        if x >= 0 and x < len(grid):
            if y >= 0 and y < len(grid[x]):
                playerGrid[y][x] = grid[y][x]
            else:
                print("Out of the grid! Play again")
        else:
            print("Out of the grid! Play again")
    
    if __name__ == "__main__":
        columns = 10
        lines = 5
        grid = gridGenerator(columns, lines, 0)
        playerGrid = gridGenerator(columns, lines, "-")
    
        placeRandomBombe(1, columns, lines)
    
        while True:
            print("Enter coordinates to open a case")
            coordinateX = input("Enter x between 1 to "+ str(columns) + " : ")
            coordinateY = input("Enter y between 1 to "+ str(lines) + " : ")
    
            case(int(coordinateX)-1, int(coordinateY)-1)
            displayGrid(playerGrid)
    ```
    

Si vous hésitez, prenez votre code ! En effet, construire des tests unitaires peu remettre en cause la construction de notre code et son découpage. Vous posez ces questions sur votre propre code peut vous permettre de mieux concevoir votre programme la prochaine fois.

Rappels des objectifs des tests unitaires :

- Un test doit être le plus court possible et tester une petite fonctionnalité à la fois
- Un cas pour une fonctionnalité = un test
- Garantir la non régréssion d’une fonctionnalité
- Garantir le bon fonctionnement du programme, sans bug, sans comportement non désiré
- Garantir la qualité du programme
- Simplifie le débuggage
- Plus tot un bug est détecté, moins il coûte au développement du programme
- Peut être utilisé pour garantir la performance du programme
- Le titre d’un test doit être explicite

Je vous mets à dispo un petit [tuto](https://realpython.com/python-testing/) que vous avez (peut-être) déjà vu dans la branche de la fiche arbre **Tests automatisés.**

## Etape 1

Commençons par un test simple. Vous devriez avoir une fonction qui génère une grille de taille M/N. 

Creez une classe pour tester cette fonction appellée `TestGridGenerator`. Dans cette classe, creez 2 tests :

- Un qui test un résultat bon
    
    Pour une grille de 5/10, je vérifie que j’ai bien 5/10 cases.
    
- Un qui test un résultat faux (tester les faux positifs)
    
    Pour une grille de 5/10, je vérifie que je n’ai pas 2/8 ou 10/5 cases.
    

## Etape 2

Continuons dans cette classe `TestGridGenerator` pour tester la construction de la grille et son contenu. Suivant comment est fait votre jeu, votre grille doit être remplie de characteres specifiques. Dans la code base fournie, 2 grilles sont crées, une pour savoir où se trouvent les bombes et une qui est ce que peut voir le joueur. Sans tester encore la position des bombes, vous pouvez trouver au moins 2 tests à faire dans cette logique, même plus !

## Etape 3

Maintenant nous allons pouvoir faire une nouvelle classe et explorer d’autres fonctionnalité.

Réalisez au moins 5 tests sur le placement des bombes sur les différentes grilles.

## Etape 4

Lorsque l’on consoit une interface qui interragit avec un utilisateur, il faut avoir en tête que celui.celle-ci ne fera jamais completement ce que vous aviez prévu. Iel va appuyé la où il ne faut pas, rentrer des données qui n’ont rien à voir.

Faites des tests qui permettent d’anticiper ce genre de comportement. Au moins 5 tests.

Peut-être que vous aurez à changer le code du programme pour bien répondre au besoin.

## Etape **5**

Trouvez 5 cas de tests pour compléter la couverture de votre code, appelée code coverage.