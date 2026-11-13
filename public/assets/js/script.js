const formulario = document.getElementById("cep-form");
const campoCep = document.getElementById("cep");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

async function enviarCep(e) {
    e.preventDefault();

    if (campoCep.disabled) {
        return;
    }

    resultado.hidden = true;
    mensagem.hidden = false;
    const cepDigitado = campoCep.value.trim();
    const cepFormatado = /^\d{5}-?\d{3}$/.test(cepDigitado);

    if (!cepFormatado) {
        mensagem.textContent = "CEP inválido. Digite 12328070 ou 12328-070.";
        campoCep.focus();
        return;
    }

    mensagem.textContent = "Consultando...";
    campoCep.disabled = true;

    try {
        const cepNormalizado = cepDigitado.replace("-", "");
        const resposta = await fetch(`https://viacep.com.br/ws/${cepNormalizado}/json/`);

        if (!resposta.ok) {
            mensagem.textContent = "Erro ao consultar o serviço ViaCEP. Tente novamente.";
            return;
        }

        const dados = await resposta.json();

        if (dados.erro) {
            mensagem.textContent = "CEP não encontrado.";
            return;
        }

        document.getElementById("valor-cep").textContent = dados.cep;
        document.getElementById("valor-logradouro").textContent = dados.logradouro || "Não informado";
        document.getElementById("valor-bairro").textContent = dados.bairro || "Não informado";
        document.getElementById("valor-cidade").textContent = dados.localidade;
        document.getElementById("valor-uf").textContent = dados.uf;
        document.getElementById("valor-ibge").textContent = dados.ibge;

        mensagem.textContent = "Resposta do ViaCEP:";
        resultado.hidden = false;
    } catch (erro) {
        mensagem.textContent = "Falha de conexão. Tente novamente.";
    } finally {
        campoCep.disabled = false;
        campoCep.focus();
    }
}

formulario.addEventListener("submit", enviarCep);
