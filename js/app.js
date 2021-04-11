const $form=document.getElementById("form");
const $label=document.getElementById("label")
const emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
$form.addEventListener("submit",e=>{
  e.preventDefault();
  let text=$form.email.value;
  console.log(text)
  if(text===""){
    console.warn("The input field is empty");
    $label.classList.add("form-error");
    
  }else if(!emailRegex.test(text)){
    $label.classList.add("form-error-email")
  }else{
    alert("Datos enviados con Exito")
  }

});
$form.email.addEventListener("focus",e=>{
  $label.classList.remove("form-error-email");
  $label.classList.remove("form-error");
})