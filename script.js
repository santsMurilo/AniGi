
const textos = document.querySelectorAll(".texto");

textos.forEach((p, index) => {
    const conteudo = p.innerHTML;
    p.innerHTML = "";

    let i = 0;

    function digitar() {
        if (i < conteudo.length) {
            p.innerHTML += conteudo.charAt(i);
            i++;
            setTimeout(digitar, 25);
        }
    }

    setTimeout(digitar, index * 800);
});


const container = document.getElementById("video-container");

const botao = document.createElement("button");
botao.innerText = "Clique para ver uma coisa dahora 😁";



const mensagem = document.createElement("p");
mensagem.innerHTML = "Brincadeira🤣😓 <br> Se cuida, fidida";
mensagem.style.display = "none";
mensagem.style.opacity = "0";
mensagem.style.transition = "0.5s";


botao.onclick = () => {

    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");

    mensagem.style.display = "block";

    setTimeout(() => {
        mensagem.style.opacity = "1";
    }, 50);

    botao.disabled = true;
    botao.innerText = "Já viu 😌";
};

container.appendChild(botao);
container.appendChild(mensagem);

const titulo = document.querySelector("h1");
titulo.onclick = () => {
    window.open("https://www.youtube.com/shorts/WPK9k74J7fg", "_blank");
}