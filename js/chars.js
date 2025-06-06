// Este archivo genera cuatro tipos de gráficos utilizando Chart.js
// Los datos utilizados son simulados para fines demostrativos

// Gráfico de barras - Emprendimiento femenino
const barChart = new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Moda', 'Tecnología', 'Artesanías', 'Alimentos', 'Servicios'],
    datasets: [{
      label: 'Emprendimiento femenino (en miles)',
      data: [12, 9, 14, 7, 10],
      backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Participación femenina por sector'
      }
    }
  }
});

// Gráfico de torta - Tipos de emprendimiento
const pieChart = new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['Antojitos', 'Social', 'Tecnológico', 'Ambiental'],
    datasets: [{
      label: 'Participación por tipo',
      data: [35, 25, 20, 20],
      backgroundColor: [
        'rgba(255, 206, 86, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Tipos de emprendimiento en Colombia'
      }
    }
  }
});

// Gráfico de líneas - Tendencia de innovación
const lineChart = new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Índice de innovación mundial',
      data: [43, 47, 50, 53, 55, 60, 62],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Tendencia global de innovación'
      }
    }
  }
});

// Gráfico de área (tipo línea con relleno) - Comparación emprendimiento vs innovación
const areaChart = new Chart(document.getElementById('areaChart'), {
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Emprendimiento',
        data: [50, 52, 55, 57, 59, 60, 65],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true
      },
      {
        label: 'Innovación',
        data: [43, 47, 50, 53, 55, 60, 62],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Emprendimiento vs Innovación'
      }
    }
  }
});