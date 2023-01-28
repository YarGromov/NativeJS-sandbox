// handler === listener === subscriber === function
// handler ⊂  callback
// callback => handler, setTimeout/setInterval, param of arrays methods
// onclick = handler; handler({...})
// {...} - event, ev, e

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const handler1 = (e) => {
    e.stopPropagation()
    if(e.target.tagName === 'BUTTON'){
        alert(e.target.id)
    }
}
const handler2 = (e) => {
    alert(e)
}

const handler3 = (e) => {
    alert('Yo!')
}

const handler4 = (e) => {
    e.preventDefault()
    alert('LoL')

}

// sm.onclick = handler1;
// sm.onclick = handler2;
// sm.onclick = null;

// sm.addEventListener('click', handler1)
// sm.addEventListener('click', handler2)
// sm.removeEventListener('click', handler1)

sm.onclick = handler1
md.onclick = handler2
bg.onclick = handler3

const a = document.getElementById('a')
a.addEventListener("click", handler4)
