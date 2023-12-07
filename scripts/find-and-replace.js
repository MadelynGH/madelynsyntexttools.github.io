window.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("paragraph");
    const textToFind = document.getElementById("text-to-find");
    const textToReplace = document.getElementById("text-to-replace");
    const replaceButton = document.getElementById("replace-button");
    const caseSensitiveCheckbox = document.getElementById("case-sensitive-checkbox")
    let caseSensitive;

    let updatedValue;

    replaceButton.addEventListener("click", function() {
        caseSensitive = caseSensitiveCheckbox.checked;
        //updatedValue = (!caseSensitive) ? paragraph.value.toLowerCase().replaceAll(textToFind.value.toLowerCase(), textToReplace.value) : paragraph.value.replaceAll(textToFind.value, textToReplace.value);
        updatedValue = (caseSensitive) ? paragraph.value.replaceAll(textToFind.value, textToReplace.value) : paragraph.value.replaceAll(new RegExp(textToFind.value, "ig"), textToReplace.value);

        paragraph.value = updatedValue;
    });
});