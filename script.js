var pantallaInicio = document.getElementById('inicio')
var pantallaAgregarPalabra = document.getElementById('aggPalabra')
var pantallaJuego = document.getElementById('juego')
var lienzo = document.querySelector('canvas')
var pincel = lienzo.getContext('2d')
const ancho = lienzo.width
const alto = lienzo.height
var numeroErrores = 0
var numeroAciertos = 0
var start = false
var palabras = [
  'PYTHON',

  'HTML',
  'CSS',
  'JS',
  'ALURA',
  'ORACLE',
  'JAVA',
  'VISUAL',
  'ONE',
  'WEB',
  'GITHUB',
]
var letrasUsadas = []
var palabraSecreta
