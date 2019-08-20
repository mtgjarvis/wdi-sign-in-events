document.addEventListener('DOMContentLoaded', function(){
    let signInButton = document.querySelector('.signin')
    let signInForm = document.querySelector('.modal')
    let signInClose = document.querySelector('.close')
    let buttonSubmit = document.querySelector('.submit')
    let userName = document.getElementById('user')
    let passWord = document.getElementById('pass')

    userName.addEventListener('focus', function(e) {
        userName.classList.remove('error')
        e.stopPropagation()
    })
    userName.addEventListener('click', function(e) {
        e.stopPropagation()
    })

    passWord.addEventListener('focus', function(e) {
        passWord.classList.remove('error')
        e.stopPropagation()
    })

    passWord.addEventListener('click', function(e) {
        e.stopPropagation()
    })

    signInButton.addEventListener('click', function() {
        signInForm.style.display = "block"
    })
    signInClose.addEventListener('click', function() {
        signInForm.style.display = "none"
    })
    buttonSubmit.addEventListener('click', function(e) {
        if (!userName.classList.contains('error')) {
            userName.classList.add('error')
            passWord.classList.add('error')
            e.stopPropagation()
        }


    })
    signInForm.addEventListener('click', function() {
        signInForm.style.display = 'none'
    })
})