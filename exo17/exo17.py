import random

def generateGrid(m,n,k=0): # m lignes & n colonnes
    grid = [[0]*n for _ in range(m)]
    numBombe = 0
    while numBombe < k:
        i,j = random.randint(0,m-1), random.randint(0,n-1)
        if grid[i][j] != 1:   
            grid[i][j] = 1
            numBombe += 1
    return grid


def clickOnCase (hiddenGrid, grid, i, j):
    if (grid[i][j] == 0):
        hiddenGrid[i][j] = 0
        displayAfterClick(hiddenGrid, grid, i ,j)
    else : 
        return 'Perdu'
    return hiddenGrid

def displayAfterClick(hiddenGrid, grid , i, j):
    for line in range(i-1,i+2):
        for col in range(j-1,j+2):
            if grid[line][col] == 0:
                hiddenGrid[line][col] = 0

def isWin (grid , hiddenGrid):
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 0 and hiddenGrid[i][j] != 0:
                return False
    return True

def printGrid (grid) :
    for row in grid:
        print(row)

def gameLoop(grid, hiddenGrid):
    printGrid(grid)
    print("")
    gameOver = False
    while not isWin(grid ,hiddenGrid):
        i,j = map(int,input('Entrez des coordonnées séparées par une virgule: ').split(','))
        hiddenGrid = clickOnCase(hiddenGrid, grid , i, j)
        if (type(hiddenGrid) == str):
            print(hiddenGrid)
            gameOver = True
            break
        else:
            printGrid(hiddenGrid)
    if isWin(grid, hiddenGrid) and not gameOver:
        print("C'est gagné !")
    



def start(m,n,k) :
    grid = generateGrid(m,n,k)
    hiddenGrid = [['#' for _ in range(n)] for _ in range(m)]
    gameLoop(grid, hiddenGrid)

start(10,10,25)