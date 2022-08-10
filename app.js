// renderDummyDataWithParameters(parseFieldsStringToFieldObject(extractFields(`
// class Afro {
//     int idUser;
//     double height;
//     bool isFound;
//     String name;
// }
// `)));

function generateDummyData() {
    let userInput = $("#schema").value;
    if (validDartClassSchema(userInput)) {
        let fieldString = extractFields(userInput);
        let fieldObjects = parseFieldsStringToFieldObject(fieldString);
        let dummyData = renderDummyDataWithParameters(fieldObjects, userInput);
        $("#renderArea").innerHTML += `${dummyData} <br><br>`;
    } else {
        alert("Invalid class definition")
    }
}