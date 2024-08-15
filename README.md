  <h1>Villa Serenity Fernandes</h1>
    <p>Este é um projeto de um sistema de gerenciamento de hotel chamado "Villa Serenity Fernandes". O sistema permite o cadastro de hóspedes, reservas de quartos, organização de eventos, manutenção de ar-condicionado, e mais, tudo através de um menu interativo.</p>

  <h2>Funcionalidades Principais</h2>
    <ul>
        <li><strong>Login</strong>: Autenticação por senha para acesso ao sistema.</li>
        <li><strong>Cadastro de Hóspedes</strong>: Permite cadastrar hóspedes com base em suas idades, calcular tarifas com descontos para crianças e idosos, e exibir o total a ser pago.</li>
        <li><strong>Reservas de Quartos</strong>: Sistema de reservas que permite escolher um quarto disponível, calcular o custo com base na quantidade de dias, e confirmar ou cancelar a reserva.</li>
        <li><strong>Organização de Eventos</strong>: Função para organizar eventos no hotel, verificando a disponibilidade de auditórios, quantidade de garçons necessários, e calculando o custo total do evento.</li>
        <li><strong>Manutenção de Ar-Condicionado</strong>: Calcula o custo total da manutenção de aparelhos de ar-condicionado, considerando possíveis descontos para manutenção em massa.</li>
    </ul>

  <h2>Estrutura do Código</h2>
    <ul>
        <li><strong>Variáveis Globais:</strong>
            <ul>
                <li><code>nomeHotel</code>: Nome do hotel.</li>
                <li><code>senhaCorreta</code>: Senha para acesso ao sistema.</li>
                <li><code>quartos</code>: Array que representa a disponibilidade dos quartos.</li>
                <li><code>lista_hospedes</code>: Lista de hóspedes cadastrados.</li>
                <li><code>isLoggedIn</code>: Flag para verificar se o usuário está autenticado.</li>
                <li><code>valorDiaria</code>: Valor padrão da diária do hotel.</li>
            </ul>
        </li>
        <li><strong>Funções:</strong>
            <ul>
                <li><code>boasVindas(nome)</code>: Exibe mensagem de boas-vindas.</li>
                <li><code>erro()</code>: Exibe mensagem de erro e retorna ao menu principal.</li>
                <li><code>login()</code>: Verifica a senha de acesso e autentica o usuário.</li>
                <li><code>inicio()</code>: Menu principal do sistema.</li>
                <li><code>cadastrarHospedes()</code>: Permite o cadastro de hóspedes, calculando tarifas e aplicando descontos.</li>
                <li><code>menuCadastro()</code>: Menu para gerenciar o cadastro de hóspedes, incluindo a pesquisa e listagem.</li>
                <li><code>fazerReserva()</code>: Realiza a reserva de um quarto, verificando a disponibilidade e calculando o custo total.</li>
                <li><code>organizarEvento()</code>: Organiza eventos no hotel, incluindo cálculo de garçons, buffet, e reserva de auditórios.</li>
                <li><code>manutencaoArCondicionado()</code>: Calcula o custo de manutenção dos aparelhos de ar-condicionado.</li>
                <li><code>main()</code>: Função principal que inicializa o sistema.</li>
                <li><code>sair()</code>: Encerra o sistema.</li>
            </ul>
        </li>
    </ul>

  <h2>Como Usar</h2>
    <ol>
        <li><strong>Login</strong>: O sistema requer uma senha para acesso. Utilize a senha padrão definida no código.</li>
        <li><strong>Menu Principal</strong>: Após o login, o usuário terá acesso a um menu com as opções de cadastro de hóspedes, reserva de quartos, organização de eventos, manutenção de ar-condicionado, e um menu adicional de cadastro.</li>
        <li><strong>Cadastro de Hóspedes</strong>: No menu de cadastro, é possível adicionar, pesquisar e listar hóspedes.</li>
        <li><strong>Reservas e Eventos</strong>: Utilize as opções de reserva para gerenciar as estadias e a opção de eventos para organizar eventos com buffet e garçons.</li>
        <li><strong>Manutenção</strong>: O menu de manutenção permite calcular o custo para manutenção dos aparelhos de ar-condicionado no hotel.</li>
    </ol>

  <h2>Requisitos</h2>
    <ul>
        <li>Navegador com suporte a JavaScript.</li>
    </ul>

  <h2>Como Executar</h2>
    <ol>
        <li>Clone o repositório ou copie o código-fonte.</li>
        <li>Abra o arquivo HTML em um navegador que suporte JavaScript.</li>
        <li>Siga as instruções no prompt para utilizar as funcionalidades do sistema.</li>
    </ol>
