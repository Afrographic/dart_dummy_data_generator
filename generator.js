// ===========================
/*

DART DUMMY DATA GENERATOR
@author Afrographix - Pharaon Level - ave Ankh  - Hotep

*/

// ==========================

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
class Field {
    constructor(type, label) {
        this.type = type;
        this.label = label;
    }
}

function init() {

}

function randomIntGenerator(max) {
    return Math.floor(Math.random() * max);
}
function randomDoubleGenerator() {
    return (Math.random() * 1000).toFixed(2);
}

let wasTrue = true;
function randomBoolGenerator() {

    if (wasTrue) {
        wasTrue = false;
        return false;
    } else {
        wasTrue = false;
        return true;
    }
}

function randomStringGenerator() {
    let alphabet = ['Steve', 'b', 'c', 'Ankh', 'Ankh', 'Afro', 'A', 'Ankh', 'C', 'D', 'E', 'F', 'G', 'Afro', 'I', 'Ankh', 'K', 'L', 'Afro', 'N', 'O', 'P', 'Q', 'Afro', 'e', 'f', 'Afro', 'h', 'i', 'j', 'k', 'l', 'm', 'Afro', 'o', 'Afro', 'q', 'r', 's', 't', 'Ankh', 'v', 'w', 'x', 'Afro', 'S', 'Soft', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let string = "";
    for (let i = 0; i <= 8; i++) {
        string += alphabet[randomIntGenerator(alphabet.length - 1)];
    }

    return string;
}

function checkForValidDartClassSchema(dartClassSchema) {
    dartClassSchema = dartClassSchema.trim();
    return /^class\s+[a-zA-Z_]+\s+{\s+((int|double|bool|String)\??\s+[a-zA-Z_0-9]+;\s+)+}\s*/.test(dartClassSchema);
}

function generateRandom(dataType) {
    switch (dataType) {
        case 'int':
            return randomIntGenerator(1000);
        case 'double':
            return randomDoubleGenerator();
        case 'bool':
            return randomBoolGenerator()
        case 'String':
            return randomStringGenerator();
        default:
            return -1;
    }
}

function extractClassName(dartClassSchema) {
    let re = /class\s+([a-zA-Z_]+).*/;
    let m = re.exec(dartClassSchema);
    return m[1];
}

function extractFields(dartClassSchema) {
    console.log("==============");
    console.log("Class Schema");
    console.log(dartClassSchema);
    console.log("==============\n\n");
    dartClassSchema = dartClassSchema.replaceAll(/\s+/g, " ");
    let re = /^class\s+[a-zA-Z_]+\s+{(.*)}\s*/;
    let m = re.exec(dartClassSchema.trim());
    return m[1];
}

function parseFieldsStringToFieldObject(fieldString) {
    let fieldsObjectsArray = [];
    fieldString = fieldString.replaceAll(/\s+/g, " ");
    fieldString = fieldString.split(";");
    fieldString.pop();

    fieldString.forEach(element => {
        fieldsObjectsArray.push(convertToFieldObject(element))
    });

    return fieldsObjectsArray;
}

function convertToFieldObject(fieldStringItem) {
    fieldStringItem = fieldStringItem.trim().split(" ");
    return new Field(fieldStringItem[0], fieldStringItem[1]);
}

function renderDummyDataWithParameters(fieldsObjectsArray) {
    let className = extractClassName("class Afro {int idUser;double height;bool isFound;String name;}");
    let renderer = `${className} ${generateRandom('String').toLowerCase()} = new ${className}(`;
    fieldsObjectsArray.forEach(fieldObject => {
        renderer += `\n ${fieldObject.label} : ${fieldObject.type == "String" ? `"` : ``}${generateRandom(fieldObject.type)}${fieldObject.type == "String" ? `"` : ``};`
    });
    renderer += `\n);`;

    console.log("==============");
    console.log("Dummy Data\n");
    console.log(renderer);
    console.log("==============");
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}



renderDummyDataWithParameters(parseFieldsStringToFieldObject(extractFields(`
class Afro {
    int idUser;
    double height;
    bool isFound;
    String name;
}
`)));