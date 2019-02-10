function destacarCartao(card_type){
	switch(card_type){
		case 1: 
			if(document.getElementById("card1").className == "imagem-cartoes"){
				document.getElementById("card1").className = "cartoes-destacados"
				document.getElementById("card2").className = "imagem-cartoes"
				document.getElementById("card3").className = "imagem-cartoes"
				document.getElementById("go-to-password").disabled = false;
				localStorage.setItem( 'cartaoSelecionado', "Cartão Mais" );
			}
			else{
				document.getElementById("card1").className = "imagem-cartoes"
				document.getElementById("card2").className = "imagem-cartoes"
				document.getElementById("card3").className = "imagem-cartoes"
				document.getElementById("go-to-password").disabled = true;
				localStorage.setItem( 'cartaoSelecionado', "Nenhum" );
			}
			break;
		case 2:
			if(document.getElementById("card2").className == "imagem-cartoes"){
				document.getElementById("card1").className = "imagem-cartoes"
				document.getElementById("card2").className = "cartoes-destacados"
				document.getElementById("card3").className = "imagem-cartoes"
				document.getElementById("go-to-password").disabled = false;
				localStorage.setItem( 'cartaoSelecionado', "Cartão Private Label" );
			}
			else{
				document.getElementById("card1").className = "imagem-cartoes"
				document.getElementById("card2").className = "imagem-cartoes"
				document.getElementById("card3").className = "imagem-cartoes"
				document.getElementById("go-to-password").disabled = true;
				localStorage.setItem( 'cartaoSelecionado', "Nenhum" );
			}
			break;
		case 3:
			if(document.getElementById("card3").className == "imagem-cartoes"){
					document.getElementById("card1").className = "imagem-cartoes"
					document.getElementById("card2").className = "imagem-cartoes"
					document.getElementById("card3").className = "cartoes-destacados"
					document.getElementById("go-to-password").disabled = false;
					localStorage.setItem( 'cartaoSelecionado', "Cartão Co-Branded" );
					
				}
				else{
					document.getElementById("card1").className = "imagem-cartoes"
					document.getElementById("card2").className = "imagem-cartoes"
					document.getElementById("card3").className = "imagem-cartoes"
					document.getElementById("go-to-password").disabled = true;
					localStorage.setItem( 'cartaoSelecionado', "Nenhum" );
				}
			break;
		default:
	}
}

function carregarCPF() { 
		//var number = localStorage.getItem( 'objectToPass' ); //Carrega o CPF da página antiga...
		//document.getElementById("cpf-text").innerHTML = number; //Coloca o CPF na página...
		var customerName = localStorage.getItem('customerName');
		document.getElementById("cpf-text").innerHTML = customerName;
	}