const wrapper = document.querySelector("#wrapper");
const button = document.querySelector("#button");
const input = document.querySelector("#input");
const img = document.querySelector("#img");


button.addEventListener("click", () => {
    let value = input.value;
    if(!value) return;
    button.innerText = "Generating"
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${value}`;
    img.addEventListener("load", () => {
        wrapper.classList.add("active");
        button.innerText = "Generate"
    })
    console.log(value);
})

input.addEventListener("keyup", () => {
    if(!input.value) {
        wrapper.classList.remove("active");
    }
})