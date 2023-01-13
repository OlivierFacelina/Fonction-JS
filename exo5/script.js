// let firstDate = new Date().getFullYear();
// let secondDate = 2022;

// let getBisextile = (firstDate, secondDate) => {
//     let Bisextile = 0;
//     for(i = firstDate; i <= secondDate; i++) {
//         if((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)); 
//         Bisextile += 1
//     }
//     return console.log(getBisextile);
// }

// getBisextile(firstDate, secondDate);

let dateStart = new Date().getFullYear(), dateEnd = Number(prompt("Donnez une autre date :"))
let bySextil = (dateStart, dateEnd) => {
    let nbBySextil = 0
    if (dateStart < dateEnd) {
        for (i = dateStart; i <= dateEnd; i++) {
            if ((i % 400) == 0 || (i % 100) != 0 && (i % 4) == 0)
            nbBySextil++
        }
    }
    else {
        for (i = dateEnd; i <= dateStart; i++) {
            if ((i % 400) == 0 || (i % 100) != 0 && (i % 4) == 0)
            nbBySextil++
        }
    }
    console.log(`Nombre d'année(s) bysextile entre ${dateStart} et ${dateEnd} est : ${nbBySextil}`)
}

bySextil(dateStart, dateEnd)