    const increment = document.getElementById('increment');
    const button = document.getElementById('myButton');
    const buttonTwo = document.getElementById('myButtonTwo')
    let currentN = 0;
    function incrementer() {
     currentN += 1;
     increment.textContent = currentN;
    }
    function decrementer() {
        currentN -= 1;
        increment.textContent = currentN;
    }
    button.addEventListener('click', incrementer);
    buttonTwo.addEventListener('click', decrementer); 