//Inserir o numero no quadro branco (tela)
function insert(num){
    let numero = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numero + num;
}

//Limpar a conta
function clean(){
    document.getElementById('res').innerHTML = (''); 
}

//Deletar um número
function back(){
    let result = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = result.substring(0, result.length -1);
}

//Calcular o resultado
function calcular(){
    let conta = document.getElementById('res').innerHTML;
    if(res){
        document.getElementById('res').innerHTML = eval(conta);
    }
}
