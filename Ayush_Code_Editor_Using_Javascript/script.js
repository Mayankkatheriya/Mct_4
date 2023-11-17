function run()
{
    //getting value of all the textarea
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let javascriptcode = document.getElementById("javascript-code").value;
    let output = document.getElementById("output");

    //applying the vale entered in textarea to aoutput window
    output.contentDocument.body.innerHTML = htmlcode + "<style>"+ csscode + "</style>";
    output.contentWindow.evel(javascriptcode);
}

function clearHtml() {

    // Get the reference to the div
    let htmlcode = document.getElementById("html-code");

    // Clear the content of the div
    htmlcode.value = '';
}

function clearCss() {

    // Get the reference to the div
    let csscode = document.getElementById("css-code");

    // Clear the content of the div
    csscode.value = '';
}
function clearJs() {

    // Get the reference to the div
    let javascriptcode = document.getElementById("javascript-code");

    // Clear the content of the div
    javascriptcode.value = '';
}


function copyToClipboard(textareaId) {
    // Get the textarea element
    var textarea = document.getElementById(textareaId);

    // Select the text inside the textarea
    textarea.select();
    
     // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Display the popup
    alert("Copied to clipboard");
  }