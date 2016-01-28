$(document).on('ready',inicia);

function inicia()
{
	$('button').on('click',compra);
}

function compra()
{
	var nodo=$(this).parent().children().first().next().text();
	$('aside').append('<li>'+nodo+'</li>');

	var pesos=$(this).parent().children().first().next().next().next().text();
	var pesos=parseInt();
	alert(pesos+pesos+pesos);

}