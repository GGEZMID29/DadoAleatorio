document.getElementById('rollButton').addEventListener('click', function() {
    // Generar un número aleatorio entre 1 y 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Rotar el dado
    const dice = document.getElementById('dice');
    const rotations = {
        1: 'rotateX(0deg) rotateY(0deg)',
        2: 'rotateX(0deg) rotateY(-90deg)',
        3: 'rotateX(0deg) rotateY(180deg)',
        4: 'rotateX(0deg) rotateY(90deg)',
        5: 'rotateX(-90deg) rotateY(0deg)',  
        6: 'rotateX(90deg) rotateY(0deg)'   
    };

    // Aplicar la rotación dependiendo del número
    dice.style.transform = rotations[randomNumber];

    // Mostrar el resultado
    document.getElementById('result').innerText = `Tú número es el ${randomNumber}`;
});
