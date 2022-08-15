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
  bool isOnline;
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

function randomBoolGenerator() {
    let date = new Date();
    let ts = date.valueOf();
    return ts % 2 == 0;
}

function randomStringGenerator() {
    let alphabet = ['Steve', 'b', 'c', 'Ankh', 'Ankh', 'Afro', 'A', 'Ankh', 'C', 'D', 'E', 'F', 'G', 'Afro', 'I', 'Ankh', 'K', 'L', 'Afro', 'N', 'O', 'P', 'Q', 'Afro', 'e', 'f', 'Afro', 'h', 'i', 'j', 'k', 'l', 'm', 'Afro', 'o', 'Afro', 'q', 'r', 's', 't', 'Ankh', 'v', 'w', 'x', 'Afro', 'S', 'Soft', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let string = "";
    for (let i = 0; i <= 8; i++) {
        string += alphabet[randomIntGenerator(alphabet.length - 1)];
    }

    return `"${string}"`;
}

function validDartClassSchema(dartClassSchema) {
    dartClassSchema = dartClassSchema.trim();
    return /^(class|Class)\s+[a-zA-Z_]+\s*{\s+((int|double|bool|String)\??\s+[a-zA-Z_0-9]+;\s*)+\s*}\s*/.test(dartClassSchema);
}

function generateRandom(dataType) {
    switch (dataType) {
        case 'int':
            return randomIntGenerator(1000);
        case 'int?':
            return randomIntGenerator(1000);
        case 'double':
            return randomDoubleGenerator();
        case 'double?':
            return randomDoubleGenerator();
        case 'bool':
            return randomBoolGenerator()
        case 'bool?':
            return randomBoolGenerator()
        case 'String':
            return randomStringGenerator();
        case 'String?':
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
    dartClassSchema = addCloseAccoladeifWasNotGiven(dartClassSchema);
    dartClassSchema = dartClassSchema.replaceAll(/\s+/g, " ");
    let re = /^class\s+[a-zA-Z_]+\s*{(.*)}\s*/;
    let m = re.exec(dartClassSchema.trim());
    return m[1];
}

function addCloseAccoladeifWasNotGiven(schema) {
    if (schema.includes("}")) {
        return schema;
    }
    schema += '}';
    return schema;
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

function renderDummyDataWithParameters(fieldsObjectsArray, classSchema) {
    let className = extractClassName(classSchema);
    let renderer = `<span class='className'>${className}</span> <span class='objectName'>${getDummyClassName()} </span>= new  <span class='className'>${className}(</span><br>`;
    fieldsObjectsArray.forEach(fieldObject => {
        renderer += `
        <span class='fieldItem'>
             <span class='fieldName'>${fieldObject.label} </span>:<span class="fieldValue">${generateRandom(fieldObject.type)}</span>,
        </span>
        <br>`
    });
    renderer += `<span class='lastParentheses'>)</span><span class='lastSemiColon'>;</span>`;

    return renderer;
}

function getDummyClassName() {
    let name = generateRandom('String').toLowerCase();
    return name.replaceAll(/"/g, '').toLowerCase();
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}



