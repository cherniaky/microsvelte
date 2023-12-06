
                    export default function() {
      let button_1;
let txt_2;
let div_3;
let txt_4;
let button_5;
let txt_6;
let button_7;
let txt_8;
      let counter = 0;
let value = 2;
const increment = () => {
    counter += 1, lifecycle.update(['counter']);
};
const incrementValue = () => {
    value += 1, lifecycle.update(['value']);
};
const decrement = () => (counter--, lifecycle.update(['counter']));
const display = () => counter;
function two() {
    return value;
}
;
                        const lifecycle = {
                            create(target) {
          button_1 = document.createElement('button');
button_1.addEventListener('click', decrement);
txt_2 = document.createTextNode('Decrement')
button_1.appendChild(txt_2)
target.appendChild(button_1)
div_3 = document.createElement('div');
txt_4 = document.createTextNode(display() * two())
div_3.appendChild(txt_4);
target.appendChild(div_3)
button_5 = document.createElement('button');
button_5.addEventListener('click', increment);
txt_6 = document.createTextNode('Increment')
button_5.appendChild(txt_6)
target.appendChild(button_5)
button_7 = document.createElement('button');
button_7.addEventListener('click', incrementValue);
txt_8 = document.createTextNode('Increment Value')
button_7.appendChild(txt_8)
target.appendChild(button_7)
                            },
                            update(changed) {
          if (changed.some(name => ['counter','value'].includes(name))) {
                        txt_4.data = display() * two();
                    }
                            },
                            destroy() {
          button_1.removeEventListener('click', decrement);
target.removeChild(button_1)
target.removeChild(div_3)
button_5.removeEventListener('click', increment);
target.removeChild(button_5)
button_7.removeEventListener('click', incrementValue);
target.removeChild(button_7)
                            },
                        };
                        return lifecycle;
                    }
                    