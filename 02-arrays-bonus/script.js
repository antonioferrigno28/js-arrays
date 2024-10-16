const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

//CONSOLE LOG AGGIUNTO DA ME PER VEDERE L'ARRAY INIZIALE
console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//SOLUZIONE CICLO FOR

//dichiarazione nuovo array ordine invertito (vuoto)
let teachersReverse = [];
//ciclo for per invertire l'array
//PER "i" che parte dalla lunghezza dell'array MENO UNO (per matchare l'indice) fino ad arrivare a 0 (sottraendo grazie ad i--)
for (let i = teachers.length - 1; i >= 0; i--) {
  //pusho il contenuto del cassetto ATTUALE dell'array teachers in teachersReverse (push aggiunge ALL'ULTIMA posizione dell'array)
  teachersReverse.push(teachers[i]);
}
//stampo l'array invertito
console.log(teachersReverse);

//SOLUZIONE EASY
//const reversedTeachers = teachers.reverse();
//console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

//SOLUZIONE CICLO FOR

//dichiarazione nuovo array longNames (vuoto)
let longNames = [];
//ciclo for per filtrare i nomi che hanno una lunghezza maggiore o uguale a 5
//PER "i" che parte da 0 fino ad arrivare all'INDICE MASSIMO (MINORE di lunghezza array OPPURE uguale alunghezza array - 1)
for (let i = 0; i < teachers.length; i++) {
  //controllo se il nome ha una lunghezza maggiore o uguale a 5
  if (teachers[i].length >= 5) {
    //SE si, pusho il contenuto del cassetto dell'array teachers in longNames (push aggiunge ALL'ULTIMA posizione dell'array)
    longNames.push(teachers[i]);
  }
}
//stampo l'array filtrato
console.log(longNames);

//SOLUZIONE EASY
//const longNames = teachers.filter((teacher) => teacher.length >= 5);
//console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

//SOLUZIONE CICLO FOR
//PER "i" che parte da 0 fino ad arrivare all'INDICE MASSIMO (MINORE di lunghezza array OPPURE uguale alunghezza array - 1)
for (i = 0; i < teachers.length; i++) {
  //SE il contenuto del cassetto è "Ed"
  if (teachers[i] === "Ed") {
    //Rimuovi il cassetto corrente (splice(i,1)=parti dalla posizione i e rimuovi un cassetto )
    teachers.splice(i, 1);
  }
}
//Stampa il nuovo array senza "Ed"
console.log(teachers);

//SOLUZIONE EASY
//Sapendo che Ed si trova al secondo posto dell'array
//Parti da indice 1 e rimuovi un cassetto
//teachers.splice(1, 1);
//Stampa il nuovo array
//console.log(teachers);

//OPPURE
//Creo un nuovo array filteredTeachers che contiene il risultato di .filter dell'array teachers
//La funzione viene chiamata per ogni elemento dell'array teachers
//const filteredTeachers = teachers.filter(function (teacher) {
//Se il nome dell'insegnante (teacher) NON è "Ed" allora l'elemento viene aggiunto all'array
//return teacher !== "Ed";
//});
//Stampa array filtrato
//console.log(filteredTeachers);
