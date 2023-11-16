function inserir(x) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + x;
}

function clearr(){
   document.getElementById('resultado').innerHTML = "";
}

function resultado() {
    let resultado = document.getElementById('resultado').innerHTML;
    let numero = document.getElementById('resultado').innerHTML = eval(resultado);
    const data = new Date();
    const dataLocal = data.toLocaleDateString();

    formatarHistorico(dataLocal, resultado);
}

function formatarHistorico(data, operacao) {
    const historico = document.getElementById('historico');
    let newTR = document.createElement('tr');
    let newTD1 = document.createElement('td');
    let newTD2 = document.createElement('td');
    newTD1.style.margin='10px 0 10px 0';
    newTD2.style.margin='10px 0px 10px 80px'
    newTD1.style.fontSize='20px';
    newTD2.style.fontSize='20px';
    newTD1.innerHTML = data;
    newTD2.innerHTML = operacao;
    newTR.appendChild(newTD1);
    newTR.appendChild(newTD2);
    historico.appendChild(newTR);
    refrestHistorico(data, operacao);

}
