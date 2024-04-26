// Preguntas y respuestas (personaliza con tu villano favorito)
const preguntas = [
    {
        pregunta: "¿Cuál es el nombre real de mi villano favorito?",
        respuestas: ["Minion", "Banana", "Gru", "Pedro"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cómo se llamaban los famosos amarillos ayudantes de Gru Mi villano favorito?",
        respuestas: ["Pelones", "los carlos ", "kevin", "Los Minions"],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿En que pelicula Gru robo la luna ?",
        respuestas: ["mi villano fovorito 1", "mi villano fovorito 2", "mi villano fovorito 3", "Los minions"],
        respuestaCorrecta: 0
    },
    {
        pregunta:"Cual es el juguete favorito de Agnes",
        respuestas: ["Unicornio", "Muñecas ", "Perro", "Los Minions"],
        respuestaCorrecta: 0
    },

    {
        pregunta:"De que color es la casa de Gru",
        respuestas: ["Negro", "Rojo ", "Blanco", "Amarillo"],
        respuestaCorrecta: 0

    },
    {
        pregunta:"Cuantas hay peliculas de mi villno favorito hay?",
        respuestas: ["1", "2", "3", "4"],
        respuestaCorrecta: 3

    },
    {
        pregunta:"Donde se encuentr el lboratorio de Gru",
        respuestas: ["En la luna", "En el baño", "En el sotano", "En egipto"],
        respuestaCorrecta: 2

    },
   
];


        let preguntaActual = 0;
        let puntuacion = 0;

        // Mostrar la primera pregunta
        mostrarPregunta();

        function mostrarPregunta() {
            const pregunta = preguntas[preguntaActual];

            const htmlPregunta = `
                <p class="pregunta">${pregunta.pregunta}</p>
            `;

            const htmlRespuestas = pregunta.respuestas.map((respuesta, index) => {
                return `
                    <button class="respuesta" onclick="comprobarRespuesta(${index})">${respuesta}</button>
                `;
            }).join("");

            document.getElementById("preguntas").innerHTML = htmlPregunta + htmlRespuestas;
        }

        function comprobarRespuesta(indiceRespuesta) {
            const pregunta = preguntas[preguntaActual];

            if (indiceRespuesta === pregunta.respuestaCorrecta) {
                puntuacion++;
                alert("¡Respuesta correcta!");
            } else {
                alert("Respuesta incorrecta.");
            }

            preguntaActual++;

            if (preguntaActual < preguntas.length) {
                mostrarPregunta();
            } else {
                mostrarResultado();
            }
        }

        function mostrarResultado() {
            document.getElementById("preguntas").style.display = "none";
            document.getElementById("resultado").style.display = "block";

            document.getElementById("puntuacionFinal").textContent = puntuacion;
        }

        function reiniciar() {
            preguntaActual = 0;
            puntuacion = 0;

            document.getElementById("preguntas").style.display = "block";
            document.getElementById("resultado").style.display = "none";

            mostrarPregunta();
        }