var button = document.querySelector('.btn');
var text = document.querySelector('.color');
var icon = document.querySelector('.fa-clipboard');
function createRandomColor() {
    var choice = "0123456789ABCDEF";
    var answer = "#";
    for (var i = 0; i < 6; i++) {
        answer += choice[Math.floor(Math.random() * 16)];
    }
    return answer;
}
button.addEventListener('click', function () {
    var color = createRandomColor();
    text.innerText = color;
    document.body.style.backgroundColor = color;
});
icon.addEventListener('click', function () {
    console.log('here');
    navigator.clipboard.writeText(text.innerText);
    button.innerText = "Copied!";
    button.style.backgroundColor = "yellow";
    button.style.color = "black";
    setTimeout(function () {
        button.innerText = "Click Me";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    }, 500);
});
