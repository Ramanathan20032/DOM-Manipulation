
function check(){
    let inputText = document.getElementById('input').value
    let result = document.getElementById('result')

    str = inputText
    
    str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    if(str === str.split('').reverse().join('')){
        result.innerHTML = 'is a palindrome'
    }
    else{
        result.innerHTML = 'is not a palindrome'
    }
}