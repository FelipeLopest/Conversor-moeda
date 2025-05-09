const button = document.getElementById('button-1')
const select = document.getElementById('moeda')
const dolar = 5.2
const euro = 5.9
const convertValues = () => {
const input = document.getElementById('input-real').value
const valorR = document.getElementById('valor-real')
const ValorD = document.getElementById('valor-dolar')
valorR.innerHTML =  new Intl.NumberFormat("pt-BR" , {
    style:"currency" , 
    currency: "BRL",
}).format(input);

if(select.value === "dolar"){
ValorD.innerHTML = new Intl.NumberFormat("en-US" , {
    style:"currency" , 
    currency: "USD",
}).format(input / dolar);

}

if(select.value === "Euro"){
ValorD.innerHTML = new Intl.NumberFormat("de-DE" , {
    style:"currency" , 
    currency: "EUR",
}).format(input / euro);

}


}
button.addEventListener('click' , convertValues )


const novovalor = () => {
    const txtDolar = document.getElementById('dolar-text')
    const img = document.getElementById('foto-eua')
    if(select.value == "Euro"){
      txtDolar.innerHTML = "Euro"
      img.src = "./assets/euro.png"
    }
    else {txtDolar.innerHTML = "Dólar"
        img.src = "./assets/eua.png"
    }
    
        
    convertValues()

}


select.addEventListener("change" , novovalor)


