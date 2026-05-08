const inputs = document.querySelectorAll('input[type="range"]');

function actualizar(color) {
    document.body.style.backgroundColor = color;
  
}


inputs.forEach(input => {
    input.oninput = () => {
        const [r, g, b] = Array.from(inputs).map(i => i.value);
        actualizar(`rgb(${r}, ${g}, ${b})`);
    };
});


