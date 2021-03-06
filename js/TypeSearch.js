//Variables

let labels = document.getElementById('labels');
let search = document.getElementById('search');
let Sexo = document.getElementById('');

let Portada = document.getElementById('pokemon')
let shiny = false;
let Enter = 13;

//TypeBySearch

//Evento para capturar las funciones del teclado

window.onload = function () {
    //document.onkeyup = muestraInformacion;
    //document.onkeypress = muestraInformacion;
    document.onkeydown = muestraInformacion;
}

function muestraInformacion(elEvento) {
    var evento = window.event || elEvento;
    /*
    var info = '';

    var mensaje = `Propiedad keyCode: ${evento.keyCode}`
    */
    if (evento.keyCode == Enter) {
        SeachByType();
    }
    /*
    info += mensaje;
    console.log(info);
    */
}

// ---------------- // ---------------- // ---------------- // ----------------

const SeachByType = () => {
    let buscador = search.value.toLowerCase();            //Palabra a buscar

    //Api fetch
    function Pokemons(poke) {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${poke}`;
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(datos => salidaHTML(datos));

    }
    Pokemons(buscador);
    shiny = false;
}

function salidaHTML(datosJson) {
    const resultadosAll = datosJson;

    const SeachPokemon = `
        <div class="pokemonContent">
            <div class="contenidoImg">
                <div class="absolutePosition"
                    <h3>${resultadosAll.id}</h3>
                </div>
                <div class="col imgColumna">
                    <img id="imgPokemon" class="pokemonesImg" src="${resultadosAll.sprites.front_default}">
                    <img id="backImg" class="pokemonesImg" src="${resultadosAll.sprites.back_default}">
                </div>
            </div>

            <div class="row Portada">
                <div class="row centradoPortada">
                    <div class="NombrePoke">
                        <h2>${resultadosAll.name}</h2>
                    </div>
                    <div class="col SexoPokemonn">
                        <div class="signo" id="signo">
                            <button onclick="sexo('${resultadosAll.sprites.front_default}', '${resultadosAll.sprites.back_default}')"><img src="img/hombre.png"></button>
                            <button onclick="sexo('${resultadosAll.sprites.front_female}', '${resultadosAll.sprites.back_female}')"><img src="img/mujer.png"></button>
                        </div>
                        <button id="ButonStateShiny" onclick="StateShiny('${resultadosAll.sprites.front_default}', '${resultadosAll.sprites.back_default}', '${resultadosAll.sprites.front_female}', '${resultadosAll.sprites.back_female}', '${resultadosAll.sprites.front_shiny}', '${resultadosAll.sprites.back_shiny}', '${resultadosAll.sprites.front_shiny_female}', '${resultadosAll.sprites.back_shiny_female}')">Shiny OFF</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    Portada.innerHTML = `${SeachPokemon}`;
}

let sexo = (skinDefault, BackSkinDefault) => {
    let sexo = skinDefault;
    let sexoSkinBack = BackSkinDefault;
    let imgPokemon = document.getElementById('imgPokemon');
    let backImg = document.getElementById('backImg');

    imgPokemon.src = sexo;
    backImg.src = sexoSkinBack;
}

let StateShiny = (skinDefault, BackSkinDefault, skinFemale, BackSkinFemale, skinShiny, BackSkinShiny, skinShinyFemale, BackSkinShinyFemale) => {
    let signo = document.getElementById('signo');
    let dato;
    let estado = document.getElementById('ButonStateShiny');

    if (shiny == true) {
        dato = `
            <button onclick="sexo('${skinDefault}', '${BackSkinDefault}')"><img src="img/hombre.png"></button>
            <button onclick="sexo('${skinFemale}', '${BackSkinFemale}')"><img src="img/mujer.png"></button>
        `;

        shiny = false;
        estado.innerHTML = 'Shiny OFF';
        console.log('hecho');
    } else {
        dato = `
            <button onclick="sexo('${skinShiny}', '${BackSkinShiny}')"><img src="img/hombre.png"></button>
            <button onclick="sexo('${skinShinyFemale}', '${BackSkinShinyFemale}')"><img src="img/mujer.png"></button>
        `;

        shiny = true;
        estado.innerHTML = 'Shiny ON';
    }

    return signo.innerHTML = dato;
}

//ByLabels


/*
ERRORES POR SOLUCIONAR

1. Img null (
    -parte del boton hembra;
    -partes donde pueda aparecer macho;
    -parte del boton modo shiny macho;
    -parte del boton modo shiny hembra;
)

2. Añadir estilos faltantes en la parte del buscador (background)

3. Falta añadir parte de pokemones (
    -Pre-Evoluciones;
    -Evolucion;
)

4. Error al no encontrar algun pokemon del buscador(
    -no encontrado;
    -Mal escrito;
)
*/