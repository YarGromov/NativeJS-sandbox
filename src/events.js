// handler === listener === subscriber === function
// handler ⊂  callback
// callback => handler, setTimeout/setInterval, param of arrays methods
// onclick = handler; handler({...})
// {...} - event, ev, e

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const handler1 = (e) => {
    console.log(e.currentTarget)
}
const handler2 = (e) => {
    alert(e)
}


// sm.onclick = handler1;
// sm.onclick = handler2;
// sm.onclick = null;

// sm.addEventListener('click', handler1)
// sm.addEventListener('click', handler2)
// sm.removeEventListener('click', handler1)

//45

sm.onclick = handler1
md.onclick = handler1
bg.onclick = handler1