# 1. Énoncé

Pour cet exercice, nous allons choisir deux langages de programmation de votre choix et nous amuser à comparer leurs performances. Notre indicateur sera le temps d'execution d'une même opération sur les deux langages.

Les morceaux de code écrit dans l'énoncé sont en pseudo code.

## Étape 0

Choisir deux langages.
Chaque étape sera donc à écrire dans les deux langages choisis.

## Étape 1

Pour chacun des langages, écrire une fonction `now()` qui permet de retourner l'heure, de manière la plus précise possible.
Nous utiliserons cette fonction pour calculer le temps d'exécution avec le processus suivant :

```
temps_inital = now()
// ...
// execution du code
// ...
temps_final = now()
temps_ecoule = temps_final - temps_inital
print("L'éxécution a duré " + temps_ecoule)
```

## Étape 2

Maintenant que nous avons un système de mesure, on va pouvoir s'amuser un peu !
Commencez par calculer le temps que prend l'appel d'une fonction `add()` qui addition ses deux paramètres. Encadrez l'appel de la fonction par notre system de calcul de temps et comparez les résultats.

```
resultat = add(3, 4) // 7

```

## Étape 3

À présent, nous allons appliquer le même processus avec des fonctions plus complexes. Écrivez une fonction `add_array()` qui parcours un tableau pour additionner chacun de ses membre à un entier donné en paramètre. Encore une fois: comparez les resultats.

```
tableau = add_array([3, 4, 1, 10], 1) // [4, 5, 2, 11]

```

## Étape 4

Pour finir, écrire une fonction recursive qui calcule le factoriel d'un nombre.
Rappel: le factoriel de 5 est 1*2*3*4*5.
Comme pour les précents, comparez les resultats des temps d'executions.