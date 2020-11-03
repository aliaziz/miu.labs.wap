let threadId;
let count = 0;
let isRunning = false;

function toggle() {
    let startElement = document.getElementById("start");
    let stopElement = document.getElementById("stop");
    let boxAnimation = document.getElementById("animation");
    startElement.disabled = !startElement.disabled;
    stopElement.disabled = !stopElement.disabled;
    boxAnimation.disabled = !boxAnimation.disabled;
}

function getSelectedAnimation() {
    let selected = document.getElementById("animation").value;
    return ANIMATIONS[selected];
}

function fontSizeChanged() {
    let fontSelectionDropDown = document.getElementById("fontsize");
    let fontSize = fontSelectionDropDown.value;
    let textarea = document.getElementById("text-area");
    textarea.style.fontSize = fontSize;
}

function runAnimation(selectedAnimation, duration) {
    isRunning = true;
    let textArea = document.getElementById("text-area");
    let animationArray = selectedAnimation.split("=====\n");
    threadId = setInterval(function () {
        textArea.value = animationArray[count];
        if (count === animationArray.length - 1) {
            count = 0;
        } else {
            count++;
        }
    }, duration);
}

function start() {
    toggle();
    let selected = getSelectedAnimation();
    runAnimation(selected, 250);
    fontSizeChanged();
}

function turboSelected() {
    let turboChecker = document.getElementById("turbo");
    let selected = getSelectedAnimation();
    clearInterval(threadId);

    let intervalDuration = (turboChecker.checked ? 50 : 250);
    if (isRunning) {
        runAnimation(selected, intervalDuration);
    }
}

function stop() {
    toggle();
    clearInterval(threadId);
    isRunning = false;
    let textArea = document.getElementById("text-area");
    textArea.value = getSelectedAnimation();
}
