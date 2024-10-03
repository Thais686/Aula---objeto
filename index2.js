let livro={}

livro.nome = prompt("Digite o nome do livro") 

livro.autor= prompt("Digite o nome do autor")

livro.anodePublicacao= prompt("Digite o ano de publicacao")


let livro2={}

livro2.nome= prompt("Digite o nome do segundo livro")

livro2.autor= prompt("Digite o nome do autor do segundo livro")

livro2.anodePublicacao= prompt("Digite o ano de publicação do segundo livro")


let livroantigo=livro.nome

if(livroantigo<livro2.nome){

    livroantigo=livro2.nome

}


console.log(`O livro mais antigo é ${livroantigo}`)

if(livro.nome== "estudando programação"){

    
}
