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
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

