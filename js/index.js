const button = document.getElementById('colorBtn');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? '#f4f4f9' : 'lightblue';
});