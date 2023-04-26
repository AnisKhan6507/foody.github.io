var ham = document.querySelector('.ham')
var cross = document.querySelector('.close')
var sidebar = document.querySelector('.sidebar')
var form = document.querySelector('myForm')
ham.addEventListener('click',()=>{
    sidebar.style.right= '0'
    ham.style.display = 'none'
})

cross.addEventListener('click',()=>{
    sidebar.style.right= '-100pc'
    ham.style.display = 'grid'
    // ham.style.position = 'absolute'
})

function formReset(){
    form.reset()
}