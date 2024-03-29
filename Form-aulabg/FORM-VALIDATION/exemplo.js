const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  
  
  const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
  } 
  //variaveis para linkar o html com o js
  const form = document.querySelector('form')
  const msg = document.querySelector('.end')
  const inputName = document.querySelector('input[name="name"]')
  const inputEmail = document.querySelector('input[name="email"]')
  const inputCpf = document.querySelector('input[name="cpf"]')
  
  //Validação 
  
  let isValidForm = false
  
 const resetInput = (elem) => {
   elem.classList.remove('invalid')
   elem.nextElementSibling.classList.add('error-hidden')
  }
  const invalidateElem = (elem) => {
   elem.classList.add('invalid')
   elem.nextElementSibling.classList.remove('error-hidden')
   isValidForm = false
  
 }
  
  const validadeInput = () => {
    isValidForm = true
    if(!inputName.value){
      invalidateElem(inputName)
    } 

    if(!isValidEmail(inputEmail.value)){
      invalidateElem(inputEmail)
    } 
    if(!isValidCPF(inputCpf.value)){
      invalidateElem(inputCpf)
    } 
  }

  //POST - Backend
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    validadeInput()
    if(isValidForm){
      form.remove()
      msg.classList.remove('error-hidden')
      console.log(input.value)
    }
  })

  inputName.addEventListener("input", () => {
    resetInput(inputName)
   
  })

  inputEmail.addEventListener("input", () => {
    resetInput(inputEmail)
   
  })
  
  inputCpf.addEventListener("input", () => {
    resetInput(inputCpf)
   
  })