import React from 'react'
import ReactDOM from 'react-dom'
import imgList from 'imgList'

function img (timer) {
    let arr = imgList.map((item, key) => React.createElement("img", { src: item.src, key, className: key === timer ? 'show' : '' }))
    return React.createElement("div", null, arr)
}

function slids () {
    let timer = 0
    setInterval(() => {
        timer = timer === imgList.length - 1 ? 0 : timer + 1
        console.log(timer)
        return ReactDOM.render(
            React.createElement("div", {id:'box'}, img(timer) ),
            document.getElementById('root')
        )
    }, 2000);
    return img(0)
}

export default slids()

