// Iteration 1: Names and Input
let hacker1 = "Ricardo";
console.log (`The driver's name is ${hacker1}.`);

let hacker2 = "Lukas"; 
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}

// Iteration 3: Loops
//3.1
let nameUppercased = "";
for (let i=0; i < hacker1.length; i++) {
    nameUppercased += hacker1[i].toUpperCase() + " ";
}
console.log(nameUppercased);

//3.2
let nameReversed = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
    nameReversed += hacker2[j];
}
console.log(nameReversed);

//3.3
for (let a = 0; a < 12; a++) {
    if (hacker1[a] < hacker2[a]) {
        console.log("The driver's name goes first.");
        break;
    }
    else if (hacker1[a] > hacker2[a]) {
        console.log("Yo, the navigator goes first, definitely.");
        break;
    }
    else if (hacker1[a] === hacker2[a])  {
        continue;
    }
    else if (hacker1 === hacker2) {
      console.log ("What?! You both have the same name?");
      break;
    }
}
//Bonus 
const longText = `Donec vel lectus sit amet mauris laoreet volutpat in nec lorem. Maecenas ultrices ut diam eget auctor. 
Suspendisse congue sed odio commodo facilisis. Proin congue scelerisque condimentum. 
Integer semper, urna commodo pellentesque cursus, augue lorem tincidunt sapien, molestie placerat diam neque sed lorem. 
Proin velit ex, tempus et sollicitudin ac, ullamcorper porta lorem. 
Aliquam viverra nunc est, in lacinia purus facilisis vitae. 
Nulla non pulvinar eros. Ut ac ullamcorper nisl. 
Cras sagittis bibendum turpis sed egestas. 
Etiam pellentesque mi augue, id sodales purus tincidunt sed. 
Donec vitae fermentum purus. Duis quis nisl et ipsum pharetra accumsan eget elementum elit. 
Duis porttitor viverra lacus vel finibus. Ut tristique pellentesque ex, eget ultricies odio cursus eu. 
Nulla nec tellus in lectus pharetra fringilla. 
Duis laoreet, urna lobortis cursus euismod, risus odio lobortis nunc, interdum euismod quam erat a ex. 
Morbi tincidunt non metus at tempor. Quisque interdum nisl mi. Nulla fringilla purus quis turpis fermentum, nec congue dui rhoncus. 
Suspendisse at est bibendum, hendrerit lacus lacinia, elementum dolor. Nullam nec finibus urna, ac dignissim ligula. 
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vel nulla eget tellus auctor tempus. 
Morbi vehicula dolor quam, rhoncus viverra ipsum consectetur vitae. Ut eu nunc neque. In tincidunt ut nisl ac elementum. 
Proin id tellus vel quam finibus varius eget sed odio. Nam ut laoreet nibh. Nulla at quam sit amet velit pretium blandit. 
Curabitur lacinia mauris non nisi commodo auctor. Sed condimentum commodo tempus. Vestibulum sit amet ornare ipsum, id suscipit odio. 
Pellentesque blandit tortor neque, quis vestibulum ligula sollicitudin vitae.`

let wordCount = 0
for (b = 0; b < longText.length; b++) {
    if (longText[b] === " ") {
        wordCount += 1;
    }
}
let fixedWordCount = wordCount + 1;
console.log(fixedWordCount);


function checkPalindrom (phraseToCheck){
    let palindromeReversed = ""
    for (let c = phraseToCheck.length - 1; c >= 0; c--) {
        if (phraseToCheck[c] === " ") {
            continue;
        }
        else {
            palindromeReversed += phraseToCheck[c];
        }
    }

    let palindromeNoSpaceNoComma1 = "";
    for (d = 0; d < phraseToCheck.length; d++) {
        if (phraseToCheck[d] === " " || phraseToCheck[d] === ",") {
            continue;
        }
        else (palindromeNoSpaceNoComma1 += phraseToCheck[d].toLowerCase());
    }

    let palindromeNoSpaceNoComma2 = "";
    for (d = 0; d < palindromeReversed.length; d++) {
        if (palindromeReversed[d] === " " || palindromeReversed[d] === ",") {
            continue;
        }
        else (palindromeNoSpaceNoComma2 += palindromeReversed[d].toLowerCase());
    }

    if (palindromeNoSpaceNoComma1 === palindromeNoSpaceNoComma2) {
        console.log(`${phraseToCheck} is a Palindrome`);
    }
    else {
        console.log(`${phraseToCheck} is not a Palindrome`);
    }
}

phrase1 = "taco cat";

checkPalindrom (phrase1);

let phrase2 = "Amor, Roma";

checkPalindrom (phrase2);

let phrase3 ="Girafarig"
checkPalindrom (phrase3);

