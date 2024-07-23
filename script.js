document.addEventListener("DOMContentLoaded", function(){
    const loader = document.querySelector("#loader")
    const button = document.querySelector("button")
    const name = document.querySelector('#name')
    const mail = document.querySelector('#mail')
    const tel = document.querySelector('#tel')
    const radios = document.querySelectorAll('input[name="local"]')
    const time = document.querySelector('#time')
    const date = document.querySelector('#date')
    button.onclick = () =>{
        radios.forEach(radio => {
            if(radio.checked){
                isChecked = true
            } 
        });
        if(name.value && mail.value && tel.value && isChecked && time.value && date.value){
            loader.style.opacity = '1'
            let elements = document.querySelectorAll(".element")
            elements.forEach((element)=>{
                element.classList.add('animate')
            })
        }
    }
})

