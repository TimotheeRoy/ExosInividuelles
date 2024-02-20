class XmasTree {
    constructor(height) {
        this.height = height;
        this.space = " ";
        this.deco = ["*", "o", "+"];
        // this.tree = this.spain()
    }

    displayBoulesDeNoelouPasBoulesDeNoel() {
        return this.deco[Math.floor(Math.random() * this.deco.length)];
    }

    displayLeafsForXmasTree(n) {
        let leafsLine = "*";
        for (let i = 1; i < n - 1; i++) {
            leafsLine += this.displayBoulesDeNoelouPasBoulesDeNoel();
        }
        return leafsLine + "*";
    }

    displayLineForXmasTree(line, n) {
        if (line === 1) {
            return this.space.repeat(n + 1) + "/" + "*" + "\\" + "\n";
        } else
            return (
                this.space.repeat(n + 1) +
                "/" +
                this.displayLeafsForXmasTree(line * 2 - 1) +
                "\\" +
                "\n"
            );
    }

    dislayTrunkForXmasTree(n, offset) {
        const trunkSpaces =
            n < 3 ? this.space.repeat(n + 1) : this.space.repeat(n);
        const trunk = "#".repeat(offset + 1 <= 2 ? offset + 1 : 2);
        return trunkSpaces + trunk + "\n";
    }

    sapin() {
        let tree = this.space.repeat(this.height + 1) + "+\n";
        let offset;

        //affichage du feuillage
        for (let i = 1; i <= this.height + 1; i++) {
            offset = Math.floor((i - 1) / 3);
            tree += this.displayLineForXmasTree(
                i - offset,
                this.height - i + offset
            );
        }

        //affichage du tronc
        for (let i = 1; i <= offset + 1; i++) {
            tree += this.dislayTrunkForXmasTree(this.height, offset);
        }

        return tree;
    }
}

const tree = new XmasTree(7);
console.log(tree.sapin());
