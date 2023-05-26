const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom_button");
const customText = document.getElementById("custom_text");

//#region upload files
realFileBtn.onchange = function(e) {
    const img = new Image();
    img.onload = draw; // Draw after loading
    img.onerror = failed; // If fails
    img.src = URL.createObjectURL(this.files[0]);
};

function draw() {
    var canvas = document.getElementById('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0,0);
    scan();
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
//#endregion

// Image Scanning
function scan() {
    // Referencing the Canvas
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    // RGB Values
    var rgbList = []

    // iterating through each pixel of image
    for (var i = 0; i < data.length; i += 4)
    {
        // Getting Idx for RGB Data
        var redIndex = data[i];
        var greenIndex = data[i + 1];
        var blueIndex = data[i + 2];
        
        // Setting up RGB Color Tuples
        var red = data[redIndex];
        var green = data[greenIndex];
        var blue = data[blueIndex];

        // Creating rgb tuple
        var tuple = '(' + red + ',' + green + ',' + blue + ')'
        rgbList.push(tuple);
    }
    document.getElementById('color_data_field').value = rgbList;

    for (var j = 0; j < rgbList.length; j++)
    {
        var x = j % canvas.width;
        var y = Math.floor(j / canvas.width);
        var rgbValue = rgbList[j];

        ctx.fillStyle = 'rgb' + rgbValue;
        ctx.fillRect(x,y,1,1);
    }
}
