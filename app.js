
export default function() {
    let button_1;
    let txt_2;
    let div_3;
    let txt_4;
    let div_5;
    let txt_6;
    let txt_7;
    let button_8;
    let txt_9;
    let button_10;
    let txt_11;
    let counter = 0;
    let value = 2;
    const increment = () => {
        counter += 1, lifecycle.update(['counter']);
    };
    const incrementValue = () => {
        value += 1, lifecycle.update(['value']);
    };
    const decrement = () => (counter--, lifecycle.update(['counter']));
    const lifecycle = {
        create(target) {
            button_1 = document.createElement('button');
            button_1.addEventListener('click', decrement);
            txt_2 = document.createTextNode('Decrement')
            button_1.appendChild(txt_2)
            target.appendChild(button_1)
            div_3 = document.createElement('div');
            txt_4 = document.createTextNode(counter * value)
            div_3.appendChild(txt_4);
            target.appendChild(div_3)
            div_5 = document.createElement('div');
            txt_6 = document.createTextNode('Value: ')
            div_5.appendChild(txt_6)
            txt_7 = document.createTextNode(value)
            div_5.appendChild(txt_7);
            target.appendChild(div_5)
            button_8 = document.createElement('button');
            button_8.addEventListener('click', increment);
            txt_9 = document.createTextNode('Increment')
            button_8.appendChild(txt_9)
            target.appendChild(button_8)
            button_10 = document.createElement('button');
            button_10.addEventListener('click', incrementValue);
            txt_11 = document.createTextNode('Increment Value')
            button_10.appendChild(txt_11)
            target.appendChild(button_10)
        },
        update(changed) {
            if (changed.some(name => ['counter', 'value'].includes(name))) {
                txt_4.data = counter * value;
            }
            if (changed.includes('value')) {
                txt_7.data = value;
            }
        },
        destroy() {
            button_1.removeEventListener('click', decrement);
            target.removeChild(button_1)
            target.removeChild(div_3)
            target.removeChild(div_5)
            button_8.removeEventListener('click', increment);
            target.removeChild(button_8)
            button_10.removeEventListener('click', incrementValue);
            target.removeChild(button_10)
        },
    };
    return lifecycle;
}

