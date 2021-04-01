var button = document.querySelector('.btn');
var text = document.querySelector('.color');
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
