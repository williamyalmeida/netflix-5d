

let botaoPergunta = document.getElementById("botao-pergunta");
let perguntaBotao = document.getElementById("pergunta")
let imagemPergunta = document.querySelector("#imagem-pergunta")


botaoPergunta.addEventListener("click",()=>{
    

    if(perguntaBotao.style.display == "none") {
        perguntaBotao.style.display = "block"
        imagemPergunta.id ="imagem-pergunta-rotate"
    } else {
        perguntaBotao.style.display = "none"
        imagemPergunta.id ="imagem-pergunta"
        
        
    }

})
