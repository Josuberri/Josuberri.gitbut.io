  // JavaScript Document

alert("Buenos días. Hace una partidita de Mokepon?")

//creamos estas variables para la función iniciar Juego. Las creamos como let y, como no van a variar, las denominamos const en vez de let.
const sectionSeleccionarAtaque = document.getElementById('Seleccionar-Ataque')
const sectionReiniciar = document.getElementById('Reiniciar')
const sectionMensajes2 = document.getElementById('Mensajes2')
const botonMascotaJugador = document.getElementById('botonMascota')
const botonReiniciar =  document.getElementById('Reinicio')
//Hasta aquí era IniciarJuego. Abrimos para la función seleccionarMascota. Hemos tenido que quitar 'Seleccionar-Ataque', que se repetía
const sectionSeleccionarMascota = document.getElementById('Seleccionar-Mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
//A partir de aquí es la función seleccionarMascotaEnemigo. Dejamos el aleatorio en la función, porque es específico. Movemos la siguiente variable:
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
//Ahora, las funciiones para contabilizar el número de combate:
const spanNumeroCombate = document.getElementById('numeroCombate')
//Variables para la función Combate:
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
//A continuación la función CrearMensaje. Hemos dejado las variables que crean párrafos. Nos traemos sólo las que se refieren al HTML:
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataquesDelJugador')
const ataquesDelRival = document.getElementById('ataquesDelRival')
//Esta constante la introducimos para sustituor el HTML que habíamos creado para las Tarjetas de Mokepon
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
//creamos la constante contenedorAtaques para resolver el ataque de cada mascota, en la funci�n mostrarAtaques. Necesita crear una variable (m�s abajo); ataquesMokepon
const contenedorAtaques = document.getElementById('contenedorAtaques')

//Ahora la sección CrearMensajesFInal. Botones fuego tierra y agua estarían repetidos, por lo que se excluyen. Lo mismo con section REiniciar y con la sección Mensajes, es decir, todo estaría repetido.
//De la sección revisar Vidas: Estaría Mensajes2, que ya está escrito.
//Introducimos una variable para incorporar ARREGLOS, que irán entre corchetes cuadrados. Permitirá incorporar cuantos objetos (moquepones) queramos crear, para darles características individuales.
let mokepones = []
//A continuación, las variables generales desde el principio y se mantienen en let, porque varían en span
let ataqueJugador 
let ataqueEnemigo 
let opcionDeMokepones
let inputRatigueya 
let inputHipodoge 
let inputCapipepo
let inputLangostelvis 
let inputTucapalma 
let inputPaidos
//mascotaJugador es una variable creada para permitir los ataques directos desde el mokepon. Es curioso que, al trasladar todas las �rdenes a Javascript, no hab�iamos definido el nombre de la mascota. Hab�amos conseguido denominarla s�lo a trav�s de input. Esta mascotaJugador est� vinculada a la funci�n extraerAtaques, aunque la primera vez que se activa es incorporada a la funci�n seleccionarMascotaJugador, igual�ndola al input correspondiente con su id. De hecho, la vemos en la funcion SeleccionarMascotaJugador en la �ltima l�nea, vinculada al input:
let mascotaJugador
//creamos la variable ataquesMokepon para la funci�n mostrarAtaques. Ordena los ataques de cada moquepon desde el arreglo mokepones:
let ataquesMokepon
// a continuaci�n: los span con variables
let numeroCombate = 0;
let vidasJugador = 3; 
let vidasEnemigo = 3;
//Creamos los botones de tierra fuego y agua con las que van a atacar cada una de las mascotas y que ser�n utilizadas en la funci�n mostrarAtaques:
let botonFuego
let botonAgua
let botonTierra
//creamos ahora (ya en clase avanzada, posterior a todas las secciones y funciones que empezamos creando) clases generales y objetos, que entiendo van a sustituir a las creadas en HTML:
class Mokepon {
	constructor(nombre, foto, vida) {
		this.nombre = nombre
		this.foto = foto
		this.vida = vida
		this.ataques = []
	}
}
//A continuación creeamos todos los personajes que estaban en HYML:
let ratigueya = new Mokepon('Ratigueya', 'Imagenes/01.AngryFire.png', 5)
let hipodoge = new Mokepon('Hipodoge', 'Imagenes/02.AguaPatos.png', 5)
let capipepo = new Mokepon('Capipepo', 'Imagenes/03.LandMonster.png', 5)
let langostelvis = new Mokepon('Langostelvis', 'Imagenes/04.Dragon.png', 5)
let tucapalma = new Mokepon('Tucapalma', 'Imagenes/05-Monstru-Hito.png', 5)
let paidos = new Mokepon('Paidos', 'Imagenes/06.Murciémalo.png', 5)

//para habilitar ARREGLOS de ATAQUES. A digerencia del anterior, que venía de una clase, aquí hay que meterle TODA la información :
ratigueya.ataques.push(
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '☄️', id: 'boton-tierra' }
)

