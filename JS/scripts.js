// Seleção dos elementos

const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Funções
function generateCode(){
    const qrCodeInputValue = qrCodeInput.Value;
    if(!qrCodeInput)return;

    qrCodeBtn.innerText = "Gerendo código...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    });
}
// Eventos
qrCodeBtn.addEventListener("click", () => { 
    generateCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateCode();
    }
});

/*Limpar área do qr code*/
qrCodeInput.addEventListener("keyup", () => {
   
    if(!qrCodeInput.Value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})