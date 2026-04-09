async function getAtividades() {
    const atividadesLista = document.querySelector(".atividades-lista");

    if (!atividadesLista) return;

    try {
        const response = await fetch(new URL("./atividades.json", import.meta.url));

        if (!response.ok) {
            throw new Error(`Erro ao carregar atividades: ${response.status}`);
        }

        const atividades = await response.json();

        atividades.forEach((atividade) => {
            const atividadeItem = document.createElement("div");
            atividadeItem.innerHTML = `<a href="${atividade.link}">${atividade.title}</a>`;
            atividadesLista.appendChild(atividadeItem);
        });
    } catch (error) {
        atividadesLista.innerHTML = "<p>Não foi possível carregar as atividades.</p>";
        console.error(error);
    }
}

getAtividades();
