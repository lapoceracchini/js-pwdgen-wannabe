// CONSEGNA:

// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23

  
// SOLUZIONE:

const name = prompt("nome")
console.log(name);

const surName = prompt("cognome")
console.log(surName);

const color = prompt("colore preferitto")
console.log(color);

const age = 23;

const generator = name + surName + color + age
console.log(generator);

document.getElementById('password').innerHTML = generator;
