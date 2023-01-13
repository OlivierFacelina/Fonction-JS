// // On déclare le tableau

// function getArray() {
//     let array = []
//     // Boucle pour dire que les nombres doivent être compris entre 0 et 99
//     while (array.length < 8) {
//         let number = Math.floor(Math.random() * 100);
//         if (!array.includes(number)) {
//         array.push(number);
//         }
//     }
//     return array;
// }

// console.log(getArray())

function getArray() {
    let map = new Set()
    while (map.size < 7) {
       let number = Math.floor(Math.random() * 10);
       map.add(number)
    } 
    return map
}

console.log(getArray())