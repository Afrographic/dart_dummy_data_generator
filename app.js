

// Hosted on Netlify
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

        $("#renderArea").classList.remove("empty");
        $("#renderArea").innerHTML = `${dummyData}`;
        // Show successfull work
        showInfoWidget($(".sucessMessage"))
        // Show the copy button
        showCopyButton();
        // Mobile behavior
        showRenderViewForMobile();
        hideGenerateButton();
    } else {
        $("#renderArea").classList.add("empty");
        showInfoWidget($(".errorBox"));
        hideCopyButton();
    }
}

function showRenderViewForMobile() {
    hideInputViewForMobile();
    $(".renderBoxMobile").classList.remove("disabled");
    $(".renderBoxMobile").classList.add("active");
}

function hideInputViewForMobile() {
    $(".inputBoxMobile").classList.add("disabled");
    $(".inputBoxMobile").classList.remove("active");
}

function showInputViewForMobile() {
    HideRenderViewForMobile();
    $(".inputBoxMobile").classList.remove("disabled");
    $(".inputBoxMobile").classList.add("active");
}

function HideRenderViewForMobile() {
    $(".renderBoxMobile").classList.add("disabled");
    $(".renderBoxMobile").classList.remove("active");
}

function hideGenerateButton() {
    $(".renderButton").classList.add("disabled");
}
function showGenerateButton() {
    $(".renderButton").classList.remove("disabled");
}


function showCopyButton() {
    $(".copyWrapper").classList.remove("disabled");
    $(".copyWrapper").classList.add("active");
}

function hideCopyButton() {
    $(".copyWrapper").classList.add("disabled");
    $(".copyWrapper").classList.remove("active");
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

async function copy() {
    await navigator.clipboard.writeText($("#renderArea").innerText.trim());
    showInfoWidget($(".successCopy"));
}


showToolTip();

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function resetFields() {
    $("#schema").value = '';
    $("#renderArea").innerHTML = '';
    $("#renderArea").classList.add("empty");
    hideCopyButton();
    showInputViewForMobile();
    showGenerateButton();
}

// class Afro { int idUser; double?height; bool isFound; String name; }