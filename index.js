// Template ID - template_16hzvac
// Service ID - service_5k2utos
// User ID or Public ID - O1tF--IwQPNGNvMM0
let isModalOpen = false
let contrastOpen = false
const scaleFactor = 1 / 20

function moveBackground(event){
    const shape = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    for (let i = 0; i < shape.length; i++){
        const isOdd = i % 2 !==0
        const boolInt = isOdd ? -1 : 1
        shape[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast(){
    if (contrastOpen){
        contrastOpen = false
        return document.body.classList.remove("dark-theme")
    }
    contrastOpen = true
    document.body.classList += " dark-theme"
}


function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs.sendForm(
        'service_5k2utos','template_16hzvac', event.target, 'O1tF--IwQPNGNvMM0'
    ).then(() =>{
        loading.classList.remove(".modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(()=>{
        loading.classList.remove("modal__overlay--loading")
        alert("The Email Service is currently unavailable. Please contact directly on kshafin575@gmail.com ")
    })
}

function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}