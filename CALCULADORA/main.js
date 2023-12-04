const display = document.querySelector(".display");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton =>{
    boton.addEventListener("click",() =>{
        const btnApretado = boton.textContent;

        if(boton.id === "c"){
            display.textContent = "0";
            return;
        }
        if(boton.id === "clear"){
            if(display.textContent.length === 1 || display.textContent === "ERROR!"){
                display.textContent = "0";
            }else{
            display.textContent = display.textContent.slice(0,-1);
            }
            return;
            
        }

        if(boton.id === "igual"){
            try{
                display.textContent = eval(display.textContent);
            }
            catch{
                display.textContent = "ERROR!";            }
            return;

        }

        if(display.textContent === "0" || display.textContent === "ERROR!"){
            display.textContent = btnApretado;
        }else {
       display.textContent += btnApretado;
        }
    })
});
