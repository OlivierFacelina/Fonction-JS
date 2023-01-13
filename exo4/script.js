let voyelles = 'Rrrrr';

function getVowels(string) {
    let vowels = 0
    for(letter of string) {
        if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'y')
        vowels += 1;
    }
    return console.log(vowels)
}

getVowels(voyelles)