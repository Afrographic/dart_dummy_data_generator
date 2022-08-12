// renderDummyDataWithParameters(parseFieldsStringToFieldObject(extractFields(`
// class Afro {
//     int idUser;
//     double height;
//     bool isFound;
//     String name;
// }
// `)));

async function dummyLoader() {
    $(".spinnerObject").classList.add("spinner");
    await sleep(1000);
    $(".spinnerObject").classList.remove("spinner");
}

async function generateDummyData() {
    await dummyLoader();
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

function showToolTip() {
    $(".renderButton").addEventListener("mouseover", function (e) {
        $(".toolTip").classList.remove("hide");
        $(".toolTip").classList.add("show");
    })
    $(".renderButton").addEventListener("mouseout", function (e) {
        $(".toolTip").classList.add("hide");
        $(".toolTip").classList.remove("show");
    })
}
showToolTip();



async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}