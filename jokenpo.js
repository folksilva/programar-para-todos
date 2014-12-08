/**
 * ISSO É UM COMENTÁRIO
 */

// ISSO TAMBÉM É UM COMENTÁRIO

var jogador, computador, mensagem, resultado; // Isso são variáveis
var opcoes = ['pedra', 'papel', 'tesoura']; // 0, 1, 2

function atualizar_tela () {
	document.getElementById('mensagem').innerText = mensagem;
	document.getElementById('computador').src = opcoes[computador] + '.png';
}

function jokenpo (opcao) {
	jogador = opcao;
	computador = Math.round(Math.random() * 2);
	resultado = jogador - computador;

	switch (resultado) {
		case 0:
			mensagem = "Empate!!!";
			break;
		case -1:
			mensagem = "Você perdeu =(";
			break;
		case 1:
			mensagem = "Você ganhou =)";
			break;
		case -2:
			mensagem = "Você ganhou =)";
			break;
		case 2:
			mensagem = "Você perdeu =(";
			break;
	}

	atualizar_tela();
}

document.getElementById('pedra').addEventListener('click', function () { jokenpo(0); }, false);
document.getElementById('papel').addEventListener('click', function () { jokenpo(1); }, false);
document.getElementById('tesoura').addEventListener('click', function () { jokenpo(2); }, false);