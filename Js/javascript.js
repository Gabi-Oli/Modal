let listaCarros = [
  { nome: "Hyunday Hb20", img: "imgs/maxresdefault (1).jpg", descricao: "O hb20 é compacto que se destaca no mercado brasileiro pela modernização do design, pacote tecnológico de segurança e opções de motorização turbo (TGDI) e aspirada. Ele é conhecido por oferecer boa relação custo-benefício e um dos melhores pacotes de segurança de série em sua categoria (com 6 airbags em todas as versões). " },
  { nome: "Chevrolet Onix", img: "imgs/03_onix_joy_3_-e1567779497914.jpg", descricao: "Esse é um modelo compacto popular, conhecido por sua economia de combustível, especialmente com o motor 1.0 Turbo, oferecendo boas opções de tecnologia (MyLink, Waze), segurança (6 airbags, controle de estabilidade/tração) e um bom custo-benefício, com opções de câmbio manual e automático de 6 marchas, destacando-se pelo design moderno e robustez estrutural." },
  { nome: "Fiat strada", img: "imgs/fiat-strada-volcano-1.3-2021.webp", descricao: " O fiat strada é uma picape compacta líder de vendas no Brasil, reconhecida pela versatilidade, robustez e capacidade de carga (até \(1.354\) L ou 720 kg). Oferece cabine simples (Plus) ou dupla, motorização 1.3 Firefly ou 1.0 Turbo, câmbio manual ou CVT, e itens modernos como central multimídia Uconnect de 7” e direção elétrica." },
  { nome: "Polo Sedan", img: "imgs/new-volkswagen-polo-for-russian-market.jpg", descricao: "Polo Sedan é um sedã compacto conhecido pela boa qualidade de construção, acabamento interno superior a concorrentes da época e um amplo porta-malas de 432 a 435 litros. Equipado principalmente com motores 1.6 EA111 Flex (até 104 cv) ou 2.0, destaca-se pela estabilidade e segurança, embora a suspensão seja firme. " }
  

];

listaCarros.map((carro, posicao) => {
  let cardCarro = document.getElementById("cards");
  cardCarro.innerHTML += `
    <div class="col-md-4">
      <div class="card  text-bg-primary mb-3" style="width: 18rem;">
        <im src="${carro.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${carro.nome}</h5>
          <a href="#" class="btn btn-secondary" onclick="zoomImg(${posicao})" ><i class="bi bi-zoom-in"></i></a>
        </div>
      </div>
    </div>
  `
  
});

function zoomImg(posicao){
  let carroSelecionado = listaCarros[posicao];
  document.getElementById("nomeCarro").innerHTML= carroSelecionado.nome;
  document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
  document.getElementById("imgModal").src = carroSelecionado.img;
  
  new bootstrap.Modal('#zoomImg').show();
}

// Tena L8ght e Dark ( modo claro e ewcuro)
function alterarTemaSite(){
  let tema = document.querySelector("html").getAttribute("data-bs-theme");
  if(tema === "dark"){
    document.querySelector("html").setAttribute("data-bs-theme", "light");
    document.querySelector("#alterarTemaSite").innerHTML = '<i class="bi bi-moon-fill></i>';
  }else{
  document.querySelector("html").setAttribute("data-bs-theme", "dark");
    document.querySelector("#alterarTemaSite").innerHTML = '<i class="bi bi-sun-fill" ></i>';
  }
}
