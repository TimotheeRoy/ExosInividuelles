const askName = ()=>{
    let nom = window.prompt('Nom: ');
    let texte = `Bonjour `+ nom;
    document.body.innerHTML += `<h1>${texte} </h1>`;
};
   
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() +1;
    

const askBirthYear = () =>{
    const yearBirth = window.prompt('Annee de naissance: ');
    const monthBirth = window.prompt('Mois de naissance (entre 1 et 12): ');
    if (month<monthBirth){
        const age = year - yearBirth-1;
        document.body.innerHTML += `<h3>vous avez ${age} ans </h3>`;
    }
    else {
        const age = year - yearBirth;
        document.body.innerHTML += `<h3>vous avez ${age} ans </h3>`;
    }
    };   


askName();
askBirthYear();
