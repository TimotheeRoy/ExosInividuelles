const quotient = (a, b) => {
    return Math.floor(a / b)
}

const displayLineForChristmasTree = (line, n) => {
    return ' '.repeat(n + 1) + '/' + '*'.repeat(line * 2 - 1) + '\\' + '\n';
}

const sapin = (n) =>{
    let tree = ' '.repeat(n+1)+'+\n';
    for (let i=1; i<=n+1 ; i++){
        let offset = quotient(i-1,3)
        tree += displayLineForChristmasTree(i-offset,n-i+offset)
    }
    
    return tree
}

console.log(sapin(7))


