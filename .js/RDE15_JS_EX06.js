/* Funçoes sem retorno*/
function somar(n1,n2)
{
    var r
    r=n1+n2
    alert("Funcao de soma sem retorno, resultado "+ r)
}
/*Funcao com retorno */
function subtrair(n1,n2)
{
    var r
    r=n1-n2
    return(r)
}

somar(10,35)
var resultado
resultado = subtrair(35,10)
alert(" Funcao subtrair com retorno, "+resultado)