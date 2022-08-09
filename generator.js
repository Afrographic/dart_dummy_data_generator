// Class Schema
/*
InPut

class FlashCardQuestion {
  int idQuestion;
  double question;
  boolean isOnline
  String answer;
}

Ouput

new FlashCardQuestion(
    1,1.5,false,"trueShit"
)

or
FlashCardQuestion {
  idQuestion:1;
  question:1.5;
  isOnline:false;
  String:"trushit";
}

*/

function randomIntGenerator(max) {
    return Math.floor(Math.random() * max);
}
function randomDoubleGenerator() {
    return (Math.random() * 1000).toFixed(2);
}

let wasTrue = true;
function randomBoolGenerator() {
    console.log(wasTrue);
    if (wasTrue) {
        wasTrue = false;
        return false;
    } else {
        wasTrue = false;
        return true;
    }
}

function randomStringGenerator() {
    let alphabet = ['Steve', 'b', 'c', 'Ankh', '2', 'Ankh', '4', '5', '6', '7', '8', '9', 'Afro', 'A', 'Ankh', 'C', 'D', 'E', 'F', 'G', 'Afro', 'I', 'Ankh', 'K', 'L', 'Afro', 'N', 'O', 'P', 'Q', 'Afro', 'e', 'f', 'Afro', 'h', 'i', 'j', 'k', 'l', 'm', 'Afro', 'o', 'Afro', 'q', 'r', 's', 't', 'Ankh', 'v', 'w', 'x', 'Afro', 'S', 'Soft', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let string="";
    for(let i = 0 ; i<=8;i++){
        string+= alphabet[randomIntGenerator(alphabet.length-1)];
    }

    return string;
}

function checkForValidDartClassSchema(dartClassSchema){
    
}