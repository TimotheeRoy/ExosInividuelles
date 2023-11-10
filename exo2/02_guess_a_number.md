# 1. Enoncé : Le jeu du devin !

**Objectif** : Faisons un petit jeu où il faut deviner un nombre. Nous allons construire ce jeu étape par étape. N'oublie pas, ce n'est pas une course, chacun avance à son rythme. 😊

**Petit conseil** : Pour chaque nouvelle fonctionnalité, crée une fonction. C'est comme si tu construisais un Lego, pièce par pièce.

Il est possible de faire l'exercice avec uniquement du JavaScript ou de le faire en couplant avec du HTML.

## Étape 1 : Demande un nombre

- Crée une fonction qui demande un nombre à l’utilisateur·rice à l’aide d’un prompteur.
- Stocke sa réponse dans une variable nommée `givenNumber`.

## Étape 2 : Est-ce le bon nombre ?

Pour le moment nous allons considérer que le nombre à deviner est 22.

- Écrie une fonction qui prend en paramètre `givenNumber` et qui se nommera `didIWin()`
    - Si le nombre est plus petit que 22, on affichera à l’utilisateur·rice *“Plus grand”*.
    - Si le nombre est plus grand que 22 on affichera à l’utilisateur·rice *“Plus petit”*.
    - Si le nombre est 22 on affichera *“Bravo ! Vous avez deviné le nombre”.*
    
    L’ordre dans lequel tu écris tes conditions est important, le but est d’exécuter le moins de code possible. Demande-toi ce qu’il faut vérifier en premier.
    
    ⚠️ Attention : le `prompt()` bloque l’exécution de la page HTML et stoppe l’affichage du rendu. Pour afficher des informations à la suite d’un `prompt()`, utilise `alert()`.
    
- Crée une fonction `gamePlay()` qui gérera tes appels de fonctions et la transmission de ta variable d’une fonction à une autre.

## Étape 3

- Désormais la fonction `didIWin()` devra retourner `true` si l’utilisateur·rice a trouvé le chiffre, sinon `false`.
- Dans la fonction `gamePlay()`, si `didIWin()` a retourné `true`, on arrête le jeu. En revanche, si elle a retourné `false`, on redemande un chiffre à l’utilisateur·rice.

## Étape 4 : À deux c'est mieux !

Maintenant, imaginons qu'il y ait deux joueurs 🧑‍🤝‍🧑.

- Crée une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50.
- Le joueur 2 va essayer de le deviner.
- La fonction `didIWin()` doit prendre désormais un second paramètre : le nombre à deviner.
- Reprend la logique des étapes 1, 2 et 3 pour gérer la partie et indiquer au joueur 2 s’il doit continuer à jouer ou s’il a gagné.

## Étape 5 : Donnons des indices

- Afficher l'intervalle (0-50) auquelle notre utilisateur·rice à le droit autour du champ. Quelque chose comme 0 < ? < 50.
- Si l’utilisateur·rice a gagné nous effacerons tout pour afficher notre message de Bravo !
- En revanche, tant que l’utilisateur·rice n’a pas trouvé la bonne réponse, on affichera le nombre de tentatives en cours sur la partie.
- (Avec du HTML) Ajoute un champ `<input>` qui permet à l’utilisateur·rice de rentrer sa proposition de nombre directement dans un champ sur la page et un bouton pour valider.

## Étape 6 : Aide la personne

Si le nombre proposé par l’utilisateur·rice est plus petit que le nombre à deviner, alors tu changeras l'intervalle minimale. 
Ce ne sera plus 10 mais le dernier nombre proposé. 
Attention si le nombre proposé est en dessous de l'intervalle minimal, cela ne sert à rien de le changer.

Exemple : 12 < ? < 45, si le nombre proposé est 10, on ne change pas l'intervalle. Mais on peut afficher une `alert()` pour indiquer que le nombre proposé n’est pas dans l'intervalle.

Même chose si le nombre est supérieur.
