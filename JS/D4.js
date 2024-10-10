/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("____________________ESERCIZIO 1_________________");
function area(l1, l2) {
  return l1 * l2;
}

console.log(area(5, 16));

/* ESERCIZIO 2


 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("____________________ESERCIZIO 2_________________");
function crazytSum(num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
}
console.log("valori asseganti: 5 e 8 deve risultare la somma dei due", crazytSum(5, 8));
console.log("assegnato 3 ad entrambi (3+3)*3", crazytSum(3, 3));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("____________________ESERCIZIO 3_________________");
function crazyDiff(num1, num2 = 19) {
  if (num1 > 19) {
    return Math.abs((num1 - num2) * 3);
  } else {
    return Math.abs(num1 - num2);
  }
}

console.log("numero fornito < di 19", crazyDiff(5));
console.log("numero fornito > di 19", crazyDiff(21));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("____________________ESERCIZIO 4_________________");

function boundary(n) {
  if (Number.isInteger(n) && n > 20 && n <= 100) {
    return true;
  } else if ((n = 400)) return true;
}

console.log("valori compresi tra 20 e 100", boundary(65));
console.log("valore 400", boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("____________________ESERCIZIO 5_________________");

/*let str1 = "Epicode is an awesome school";

let str2 = "epicode is an awesome school";
let str3 = "is an awesome school";
console.log(typeof str1);*/

function epify(param1) {
  if (typeof param1 === "string" && param1.startsWith("epicode")) {
    return param1;
  } else {
    return "Epicode" + "" + param1;
  }
}

console.log(epify("Epicode is an awesome school"));
console.log(epify("epicode is an awesome school"));
console.log(epify("is an awesome school"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("____________________ESERCIZIO 6_________________");

function check3and7(posNum) {
  if ((Math.abs(posNum) && posNum % 3) || posNum % 7) {
    return posNum;
  }
}

console.log(check3and7(14));
console.log(check3and7(9));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("____________________ESERCIZIO 7_________________");

function reverseString(str) {
  if (typeof str === "string") {
    return str.split("").reverse().join("");
  }
}

console.log(reverseString("EPICODE"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("____________________ESERCIZIO 8_________________");

function upperFirst(str2) {
  if (typeof str2 === "string") {
    return str2.split(" ").str2.toUpperCase(str2.startsWith("i", "a", "s"));
  }
}
console.log(upperFirst("Epicode is an awesome school"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
