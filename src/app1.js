import './app1.css';

let n = parseFloat(localStorage.getItem('n')) || 100;

add1.onclick = () => {
    n += 1;
    render();
    save();
};

minus1.onclick = () => {
    n -= 1;
    render();
    save();
}

mul2.onclick = () => {
    n *= 2;
    render();
    save();
}

divide2.onclick = () => {
    n /= 2;
    render();
    save();
}

function render() {
    number.innerHTML = n;
};

function save() {
    localStorage.setItem('n', n.toString());
}

render();