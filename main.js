const inputColor = document.querySelector("#inputColor");
const btnVisualizar = document.querySelector("#btn-Visualizar");
const textoHexa = document.querySelector("#textoHexa");
const cardColor = document.querySelector("#cardColor");

btnVisualizar.addEventListener("click", () =>{
    console.log("me diste click");
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
    navigator.clipboard
        .writeText(inputColor.value)
        .then(() => alert("Color copiado!"))
        .catch((e) => console.log(e));
})

