const form = document.getElementById("formulario");

const h1 = document.createElement("h1");
h1.id = "resultado"; 
document.body.appendChild(h1);



function calcular(event){
    event.preventDefault();
    const a = form.a.value;
    const b = form.b.value;

    const res = a**b;
    
    h1.textContent = res;

}



form.addEventListener("submit" ,calcular)





