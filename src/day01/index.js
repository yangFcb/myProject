const React = window.React
const ReactDOM = window.ReactDOM

let domArr = []
let domKey = 0

let head = React.createElement("div", { className: 'head' })
const content = React.createElement("textarea", { id: 'textarea' })
const sendBtn = React.createElement("button", { onClick: send }, '发送')
const clearBtn = React.createElement("button", { onClick: clear, style: { marginLeft: '10px' } }, '清除')
const footer = React.createElement("div", null, sendBtn, clearBtn)

function send() {
    const input = document.getElementById('textarea')
    const value = input.value
    if(value) {
        domKey ++
        domArr.push(
            React.createElement("div", { className: 'list', key: domKey }, value)
        )
        input.value = ''
        head = React.createElement("div", { className: 'head' }, domArr)
        rend([head, content, footer])
    }
}

function rend(arr) {
    ReactDOM.render(
        React.createElement("div", { className: 'box' }, ...arr),
        document.getElementById('root')
    )
}

function clear() {
    domArr = []
    domKey = 0
    head = React.createElement("div", { className: 'head' })
    rend([head, content, footer])
}

rend([head, content, footer])
