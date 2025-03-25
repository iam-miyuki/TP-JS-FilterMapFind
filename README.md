# Exercices sur les méthodes ``filter``, ``map`` et ``find``
**Exercices avec ``filter``** 

1. Nombres pairs : 
- Crée un tableau contenant des nombres entiers.
- Utilise ``filter`` pour créer un nouveau tableau contenant uniquement les nombres pairs.

2. Mots longs :

- Crée un tableau de chaînes de caractères (mots)
- Utilise ``filter`` pour obtenir un tableau contenant uniquement les mots ayant plus de 5 lettres.

3. Personnes majeures :

- Crée un tableau d'objets, chaque objet représentant une personne avec des propriétés
nom et âge
- Utilise ``filter`` pour obtenir un tableau contenant uniquement les personnes majeures (âge >= 18).
---
**Exercices avec ``map``**

1. Doubler les nombres :
- Crée un tableau de nombres entiers
- Utilise ``map`` pour créer un nouveau tableau où chaque nombre est doublé.
2. Longueur des mots :
- Crée un tableau de chaînes de caractères (mots).
- Utilise ``map`` pour obtenir un tableau contenant la longueur de chaque mot.
3. Convertir des températures :
- Crée un tableau de températures en Celsius.
- Utilise ``map`` pour convertir ces températures en Fahrenheit (formule : ( F = C*9/5 + 32))
---
**Exercices combinant ``filter`` et ``map``**

1. Nombres pairs doublés :
- Crée un tableau de nombres entiers.
- Utilise ``filter`` obtenir les nombres pairs, puis ``map`` pour doubler ces nombres pairs.
2. Mots longs en majuscules :
- Crée un tableau de chaînes de caractères (mots).
- Utilise ``filter`` obtenir les mots ayant plus de 5 lettres, puis ``map`` pour convertir ces mots en majuscules-
3. Personnes majeures avec salutation :
- Crée un tableau d'objets, chaque objet représentant une personne avec des propriétés
``nom`` et ``âge``
- Utilise ``filter`` obtenir les personnes majeures, puis ``map`` pour ajouter une salutation devant chaque nom (ex.
"Bonjour, [Nom]").
---
**Exercices avec ``find``**
1. Trouver un nombre spécifique :
- Crée un tableau de nombres entiers.
- Utilise ``find`` pour trouver le premier nombre divisible par 5
2. Trouver un mot spécifique :
- Crée un tableau de chaînes de caractères (mots).
- Utilise ``find`` pour trouver le premier mot qui commence par une lettre spécifique (par exemple, "a").
3. Trouver une par nom :
- Crée un tableau d'objets, chaque objet représentant une personne avec des propriétés nom et âge
- Utilise ``find`` pour trouver la première personne dont le nom est "Alice"
4. Trouver un produit en stock :
- Crée un tableau d'objets, chaque objet représentant un produit avec des propriétés nom et quantité 
- Utilise ``find`` pour trouver le premier produit qui a une quantité supérieure à 0.