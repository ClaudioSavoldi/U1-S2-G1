// sono un foglio collegato all`HTMl tramite <script src>
// uso un foglio separato per separare le responsabilità, posso usare piu file js: un per le regole comuni a tutti gli html  e uno per quelle più specifiche
console.log("sono un testo su un file esterno");

// alert crea un pop up bloccante che impedisce il proseguimetno dell`esecuzione finchè non viene chiuso
// alert("sono un avviso bloccante"); l`ho bloccato per evitare di chiuderlo ogni volta
console.log("mi vedrai solo dopo aver chiuso il messaggio bloccante");

// chiedere all`utente un dato, sempre in maniera bloccate,  meglio usare un form
// aggiungendo il console.log mi permette di vedere l`output dopo il popup`
// console.log(prompt("inserisci il tuo nome"));

// chiedere conferma in maniera bloccante, per scegliere una direzione true o false
// console.log(confirm("sei sicuro di voler procedere?"));

// Le variabili
// servono come contenitore di valore che memorizza un dato ricavato da un processo di una o più operazioni, cosi da utilizzarlo successivamente
//  ("claudio") questa cosa in js scompare instantaneamente quando processata

let myvariable;
// questa riga sopra defisnisce una variabile vuota chiamata, in questo caso myvariable
console.log(myvariable);

// assegnamo un valore a una qualsiasi variabile dichiarata con let
myvariable = "flour";

// output
console.log(myvariable);

// i contenitori sono plasmabili nel tempo
myvariable = "eggs";
console.log(myvariable);

// facciamo un`operazione tra variabili
let mynum = 50;
console.log(mynum);

let fakenum = "50";
console.log(fakenum);

let annum = 10 + 5;
console.log(annum);

console.log("__________________________________________");

let sum = mynum - annum;

// questa operazione impossibile risponde not a number
let impsum = mynum - myvariable;
console.log(impsum);

// const mi converto la variabile nella tipologia che uso per le operazioni
const convertandsum = fakenum - 20;
console.log("convertito e sommato", convertandsum);

// tipologie di valori
// string----"claudio" "flour"....
// number---- 5,7,8,9, -10, 0.5, NaN
// boolean----true or false
// undefined----asssenza di valore generica assegnata a una var vuota
// null----assenza di valore intenzionale

// tipi di dati strutturali
// array----liste di valori
// object----modelli di entità più complesse
// funzioni---- pacchetti di istruzioni ripetibili

// come chiedere a js di mostrarci l`effettivo tipo del dato contenuto in una variabile? typeof
console.log("tipo reale di fake num è:", typeof fakenum);

// concatenazione delle stringhe, ovvero unire le stringhe
let word1 = "ciao!";
let word2 = "Come state?";
let word3 = "Spero bene";
let combined123 = word1 + " " + word2 + " " + word3;
console.log(combined123);
//  metodo alternativo con spazi inclusi
let combinetempl = `${word1} ${word2} ${word3}`;
console.log(combinetempl);

// costanti, da usare preferibilmente sempre se possibile
const epicodeUrl = "https:///www.epicode.com";
const PI = 3.14;
// non posso riassegnare un valore a posteriori

// operatori
// = ---- assegnazione
// + ---- somma o concatenazione
// - ---- sottrazione
// * ---- moltiplicazione
// / ---- divisione
// % ---- modul9o, ritorna il resto di una divisione
console.log(18 % 4);

// += --- significa N=N+numero

// === ---- comparazione di tipo e valore, risponde sempre booleano
// != ----- disuguaglianza
// !== ----disuguaglianza stretta

console.log("18 è uguale a `18`? ", 18 == "18");
console.log("18 è  strettamente uguale a `18`? ", 18 === "18");

console.log("18 è diverso a `18`? ", 18 != "18");
console.log("18 è  strettamente diverso a `18`? ", 18 !== "18");

// > ---- maggiore
// < ---- minore
// >= ---- maggiore uguale
// <= ---- minore uguale

console.log("8 è minore di 10", 8 < 10);
console.log("8 è minore o uguale a 8", 8 <= 8);

// and && ---- tutte le operazioni sono true singolarmente allora true
// or || ---- almeno una delle operazioni deve essere true allora true
// not ! ---- inverte il risultato

const name = "claudio";
const height = 180;
const eyeColor = "brown";
const age = 23;

console.log(name === "stefano" && height > 160 && eyecolor === "brown" && age >= 18);

console.log(name === "stefano" || height > 160 || eyecolor === "brown");

console.log( eyecolor ! "blue"||eyecolor ! "green"|| eyecolor ! "brown");