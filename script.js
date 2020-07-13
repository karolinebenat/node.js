function adicionarIngrediente(){  

    var fraseTratada;
    var frase = document.getElementById("ingrediente").value;
    
    fraseTratada = frase1(frase);

	var listahtml = document.getElementById("lista").innerHTML

    listahtml = listahtml + "<li>" + fraseTratada + "</li>";
	document.getElementById("lista").innerHTML = listahtml;
}

const frase1 = function(frase){

    var teste = frase;

    var preps = ["de", "como", "para", "com", "de", "a", "o", "em"],
    str = teste;
    palavras = str.match(/\b\w+\b/g);
    geral = palavras.map((e,i) => preps.indexOf(e) == -1 || i === 0 ? e[0].toUpperCase()+e.slice(1) : e).join(" ");

    return geral;

}


