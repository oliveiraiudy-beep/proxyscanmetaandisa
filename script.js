async function scan() {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Escaneando...";

    try {

        const resposta = await fetch("https://ipapi.co/json/");
        const dados = await resposta.json();

        resultado.innerHTML = `
        <hr>
        <b>IP:</b> ${dados.ip}<br>
        <b>Cidade:</b> ${dados.city}<br>
        <b>País:</b> ${dados.country_name}<br>
        <b>Operadora:</b> ${dados.org}
        `;

    } catch {

        resultado.innerHTML = "Erro ao verificar.";

    }
}