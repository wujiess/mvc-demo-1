import './app1.css';
import $ from 'jquery';

let n = 100;

add1.onclick = () => {
    n += 1;
    render();
};

minus1.onclick = () => {
    n -= 1;
    render();
}

mul2.onclick = () => {
    n *= 2;
    render();
}

divide2.onclick = () => {
    n /= 2;
    render();
}

function render() {
    number.innerHTML = n;
};