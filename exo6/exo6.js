const bissextille = (year) =>{ // year est un nombre
    if (year%400 === 0 | (year%4 === 0 && year%100 !== 0))
        return 1;
    else
        return 0;
}       // retourne le nb de jour à ajouter à l'année


const maxDayMonth = (month) => { // month est un nombre entre 1 et 12
    const list31 = [1,3,5,7,8,10,12];
    const list30 = [4,6,9,11];
    if (list30.includes(month))
        return 30;
    else if (list31.includes(month))
        return 31;
    else
        return 28;              // on part du principe que l'année n'est pas bissextille
}


const isValidDate = (date) =>{ //date est une string
    const listDate = date.split('/')
    const day = parseInt(listDate[0]);
    const month = parseInt(listDate[1]);
    const year = parseInt(listDate[2]);
    if (!(year>999 && year<9999))
        return false  
    if (!(month>0 && month<13))
        return false;
    const maxDay = maxDayMonth(month) + bissextille(year);
    if (!(day>0 && day<=maxDay))
        return false
    return true;
}

const isPlaindrome = (text) =>{  // string
    const reverseText = text.split('').reverse().join('');
    return text === reverseText;
}


const isDatePlaindrome = (date) =>{        //date est une string de type '08/12/1999'
    if (isValidDate(date)){
        const dateWithoutSlash = date.replace(/\//g,'')         //on l'écrit sous la forme 08121999
        return isPlaindrome(dateWithoutSlash);
    }
    else
        return false;
}


const getNextPalindrome = (n) =>{   //n est un nombre
    let i=0;
    let today = new Date(), day, month, year, dateString;
    while (i<n){
        day = today.getDate();
        month = today.getMonth()+1;
        year = today.getFullYear();

        if (month<10 && day<10)
            dateString = `0${day}/0${month}/${year}` 
        else if (month>=10 && day<10)
            dateString = `0${day}/${month}/${year}` 
        else if (month<10 && day>=10)
            dateString = `${day}/0${month}/${year}`
        else   
            dateString = `${day}/${month}/${year}`
        
        if (isDatePlaindrome(dateString)){
            i++;
            console.log(dateString);
        }
    today.setDate(today.getDate() +1)   //permet de prendre le jour suivant 
    }
}


