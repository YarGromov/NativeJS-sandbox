// handler === listener === subscriber === function
// handler ⊂  callback
// callback => handler, setTimeout/setInterval, param of arrays methods
// onclick = handler; handler({...})
// {...} - event, ev, e

const sm = document.getElementById('small')

const handler1 = (e) => {
    alert(e)
}
const handler2 = (e) => {
    console.log(e)
}


// sm.onclick = handler1;
// sm.onclick = handler2;
// sm.onclick = null;

sm.addEventListener('click', handler1)
sm.addEventListener('click', handler2)
// sm.removeEventListener('click', handler1)

//45