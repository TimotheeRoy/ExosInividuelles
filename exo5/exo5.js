const sum1 = (tab) =>{
    let tot = 0;
    for (let i=0; i< tab.length; i++)
        tot += tab[i];
    return tot;
}

const sum2 = (tab, i) =>{
    if (i<0)
        return 0
    else
        return tab[i] + sum2(tab, i-1);
}


const factorial1 = (n) =>{
    let tot=1;
    for (let i=1; i<=n; i++)
        tot *=i
    return tot
}

const factorial2 = (n) =>{
    if (n === 0)
        return 1;
    else
        return n*factorial2(n-1);
}

const fibonacci = (n) =>{
    if (n === 0)
        return 0
    else if (n === 1)
        return 1
    else
        return fibonacci(n-1) + fibonacci(n-2)
}
