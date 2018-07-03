
// Fetch para GET
fetch("https://endereço.do.get").then(promessa => promessa.json()).then(dados => {
// Digite aqui o que fazer com os dados.
});

// Fetch para POST
fetch("https://endereço.do.post", {
    headers:{
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(seu_objeto_de_body);
}).then(promessa => promessa.json()).then(dados => {
// Digite aqui o que fazer com os dados.
});


// PADRÕES DO FETCH:
// Método: GET;
// Corpo (body): vazio