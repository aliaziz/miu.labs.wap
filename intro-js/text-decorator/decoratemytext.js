function decorationHandler() {
    let ta = document.getElementById("textarea");

    setInterval(function () {
        let fontSize = getComputedStyle(ta).fontSize;
        ta.style.fontSize = (parseInt(fontSize) + 2) + "px";
    }, 500);
}

function addStyles() {
    let tas = document.getElementById("textarea").style;

    let cb = document.getElementById("bling");
    tas.fontWeight = cb.checked ? "bold" : "";
    tas.color = cb.checked ? "#237c23" : "#000";
    tas.textDecoration = cb.checked ? "underline" : "none";

    document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
}

function toMalkovich() {
    let ta = document.getElementById("textarea");
    let words = ta.value.split(" ");
    ta.value = words.map(word => {
        if (word.length >= 5) return "Malkovich";
        else return word;
    }).toString().replaceAll(",", " ");
}