hipodoge.ataques.push(
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '☄️', id: 'boton-tierra' }
)

capipepo.ataques.push(
	{ nombre: '☄️', id: 'boton-tierra' },
	{ nombre: '☄️', id: 'boton-tierra' },
	{ nombre: '☄️', id: 'boton-tierra' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '💧', id: 'boton-agua' }
)

langostelvis.ataques.push(
	{ nombre: '☄️', id: 'boton-tierra' },
	{ nombre: '☄️', id: 'boton-tierra' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '💧', id: 'boton-agua' }
)

tucapalma.ataques.push(
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '☄️', id: 'boton-tierra' }
)

paidos.ataques.push(
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '🔥', id: 'boton-fuego' },
	{ nombre: '💧', id: 'boton-agua' },
	{ nombre: '☄️', id: 'boton-tierra' },
	{ nombre: '☄️', id: 'boton-tierra' }
)

//para habilitar la variable de ARREGLOS mokepones de arriba (let mokepones = []), línea 36, hacemos lo que se llama un PUSH, que meterá en los corchetes del ARREGLO lo que metamos aquí, que no es otra cosa que los nombres de los mokepones:
mokepones.push(ratigueya, hipodoge, capipepo, langostelvis, tucapalma, paidos)

//Para comprobar en CONSOLA en la red si está fundionando algo: CONSOLE.LOG()
//console.log(ratigueya.ataques)


