// var d = new Date();
// var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
// console.log(date);

// function getDate(date) {
//     console.log(`Bonjour, nous sommes le ${date}`)
// }

// getDate(date)

// Correction

let date = new Date();
function showDate(date) {
    console.log(`Bonjour, nous sommes le ${date}`)
}

showDate(Date)
showDate(new Date('2020/05/28'))
showDate()