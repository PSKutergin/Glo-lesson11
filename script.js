const btn = document.querySelector('#btn')
const e_btn = document.querySelector('#e_btn')
const text = document.querySelector('#text')
const square = document.querySelector('#square')
const range = document.querySelector('#range')
const circle = document.querySelector('#circle')
const range_span = document.querySelector('#range-span')

btn.addEventListener('click', function () {
    square.style.backgroundColor = text.value
})

e_btn.style.display = 'none'

range.addEventListener('input', function () {
    circle.style.width = range.value + '%'
    circle.style.height = range.value + '%'
    range_span.textContent = range.value
})