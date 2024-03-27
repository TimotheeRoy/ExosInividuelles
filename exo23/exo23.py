import random
    
def placeRandomBombe(nbBombs, nbColumns, nbLines, grid):
    placedBombs = 0
    while placedBombs < nbBombs:
        x = random.randint(0,nbColumns-1)
        y = random.randint(0,nbLines-1)
        if grid[y][x] != 'X':
            grid[y][x] = 'X'
            placedBombs += 1

def gridGenerator(n, m, char):
    array = [[char for column in range(m)] for line in range(n)]
    return array

def displayGrid(gridToDisplay):
    for row in gridToDisplay:
        print("  ".join(str(cell) for cell in row))
        print("")

def case(x, y, grid, playerGrid):
    try :
        x, y = int(x), int(y)
        if x >= 0 and x < len(grid):
            if y >= 0 and y < len(grid[x]):
                playerGrid[y][x] = grid[y][x]
            else:
                raise IndexError("Out of the grid! Play again")
        else:
            raise IndexError("Out of the grid! Play again")
    except ValueError:
        raise ValueError('Must write an integer')

if __name__ == "__main__":
    columns = 10
    lines = 5
    grid = gridGenerator(columns, lines, 0)
    playerGrid = gridGenerator(columns, lines, "-")

    placeRandomBombe(1, columns, lines, grid)

    while True:
        print("Enter coordinates to open a case")
        coordinateX = input("Enter x between 1 to "+ str(columns) + " : ")
        coordinateY = input("Enter y between 1 to "+ str(lines) + " : ")

        case(coordinateX-1, coordinateY-1, grid, playerGrid)
        displayGrid(playerGrid)