function iniciarJuego(){
	sectionSeleccionarAtaque.style.display = 'none'
	sectionReiniciar.style.display = 'none'
	sectionMensajes2.style.display = 'none'

	
	// Herramienta FOR EACH: Por cada uno de los elementos que tengamos de mokepones creados m�s arriba, col�calo en HTML:
	mokepones.forEach((mokepon) => {
		opcionDeMokepones = `
			<input type="radio" name = "mascota" id = ${mokepon.nombre} />
			<label class = "tarjeta-de-mokepon" for = ${mokepon.nombre} >
				<p>${mokepon.nombre}</p>
				<img id = "imagenRatigueya" src=${mokepon.foto} alt=${mokepon.nombre} />
			</label>
		`
		contenedorTarjetas.innerHTML += opcionDeMokepones
		
		inputRatigueya = document.getElementById('Ratigueya')
		inputHipodoge = document.getElementById('Hipodoge')
		inputCapipepo= document.getElementById('Capipepo')
		inputLangostelvis = document.getElementById('Langostelvis')
		inputTucapalma = document.getElementById('Tucapalma')
		inputPaidos = document.getElementById('Paidos')
		}
	)
	
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
	botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarMascotaJugador(){
	sectionSeleccionarMascota.style.display = 'none'
	sectionSeleccionarAtaque.style.display = 'flex'

		if (inputRatigueya.checked) {
			alert("Has seleccionado como mascota a Ratigueya")
			spanMascotaJugador.innerHTML = inputRatigueya.id
			mascotaJugador = inputRatigueya.id
		}
		else if (inputHipodoge.checked) {
			alert("Has seleccionado como mascota a Hipodoge")	
			spanMascotaJugador.innerHTML = inputHipodoge.id
			mascotaJugador = inputHipodoge.id
		}
		else if (inputCapipepo.checked) {
			alert("Has seleccionado como mascota a Capipepo")
			spanMascotaJugador.innerHTML = inputCapipepo.id
			mascotaJugador = inputCapipepo.id
		}
		else if (inputLangostelvis.checked) {
			alert("Has seleccionado como mascota a Langostelvis")
			spanMascotaJugador.innerHTML = inputLangostelvis.id
			mascotaJugador = inputLangostelvis.id
		}
		else if (inputTucapalma.checked) {
			alert("Has seleccionado como mascota a Tucapalma")
			spanMascotaJugador.innerHTML = inputTucapalma.id
			mascotaJugador = inputTucapalma.id
		}
		else if (inputPaidos.checked) {
			alert("Has seleccionado como mascota a Paidos")
			spanMascotaJugador.innerHTML = inputPaidos.id
			mascotaJugador = inputPaidos.id
		}
		else {alert("Recuerda que tienes que seleccionar una mascota previamente")}
	
		extraerAtaques(mascotaJugador)
		seleccionarMascotaEnemigo()
	}

function extraerAtaques(mascotaJugador) {
	let ataques
	//Introducimos la estructura 'for', muy parecida a forEach, pero con variables num�ricas que permiten moverse por todos los arreglos hasta llegar al nombre/personaje que necesitamos (clase 53)
	for (let i = 0; i < mokepones.length; i++) {
	if (mascotaJugador === mokepones[i].nombre){
	ataques = mokepones[i].ataques
	}
	}
	// prefiero esta f�rmula de forEach, que parece m�s precisa y ajustada, dada en los comentarios de clase 53
	//mokepones.forEach((mokepon) => {
	//if (mascotaJugador === mokepon.nombre) {
	//	ataques=mokepon.ataques
	//}
//})
	
	mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
	ataques.forEach((ataque) => {
		ataquesMokepon = `
		<button id = ${ataque.id} class = "boton-de-ataque"> ${ataque.nombre} </button>
		`
		contenedorAtaques.innerHTML += ataquesMokepon
	})
	
		botonFuego = document.getElementById('boton-fuego')
		botonAgua = document.getElementById('boton-agua')
		botonTierra = document.getElementById('boton-tierra')
	
		botonFuego.addEventListener('click', ataqueFuego)
		botonAgua.addEventListener('click', ataqueAgua)
		botonTierra.addEventListener('click', ataqueTierra)
}


function seleccionarMascotaEnemigo() {
	let mascotaAleatorio = aleatorio(0, mokepones.length -1)
	
	spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
	alert("Tu rival elige " + mokepones[mascotaAleatorio].nombre)
} 
function ataqueFuego() {
	ataqueJugador = 'FUEGO' 
	alert("Has escogido atacar con " + ataqueJugador)
	ataqueAleatorioEnemigo()
	numeroCombate++;
    spanNumeroCombate.textContent = numeroCombate;
}

function ataqueAgua() {
	ataqueJugador = 'AGUA'
	alert("Has escogido atacar con " + ataqueJugador)
	ataqueAleatorioEnemigo()
	numeroCombate++;
    spanNumeroCombate.textContent = numeroCombate;
}

function ataqueTierra() {
	ataqueJugador = 'TIERRA'
	alert("Has escogido atacar con " + ataqueJugador)
	ataqueAleatorioEnemigo()
	numeroCombate++;
    spanNumeroCombate.textContent = numeroCombate;
}

function ataqueAleatorioEnemigo() {
	let ataqueAleatorio = aleatorio (1,3)
	if (ataqueAleatorio == 1) {
		ataqueEnemigo = 'FUEGO'
		alert("Tu rival ha escogido ataque " + ataqueEnemigo)
	}
	else if (ataqueAleatorio == 2) {
		ataqueEnemigo = 'AGUA'
		alert("Tu rival ha escogido ataque " + ataqueEnemigo)
	}
	else if (ataqueAleatorio == 3) {
		ataqueEnemigo = 'TIERRA'
		alert("Tu rival ha escogido ataque " + ataqueEnemigo)
	}
	combate()
}
function combate() {
				if(ataqueEnemigo == ataqueJugador) {
						crearMensaje("HEMOS EMPATADO")
				}
				else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
						crearMensaje("HAS GANADO!");
						vidasEnemigo--
						spanVidasEnemigo.innerHTML = vidasEnemigo
				}
				else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
						crearMensaje("HAS GANADO!");
						vidasEnemigo--
						spanVidasEnemigo.innerHTML = vidasEnemigo
				}
				else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
						crearMensaje("HAS GANADO!");
						vidasEnemigo--
						spanVidasEnemigo.innerHTML = vidasEnemigo
				}
				else {
					crearMensaje("LO SIENTO. HAS PERDIDO...");
					vidasJugador--
					spanVidasJugador.innerHTML = vidasJugador
				}
				revisarVidas()
}
function crearMensaje(resultado) {
	let nuevoAtaqueDelJugador = document.createElement('p')
	let nuevoAtaqueDelRival = document.createElement('p')
	
	sectionMensajes.innerHTML = resultado
	nuevoAtaqueDelJugador.innerHTML = ataqueJugador
	nuevoAtaqueDelRival.innerHTML = ataqueEnemigo
	
	ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
	ataquesDelRival.appendChild(nuevoAtaqueDelRival)
//	let parrafo = document.createElement('p')
  //	parrafo.innerHTML = 'Tu mascota ataca con ' + ataqueJugador + '. La mascota de tu rival ha atacado con ' + ataqueEnemigo + ' - ' + resultado
	
}
function crearMensajeFinal(resultadoFinal) {
	sectionMensajes.innerHTML = resultadoFinal
	botonFuego.disabled = true
	botonAgua.disabled = true
	botonTierra.disabled = true
	sectionReiniciar.style.display = 'block'
}
function revisarVidas() {
	if (vidasEnemigo == 0) {
		crearMensajeFinal('ENHORABUENA!! HAS GANADO EL JUEGO!! :)')
		sectionMensajes2.style.display = 'block'
	}
	else if (vidasJugador == 0) {
		crearMensajeFinal('LO SIENTO MUCHO; Has perdido el juego :(')
	}
}
function reiniciarJuego(){
	location.reload()  
}
function aleatorio(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min)  
}
//ESTA LÍNEA ES PARA QUE JS CARGUE DESPUÉS DE QUE LO HAYA HECHO HTML:
window.addEventListener('load', iniciarJuego)

