// Lista de todas as cores do HTML
const allColors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
    "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
    "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan",
    "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen",
    "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
    "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray",
    "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite",
    "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo",
    "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral",
    "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon",
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen",
    "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
    "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
    "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive",
    "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
    "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
    "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue",
    "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow",
    "YellowGreen"
];

// Embaralha o vetor de todas as cores
const shuffledColors = allColors.sort(() => Math.random() - 0.5);

// Seleciona um subvetor com pelo menos 10 cores
const selectedColors = shuffledColors.slice(0, 10);

// Exibe as cores selecionadas para o usuário
const colorListContainer = document.getElementById('color-list');
selectedColors.forEach(color => {
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorBox.onclick = () => selectColor(color);

    const colorName = document.createElement('div');
    colorName.className = 'color-name';
    colorName.textContent = color;

    colorBox.appendChild(colorName);
    colorListContainer.appendChild(colorBox);
});

// Cor aleatória escolhida pelo computador
let randomColor;

// Escolhe aleatoriamente a cor do vetor selecionado
randomColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];



// Número máximo de tentativas
const maxAttempts = 3;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('color-guess').value;
    const resultMessage = document.getElementById('result');

    if (attempts < maxAttempts && userGuess.toLowerCase() === randomColor.toLowerCase()) {
        // Se o usuário acertar, muda o background da página
        document.body.style.backgroundColor = randomColor;
        resultMessage.textContent = 'Parabéns! Você acertou!';
    } else {
        attempts++;
        resultMessage.textContent = `Tentativa ${attempts} de ${maxAttempts}. Tente novamente.`;

        if (attempts === maxAttempts) {
            // Se o usuário exceder o número máximo de tentativas, o jogo acaba
            resultMessage.textContent = `Você perdeu! A cor correta era ${randomColor}.`;
            document.body.style.backgroundColor = 'white'; // Altere para a cor padrão, por exemplo, branco.
        }
    }
}
