function decoupeChaine(str) {
    let res = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            res += ' ';
        }
        res += str[i];
    }
    return res;
}

function decritChaine(string) {
    let count = 1;
    let res = '';

    for (let i = 1; i < string.length; i++) {
        if (string[i] !== string[i - 1]) {
            res += count + string[i - 1];
            count = 1;
        } else {
            count += 1;
        }
    }
    res += count + string.slice(-1);
    return res;
}

function suiteConeway(char, n) {
    let res = '';
    let currentChar = char;
    for (let i = 0; i < n; i++) {
        res += currentChar + '\n';
        currentChar = decritChaine(currentChar);
    }
    return res
}

const displayTree = () =>{
    const tree = document.querySelector('#tree');
    const btn = document.querySelector('button')
    const input = document.querySelector('input')

    btn .addEventListener('click', ()=> {
        tree.innerHTML=''
        const n = parseInt(input.value)
        for (let line of suiteConeway('1',n+1).split('\n')){
            tree.innerHTML += `${line}<br>`
        }
    })
}

