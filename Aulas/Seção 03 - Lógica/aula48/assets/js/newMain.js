

const campData = document.querySelector(".data");

const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

campData.style.textAlign = "center";
campData.innerHTML = data.toLocaleString('pt-BR', opcoes);
// campData.innerHTML = Intl.DateTimeFormat('pt-BR', opcoes).format(data)

