# Table de vérité de XOR (OU exclusif)

## Explication de l'opération XOR : 

La fonction OU exclusif, souvent appelée XOR (eXclusive OR) ou disjonction exclusive, ou encore ⊻ en algèbre relationnelle, est un opérateur logique de l'algèbre de Boole. À deux opérandes, qui peuvent avoir chacun la valeur VRAI ou FAUX, il associe un résultat qui a lui-même la valeur VRAI seulement si les deux opérandes ont des valeurs distinctes.

Cet opérateur est très utilisé en électronique, en informatique, et aussi en cryptographie du fait de ses propriétés intéressantes.

Son symbole est traditionnellement un signe plus dans un cercle : « ⊕ »

### **Table de vérité XOR Classique** :

| a       | b       | a `XOR` b |
| ------- | ------- | ---------- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### **Table de vérité XOR JavaScript** :

| a       | b       | a `^` b |
| ------- | ------- | ---------- |
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | False |


### **Exemple** :

```js
let a = 5;        // 00000000000000000000000000000101
let b = 3;        // 00000000000000000000000000000011

console.log(a ^ b); // 00000000000000000000000000000110
// expected output: 6 '''
```
