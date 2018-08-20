(function putYear () {
    var date = new Date();
    document.getElementById('year').innerHTML = date.getFullYear();
})();

function copyToClipboard(element) {
    /* Get the text to be copied */
    var str = element.innerHTML;

    /* Display the input element */
    document.getElementById("inputCopy").style.display = 'block';

    /* Put the text inside input */
    document.getElementById("inputCopy").value = str;

    /* Get the text field */
    var copyTextInput = document.getElementById("inputCopy");

    /* Select the text field */
    copyTextInput.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Hide the input element */
    document.getElementById("inputCopy").style.display = 'none';

    /* Alert the copied text */
    alert("Text copied to clipboard");
}