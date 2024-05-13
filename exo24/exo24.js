class Board {
    constructor(n) {
        this.cases = {
            A: n,
            B: n,
            C: n,
            D: n,
            E: n,
            F: n,
            G: n,
            H: n,
            I: n,
            J: n,
            K: n,
            L: n,
        };
    }

    display() {
        let plateauString = ` A  B  C  D  E  F
(${this.cases.A})(${this.cases.B})(${this.cases.C})(${this.cases.D})(${this.cases.E})(${this.cases.F})
(${this.cases.G})(${this.cases.H})(${this.cases.I})(${this.cases.J})(${this.cases.K})(${this.cases.L})
 G  H  I  J  K  L`;
        console.log(plateauString);
    }

    isEmpty() {
        return Object.values(this.cases).every((graines) => graines === 0);
    }

    getNextCase(current, direction) {
        let cases = Object.keys(this.cases);
        let currentIndex = cases.indexOf(current);
        return direction === 1
            ? cases[(currentIndex + 1) % cases.length]
            : cases[(currentIndex - 1) % cases.length];
    }

    saw(start) {
        let seeds = this.cases[start];
        this.cases[start] = 0;

        let current = start;

        while (seeds > 0) {
            current = this.getNextCase(current, 1);
            this.cases[current]++;
            seeds--;
        }
    }

    harvest(start) {
        let seeds = this.cases[start];
        this.cases[start] = 0;

        let current = start;

        while (seeds > 0) {
            current = this.getNextCase(current, -1);
            this.cases[current]++;
            seeds--;
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    increment(pts) {
        this.score += pts;
    }
}

class Awele {
    constructor(joueur1, joueur2) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.board = new Board(4);
        this.joueur1Turn = true;
    }

    displayBoardAndScores() {
        console.log("Plateau de jeu :");
        this.board.display();
        console.log(`${this.joueur1.name} : ${this.joueur1.score}`);
        console.log(`${this.joueur2.name} : ${this.joueur2.score}`);
    }

    playTurn(start) {
        let activePlayer = this.joueur1Turn ? this.joueur1 : this.joueur2;
        let otherPlayer = this.joueur1Turn ? this.joueur2 : this.joueur1;

        if (["A", "B", "C", "D", "E", "F"].includes(start)) {
            this.board.saw(start);
        } else {
            this.board.harvest(start);
        }

        this.joueur1Turn = !this.joueur1Turn;
    }

    gameOver() {
        return this.board.isEmpty();
    }

    start() {
        while (!this.gameOver()) {
            this.displayBoardAndScores();

            const start = prompt(
                `${
                    this.joueur1Turn ? this.joueur1.name : this.joueur2.name
                }, entrez la case de départ pour jouer votre tour (A-L) : `
            );
            this.playTurn(start);
        }
    }
}

const joueur1 = new Player("Joueur 1");
const joueur2 = new Player("Joueur 2");

let jeu = new Awele(joueur1, joueur2);
jeu.start();
