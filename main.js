"use strict";

const pesquisarRacas = async () =>{

  const url = "https://dog.ceo/api/breeds/list/all"
  const response = await fetch(url);
  const data = await response.json();
  return Object.keys(data.message);

}

const pesquisarCachorro = async (raca) => {
  const url      = `https://dog.ceo/api/breed/${raca}/images`;
  const response = await fetch(url);
  const data     = await response.json();

  return data;
};

const criarImg = (image) => {
  const img = document.createElement("img");
  img.src   = image;

  return img;
};

const carregarImagens = async () => {
  const container = document.getElementById("imagem-container");
  const raca      = document.getElementById("raca").value;
  const imgs      = await pesquisarCachorro(raca);
  const tagImgs   = imgs.message.map(criarImg);

  container.replaceChildren(...tagImgs);

console.log(imgs)
};

const carregarRacas = async () => {
  const lista = document.getElementById("lista-racas")
  const racas = await pesquisarRacas()
  lista.innerHTML = `
  <option>
    ${racas.join("</option><option>")}
  </option>
  `
}

document.getElementById("pesquisar").addEventListener("click", carregarImagens);

carregarRacas();


// Modal

const abrirModal = () => document.getElementById("modal-container").classList.add("active")

const fecharModal = () => document.getElementById("modal-container").classList.remove("active")

document.getElementById("abrir-modal").addEventListener("click", abrirModal)

document.getElementById("fechar").addEventListener("click", fecharModal)