import Leon from "./modules/Leon.js";
import Aguila from "./modules/Aguila.js";
import Serpiente from "./modules/Serpiente.js";
import Oso from "./modules/Oso.js";
import Lobo from "./modules/Lobo.js";

var cantidadIngresado = 0;

var arrayIntanciasAnimals = null;

const getAnimales = (async () => {
  try {
    const URL = "../../animales.json";
    const request = await fetch(URL);
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
  }
})();

const Animales = (async () => {
  const dataAnimales = await getAnimales;

  arrayIntanciasAnimals = dataAnimales.animales?.map((animal) => {
    if (animal.name == "Leon") {
      const instanciaLeon = new Leon(animal.name, animal.imagen, animal.sonido);
      return instanciaLeon;
    } else if (animal.name == "Oso") {
      const instanciaOso = new Oso(animal.name, animal.imagen, animal.sonido);
      return instanciaOso;
    } else if (animal.name == "Aguila") {
      const instanciaAguila = new Aguila(
        animal.name,
        animal.imagen,
        animal.sonido
      );
      return instanciaAguila;
    } else if (animal.name == "Serpiente") {
      const instanciaSerpiente = new Serpiente(
        animal.name,
        animal.imagen,
        animal.sonido
      );
      return instanciaSerpiente;
    } else if (animal.name == "Lobo") {
      const instanciaLobo = new Lobo(animal.name, animal.imagen, animal.sonido);
      return instanciaLobo;
    }
  });
  //console.log(arrayIntanciasAnimals);
})();

const button = document.getElementById("btnRegistrar");

button.addEventListener("click", () => {
  if (
    document.getElementById("animal").selectedIndex == 0 ||
    document.getElementById("edad").selectedIndex == 0 ||
    document.getElementById("comentarios").value == ""
  ) {
    alert("Error debe ingresar la totalidad de los datos");
    return;
  }

  const animalForm = document.getElementById("animal").value;
  const edadForm = document.getElementById("edad").value;
  const comentariosForm = document.getElementById("comentarios").value;

  const contenedorPrincipal = document.getElementById("Animales");

  cantidadIngresado++;

  let div = document.createElement("div");
  div.id = `div${cantidadIngresado}`;
  contenedorPrincipal.appendChild(div);

  if (animalForm == "Leon") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Leon
    );
  } else if (animalForm == "Oso") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Oso
    );
  } else if (animalForm == "Aguila") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Aguila
    );
  } else if (animalForm == "Serpiente") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Serpiente
    );
  } else if (animalForm == "Lobo") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Lobo
    );
  }

  arrayIntanciasAnimals[indiceArray].edad = edadForm;
  arrayIntanciasAnimals[indiceArray].comentarios = comentariosForm;
  let audio = `../assets/sounds/${arrayIntanciasAnimals[indiceArray].sonido}`;

  let card = `
    <div class="card-style">
    <img src="../assets/imgs/${arrayIntanciasAnimals[indiceArray].imagen}" width="200px" id="LevantarModal${cantidadIngresado}" />
    <div class="py-2"><img src="../assets/imgs/audio.svg" alt="icono-audio" width="30px" id="card${cantidadIngresado}"></div>
    </div>
`;

  document.getElementById(`div${cantidadIngresado}`).innerHTML = card;

  document
    .getElementById(`card${cantidadIngresado}`)
    .addEventListener("click", () => {
      activarAudio(audio);
    });

  document
    .getElementById(`LevantarModal${cantidadIngresado}`)
    .addEventListener("click", () => {
      LevantarModal(
        arrayIntanciasAnimals[indiceArray].imagen,
        arrayIntanciasAnimals[indiceArray].edad,
        arrayIntanciasAnimals[indiceArray].comentarios
      );
    });

  vaciarFormulario();
});

const vaciarFormulario = () => {
  const animalForm = (document.getElementById("animal").selectedIndex = 0);
  const edadForm = (document.getElementById("edad").selectedIndex = 0);
  const comentariosForm = (document.getElementById("comentarios").value = "");
};

const animalForm = document.getElementById("animal");
animalForm.addEventListener("change", () => {
  if (animalForm.value == "Leon") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Leon
    );
  } else if (animalForm.value == "Oso") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Oso
    );
  } else if (animalForm.value == "Aguila") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Aguila
    );
  } else if (animalForm.value == "Serpiente") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Serpiente
    );
  } else if (animalForm.value == "Lobo") {
    var indiceArray = arrayIntanciasAnimals.findIndex(
      (element) => element instanceof Lobo
    );
  }

  let img = `../assets/imgs/${arrayIntanciasAnimals[indiceArray].imagen}`;

  document.getElementById("preview").innerHTML = `
        <img src="${img}" width="200px" />
    `;
});

const LevantarModal = (imagen, edad, comentarios) => {
  $("#exampleModal").modal();

  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = `
        <img src="../assets/imgs/${imagen}" width="200px" />
        <p>${edad}</p>
        <p>Comentarios</p>
        <p>${comentarios}</p>
    `;
};

const activarAudio = (audio) => {
  let player = document.getElementById("player");
  player.src = audio;
  player.preload = "auto";
  player.autoplay = true;
};
