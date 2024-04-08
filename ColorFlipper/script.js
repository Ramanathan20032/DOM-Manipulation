const wrap = document.getElementById('wrap')
const colorText = document.getElementById('color')
const btn = document.getElementById('btn')

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click',function(){
    let hexValue = '#'
    for(let i = 1; i <= 6; i++){
        hexValue = hexValue + randomHexValue()
    }
    wrap.style.backgroundColor = hexValue
    colorText.innerHTML = hexValue
})

function randomHexValue(){
    let hexIndex = Math.floor(Math.random()*16) // 0 - 15 (start from index 0)
    return hex[hexIndex]
}