
async function dummyLoader() {
    $(".spinnerObject").classList.add("spinner");
    await sleep(500);
    $(".spinnerObject").classList.remove("spinner");
}

async function generateDummyData() {
    $("#renderArea").innerHTML = "";
    await dummyLoader();
    let userInput = $("#schema").value;
    if (validDartClassSchema(userInput)) {
        
        let fieldString = extractFields(userInput);
        let fieldObjects = parseFieldsStringToFieldObject(fieldString);
        let dummyData = renderDummyDataWithParameters(fieldObjects, userInput);
        $("#renderArea").innerHTML = `${dummyData}`;
        // Show successfull work
        showInfoWidget($(".sucessMessage"))
    } else {
        showInfoWidget($(".errorBox"))
    }
}
async function showInfoWidget(infoWidget) {
    infoWidget.classList.remove("disabled");
    infoWidget.classList.add("visible");
    await sleep(2000);
    infoWidget.classList.remove("visible");
    infoWidget.classList.add("disabled");
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

function copy() {
    console.log($("#renderArea").innerText);
}


showToolTip();

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}