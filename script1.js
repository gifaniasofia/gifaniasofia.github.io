let idx = 0;
slides();

function slides() {
    let slide = document.getElementsByClassName("slides");
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    idx++;
    if (idx > slide.length) {idx = 1}
    slide[idx-1].style.display = "block";
    setTimeout(slides, 3000);
}

function openForm() {
    document.getElementById("chatForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("chatForm").style.display = "none";
}

function IGWin() {
    let IGWindow = window.open("https://www.instagram.com", "_blank", "width=500, height=500");
}

function FBWin() {
    let FBWindow = window.open("https://www.facebook.com", "_blank", "width=500, height=500");
}

function TWWin() {
    let TWWindow = window.open("https://www.twitter.com", "_blank", "width=500, height=500");
}

function GMWin() {
    let GMWindow = window.open("https://www.gmail.com", "_blank", "width=500, height=500");
}

