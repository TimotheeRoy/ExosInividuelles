const space = ' ';

const quotient = (a, b) => {
    return Math.floor(a / b);
}

const displayBoulesDeNoelouPasBoulesDeNoel = (freq) => {
    const tabDeco = ['*', 'o', '+'];
    for (let i = 0; i < freq; i++)
        tabDeco.push('*')
    return tabDeco[Math.floor(Math.random() * tabDeco.length)];
}

const displayLeafsForXmasTree = (n) => {
    let leafsLine = '*'
    for (let i = 1; i < n - 1; i++) {
        leafsLine += displayBoulesDeNoelouPasBoulesDeNoel(3)
    }
    return leafsLine + '*'
}

const displayLineForXmasTree = (line, n) => {
    if (line === 1) {
        return space.repeat(n + 1) + '/' + '*' + '\\' + '\n';
    }
    else
        return space.repeat(n + 1) + '/' + displayLeafsForXmasTree(line * 2 - 1) + '\\' + '\n';
}

const dislayTrunkForXmasTree = (n, offset) => {
    const trunkSpaces = (n < 3) ? space.repeat(n + 1) : space.repeat(n);
    const trunk = '#'.repeat((offset + 1 <= 2) ? offset + 1 : 2);
    return trunkSpaces + trunk + '\n';
}

const sapin = (n) => {
    let tree = space.repeat(n + 1) + '+\n';
    let offset;

    //affichage du feuillage 
    for (let i = 1; i <= n + 1; i++) {
        offset = quotient(i - 1, 3);
        tree += displayLineForXmasTree(i - offset, n - i + offset);
    }

    //affichage du tronc
    for (let i = 1; i <= offset + 1; i++) {
        tree += dislayTrunkForXmasTree(n, offset);
    }

    return tree;
}

const btn = document.querySelector('#btn')
const inputNumber = document.querySelector('input')
const tree = document.querySelector('#tree')

inputNumber.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        tree.innerHTML = '';
        const XmasTree = sapin(parseInt(inputNumber.value)-1).replace(/\n/g, '<br>')
        tree.innerHTML += `<pre>${XmasTree} </pre>`
    }
    
})


btn.addEventListener('click', () => {
    tree.innerHTML = '';
    const XmasTree = sapin(parseInt(inputNumber.value)-1).replace(/\n/g, '<br>')
    tree.innerHTML += `<pre>${XmasTree} </pre>`
    
})