const str =
    "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères.";
// const regex = /\b(de|d?l?es)\b/g;
// const regex = /[a-z]/gi
const regex = /[^a-z\s]/gi
console.log(str.match(regex).length);

