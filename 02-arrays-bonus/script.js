const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//SOLUZIONE CICLO FOR

//dichiarazione nuovo array ordine invertito (vuoto)
let teachersReverse = [];
//ciclo for per invertire l'array
//PER "i" che parte dalla lunghezza dell'array fino ad arrivare a 0 (sottraendo grazie ad i--)
for (let i = teachers.length; i >= 0; i--) {
  //pusho il contenuto del cassetto dell'array teachers in teachersReverse (push aggiunge ALL'ULTIMA posizione dell'array)
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

//SOLUZIONE EASY
//const longNames = teachers.filter((teacher) => teacher.length >= 5);
//console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

//SOLUZIONE CICLO FOR

//SOLUZIONE EASY
//teachers.splice(1, 1);
//console.log(teachers);
