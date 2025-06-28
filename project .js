let buttons = document.querySelectorAll('.child>button');

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        console.log(item);
    });
});

document.querySelector('.final-btn').addEventListener('click',
    function () {
        document.querySelector('.parent').style.display = 'none';
        document.querySelector('.parent1').style.display = 'block';
    });

buttons.forEach(function (button) {
    button.addEventListener('click',
        function () {
            let number = this.getAttribute('data-number');
            document.getElementById('messageText').innerText = 'You selected' + " " + number + " " + 'out of 5'
        })
})