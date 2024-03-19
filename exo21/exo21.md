# 1. Enoncé

Cet exercice propose une approche "découverte" des expressions régulières.
Il ne s'agira donc pas là d'un exercice conventionnel qui reprendrait l'aspect challenge technique en mettant l'accent sur de l'algorithmie.

Au fil des étapes de l'exercice, vous aurez l'occasion de comprendre les mécanismes des regexp et la manière dont les utiliser. Nous utiliserons donc le javascript comme langage de programmation pour employer les expression produites au fil des étapes par pure convinience. Il vous est tout à fait possible de travailler avec un autre langage ou d'aller sur des application web tel que https://regex101.com/.

## Étape 0 : Définition et usages

Les expression régulière sont un outil qui permet retrouver des schémas dans un chaine de caractère.
Les cas d'usage des plus fréquents sont la verification et validation de saisie utilisateurs, ainsi que la recherche de tèrmes spécifiques dans du texte.
La syntaxe des regexp (ou regex) est connue pour sa complexité à la lecture mais les regex sont de puissants alliés en tant que developpeu.se.r.
Les regex ne sont pas spécifiques à un langage et sont facile à utiliser une fois l'expression écrite.

Comme expliqué au dessus, nous allons ici travailler en JS.
Pour écrire une expression, la syntaxe est la suivante :

```
const exp = /<ma regex>/

```

On écrit une regex entre deux slash "/" et on peut la stocker dans une variable.
On peut ensuite l'appliquer à une string avec la methode `match` :

```
const res = "une chaine de char".match(exp)

```

## Étape 1 : La chaine exacte ...

Pour commencer, écrire l'expression pour retrouver une suite spécifique.
Dans la chaine suivante :

```
const str = "J'utilise les expressions regulière pour retrouver des schémas de text au sein d'une chaine de caractères."

```

Trouver l'expression qui renvoie le nombre de caractère "de".
Le code devra ressembler à :

```
const exp = /<ma regex>/
console.log(str.match(exp).length)

```

Attention, pour qu'une expression retourne toutes les occurences d'un resultat, assrez-vous d'utiliser l'opérateur "g" (pour "global"), comme suit : `/<ma regex>/g`
Le resultat attendu est 2.

## Étape 2 : ... ou une autre ...

En partant du resultat optenu précédement, ajouter un opérateur logique OR (|) pour avoir dans le même résultat le nombre articles "de" et "des".

Le resultat attendu est 3.

## Étape 3 : ... et encore une autre !

On monte d'un cran avec les opérateur optionnels. Utiliser un "?" pour, avec la même expression, récuperer le nombre de "de", "des" et "les".

Le resultat attendu est 4.

## Étape 4 : Comptons les caractères

Écrire la regex qui retourne le nombre de caractères alphabétiques dans la chaine.

Le resulat attendu est 85.

## Étape 5 : Ainsi que les caractères spéciaux

Écrire l'expression qui renvoie tous les caractères spéciaux présents dans la phrase (ponctuation et accents).

La resultat attendu est 6.