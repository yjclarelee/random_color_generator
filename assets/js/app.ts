
let button: HTMLButtonElement = document.querySelector('.btn')!;
let text: HTMLSpanElement = document.querySelector('.color')!;
let icon: HTMLBaseElement = document.querySelector('.fa-clipboard')!;

function createRandomColor(): string {
    let choice: string = "0123456789ABCDEF";
    let answer: string = "#";
    for (let i: number = 0; i < 6; i++) {
        answer += choice[Math.floor(Math.random() * 16)]
    }
    return answer;
}

button.addEventListener('click', function () {
    let color: string = createRandomColor();
    text.innerText = color;
    document.body.style.backgroundColor = color;
})

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
})
