function tocaSom(seletorAudio){  //criei uma funçao em javascript, é tao simples criar funçao, preciso treinar para usar funçao sempre nos meus codigos futuros
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName == 'audio') {
        elemento.play()

    }

    else {
        alert('Elemento não encontrado');
    }
}


// document.querySelector('.tecla_pom').onclick = tocaSomPom;    //aqui coloquei a funçao sem parentes para ela nao ser executada imediatamente quando carregar a pagina
//o codigo acima funciona, mais o codigo abaixo é escrito de uma maneira mais correta abrangindo todas as teclas de som em um unico codigo


const listaDeTeclas = document.querySelectorAll('.tecla');
/*
let i = 0; //i é o contador, poderia por qualquer nome nessa variavel, só coloquei i por boa pratica

while (i < listaDeTeclas.length) { //O length indentifica o comprimento da lista, em boa pratica é melhor por o length do que por o tamanho da lista que neste caso seria 9
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //para criar um texto dinamico nao pode usar aspas simples ou duplas, é necessario usar crazes

    //console.log(idAudio); console.log eu só uso pra ver no console se esta funcionando, mais nao é necessario
    
    
    tecla.onclick = function(){       // aqui foi criado uma funçao anomina 
        tocaSom(idAudio);
}

i = i + 1;
console.log(i);
}

*/ // eu fiz com while acima, agora em baixo vou fazer com for, pois for é mais utilizado pelas empresas de programaçao

for (let i = 0; i < listaDeTeclas.length; i++) { //O length indentifica o comprimento da lista, em boa pratica é melhor por o length do que por o tamanho da lista que neste caso seria 9
    
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //para criar um texto dinamico nao pode usar aspas simples ou duplas, é necessario usar crazes

    console.log(idAudio); //console.log eu só uso pra ver no console se esta funcionando, mais nao é necessario
    
    
    tecla.onclick = function(){       // aqui foi criado uma funçao anomina 
        tocaSom(idAudio);
}


tecla.onkeydown = function(evento) {
     
    if(evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa'); 
    }

    
}

tecla.onkeyup = function() {
    tecla.classList.remove('ativa');
}

}