const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom_button");
const customText = document.getElementById("custom_text");

realFileBtn.onchange = function(e) {
    const img = new Image();
    img.onload = draw;
    img.onerror = failed;
    img.src = URL.createObjectURL(this.files[0]);
};

function draw() {
    var canvas = document.getElementById('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0,0);
}

function failed() {
    console.error("The provided file couldn't be loaded as an Image media");
}

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value)
    {
        customText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
    else
    {
        customText.innerHTML = "No file chosen, yet.";
    }
});