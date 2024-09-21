// Template ID - template_16hzvac
// Service ID - service_5k2utos
// User ID or Public ID - O1tF--IwQPNGNvMM0

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