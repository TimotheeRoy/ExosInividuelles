class Board:
    def __init__(self, n):
        self.cases = {
            'A': n,
            'B': n,
            'C': n,
            'D': n,
            'E': n,
            'F': n,
            'G': n,
            'H': n,
            'I': n,
            'J': n,
            'K': n,
            'L': n,
        }

    def display(self):
        plateauString = """ A  B  C  D  E  F
({})({})({})({})({})({})
({})({})({})({})({})({})
 G  H  I  J  K  L""".format(
            self.cases['A'], self.cases['B'], self.cases['C'],
            self.cases['D'], self.cases['E'], self.cases['F'],
            self.cases['G'], self.cases['H'], self.cases['I'],
            self.cases['J'], self.cases['K'], self.cases['L']
        )
        print(plateauString)

    def isEmpty(self):
        return all(graines == 0 for graines in self.cases.values())

    def getNextCase(self, current, direction):
        cases = list(self.cases.keys())
        currentIndex = cases.index(current)
        return cases[(currentIndex + direction) % len(cases)]

    def saw(self, start):
        seeds = self.cases[start]
        self.cases[start] = 0
        current = start
        while seeds > 0:
            current = self.getNextCase(current, 1)
            self.cases[current] += 1
            seeds -= 1

    def harvest(self, start):
        seeds = self.cases[start]
        self.cases[start] = 0
        current = start
        while seeds > 0:
            current = self.getNextCase(current, -1)
            self.cases[current] += 1
            seeds -= 1


class Player:
    def __init__(self, name):
        self.name = name
        self.score = 0

    def increment(self, pts):
        self.score += pts


class Awele:
    def __init__(self, joueur1, joueur2):
        self.joueur1 = joueur1
        self.joueur2 = joueur2
        self.board = Board(4)
        self.joueur1Turn = True

    def displayBoardAndScores(self):
        print("Plateau de jeu :")
        self.board.display()
        print(f"{self.joueur1.name} : {self.joueur1.score}")
        print(f"{self.joueur2.name} : {self.joueur2.score}")

    def playTurn(self, start):
        activePlayer = self.joueur1 if self.joueur1Turn else self.joueur2
        otherPlayer = self.joueur2 if self.joueur1Turn else self.joueur1
        if start in ['A', 'B', 'C', 'D', 'E', 'F']:
            self.board.saw(start)
        else:
            self.board.harvest(start)
        self.joueur1Turn = not self.joueur1Turn

    def gameOver(self):
        return self.board.isEmpty()

    def start(self):
        while not self.gameOver():
            self.displayBoardAndScores()
            start = input(
                f"{self.joueur1.name if self.joueur1Turn else self.joueur2.name}, entrez la case de départ pour jouer votre tour (A-L) : "
            )
            self.playTurn(start)


joueur1 = Player("Joueur 1")
joueur2 = Player("Joueur 2")

jeu = Awele(joueur1, joueur2)
jeu.start()
