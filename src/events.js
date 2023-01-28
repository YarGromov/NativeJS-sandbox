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


// HTML
// <div id="big">
//     <div id="medium">
//     <div id="small">
//     <button id="1">1</button>
// <button id="2">2</button>
// <button id="3">3</button>
// <button id="4">4</button>
// <button id="5">5</button>
// </div>
// </div>
// </div>
// <a id="a" target="_blank" href="https://learn.javascript.ru/document">Google</a>
//
//
// <script src="src/events.js"></script>