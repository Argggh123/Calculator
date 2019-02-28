document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    document.addEventListener('keyup', function (event) {
        if (event.which === 13) {
            calculate()
        }
    });
    document.getElementById('calculate').addEventListener('click', function () {
        if (input.value !== '') {
            calculate()
        } else {
            alert('Введите выражение')
        }
    });
    document.getElementById('clear').addEventListener('click', function () {
        input.value = '';
    });
    document.querySelectorAll('.button').forEach(function (item, key) {
        if (item.id !== 'clear' && item.id !== 'calculate') {
            item.addEventListener('click', function (event) {
                input.value += event.target.innerHTML;
            });
        }
    });

    function calculate() {
        let value = document.getElementById('input').value.trim().split(' ').join('');
        let pos = value.indexOf('%', -1);
        let secondPos = value.substring(0, pos - 1);
        secondPos = eval(secondPos + '0');
        value = value.replace('%', '/100*' + secondPos);
        console.log(value);
        eval(value);
        input.value = eval(value)
    }
});