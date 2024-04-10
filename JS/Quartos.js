var nomeH = "Villa Serenity Fernandes";
var saudacao = alert(`Bem-vindo ao ${nomeH}`);
var senha = 2678;
var nome = prompt("Primeiro queremos saber o seu nome. Por favor digite seu nome.");
var DigiteSenha = prompt('Digite a sua senha: ');

if (parseInt(DigiteSenha) === senha) {
    alert(`Bom te ver por aqui ${nome}`);
} else {
    alert("Senha incorreta");
    DigiteSenha = prompt('Digite a sua senha: ');
}

var saudacao2 = alert(`Bem vindo ao ${nomeH}, ${nome}. É um imenso prazer ter você por aqui!`);

function inicio() {
    var escolha = parseInt(prompt('Selecione a opção:\n1-) Reserva de Quartos\n2-) Cadastro de Hóspedes\n3-) Abastecimento de Carros\n4.) Sair'));

    switch (escolha) {
        case 1:
            reserva_quartos();
            break;
        case 2:
            cadastro_hospedes();
            break;
        case 3:
            abastecer_carros();
            break;
        case 4:
            SAIR();
            break;
        default:
            erro();
            break;
    }
}

function reserva_quartos() {
    alert('HOTEL Villa Serenity Fernandes - RESERVA DE QUARTOS');

    function calcularHospedagem() {
        var QuartosDisponiveis = [];
        var valorDiaria;

        // Loop para garantir que o valor da diária seja válido
        while (true) {
            valorDiaria = parseFloat(prompt("Qual o valor padrão da diária?"));
            if (valorDiaria >= 50) {
                break; // Sai do loop se o valor for válido
            }
            alert("Valor inválido. O valor mínimo da diária é R$ 50,00");
        }

        var QtsDiarias = parseInt(prompt("Quantas diárias serão necessárias?"));
        if (QtsDiarias <= 0 || QtsDiarias >= 30) {
            alert('Quantidade de dias inválida!');
            calcularHospedagem();
        } else {
            var numeroQuarto = parseInt(prompt('Qual o quarto para reserva? (1 - 20)?'));
            if (numeroQuarto <= 0 || numeroQuarto > 20) {
                alert('Quarto inválido. Tente novamente.');
                calcularHospedagem();
            } else {
                if (QuartosDisponiveis.includes(numeroQuarto)) {
                    var EscolhaOutro = confirm('Esse Quarto já está Ocupado.');
                    if (EscolhaOutro) {
                        calcularHospedagem();
                    }
                } else {
                    QuartosDisponiveis.push(numeroQuarto);
                    alert(`O Quarto ${numeroQuarto} Está disponivel!`)
                    var total = QtsDiarias * valorDiaria;
                    alert(`O valor total da hospedagem é R$ ${total.toFixed(2)}`);
                    confirmarReserva();
                }
            }
        }
    }

    function confirmarReserva() {
        var confirmarReserva = prompt ('Deseja confirmar a reserva? Digite 1 para confirmar ou 2 para cancelar.');
            if (confirmarReserva == 1){
                alert('Reserva confirmada com sucesso! Agradecemos a sua preferência.')
                inicio()
            } else if (confirmarReserva == 2) {
                alert ('Reserva cancelada')
                inicio()
            } else {
                alert('Opção invalida!')
            }
    }



    calcularHospedagem();
}

function cadastro_hospedes() {


    inicio();
}

function abastecer_carros() {
    alert('HOTEL Villa Serenity Fernandes - ABASTECER');
    inicio();
}

function erro() {
    alert('Por favor forneça um número entre 1 e 4');
    inicio();
}

function SAIR() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Muito obrigado e até logo, ${nome}.`);
        window.close();
    } else {
        inicio();
    }
}

inicio();