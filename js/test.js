document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el formulario y el botón de resultado
  const form = document.getElementById("formTest");
  const resultado = document.getElementById("resultado");

  // Define los pesos para cada pregunta
  const pesos = [2, 3, 4, 3, 2];

  // Puntaje total posible
  const puntajeTotal = pesos.reduce((acumulado, peso) => acumulado + peso, 0);

  // Detecta envío del formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault(); //
    let puntaje = 0;

    // Itera sobre cada respuesta seleccionada
    pesos.forEach((peso, index) => {
      const seleccion = form[`pregunta${index + 1}`].value;
      if (seleccion === "si") {
        puntaje += peso; // Suma el peso si la respuesta fue sí
      }
    });

    // Calcula el porcentaje alcanzado
    const porcentaje = (puntaje / puntajeTotal) * 100;

    // Define mensaje según puntaje total
    let mensaje;
    if (puntaje >= 12) {
      mensaje = `🔝 Tienes un perfil altamente innovador. ¡Sigue así!`;
    } else if (puntaje >= 8) {
      mensaje = `👍 Buen nivel de innovación. Sigue desarrollando tus habilidades.`;
    } else {
      mensaje = `🌱 Estás en proceso. Aprovecha las oportunidades de aprender y explorar.`;
    }

    // Muestra el mensaje y el porcentaje alcanzado
    resultado.innerHTML = `
      <p>${mensaje}</p>
      <p>Tu puntaje total es: ${puntaje} de ${puntajeTotal} (${porcentaje.toFixed(2)}%)</p>
    `;
  });
});
