const fontSizeControl = document.getElementById('font-size-control');
const textElem = document.getElementById('text');

fontSizeControl.addEventListener( 'input', function () {
    textElem.style.fontSize = fontSizeControl.value + 'px';
});