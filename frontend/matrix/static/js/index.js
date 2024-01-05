// холст для работы из html
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// настраиваем ширину и высоту холста на основе полученной ширины и высоты окна
const canvasWidth = (canvas.width = window.innerWidth);
const canvasHeight = (canvas.height = window.innerHeight);

console.log("AAA")

const str = "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я";
const matrix = str.split("");

let font_block = 12;
let col = canvasWidth / font_block;

let row = [];
for (let i = 0; i < col; i++) row[i] = canvasHeight;


// получение случайного числа (в диапазоне min..max)
function randint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function draw() {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#0f0";
    ctx.font = font_block + "px system-ui";

    let txt;
    for (let i = 0; i < row.length; i++) {
        txt = matrix[randint(0, matrix.length)];
        ctx.fillText(txt, i * font_block, row[i] * font_block);

        if (row[i] * font_block > canvasHeight && Math.random() > 0.975) {
            row[i] = 0
        };
        row[i]++;
    }
}

setInterval(draw, 50);

window.addEventListener("resize", () => location.reload());
