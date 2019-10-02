function download(filename, text) {

    var element = document.createElement('a');
    
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

window.onload = () => {

    var button = document.getElementById("book__button");

    button.addEventListener("click", () => {
        var text = document.getElementById('book__content').innerText;
        var filename = "teste.txt";

        download(filename, text);

    },false );
};