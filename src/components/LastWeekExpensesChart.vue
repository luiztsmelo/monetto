<script setup lang="ts">
const series = [
  {
    name: 'Despesas',
    data: [
      {
        x: '02/01',
        y: 15
      },
      {
        x: '03/01',
        y: 76
      },
      {
        x: '04/01',
        y: 56
      },
      {
        x: '05/01',
        y: 22
      },
      {
        x: '06/01',
        y: 167
      },
      {
        x: '07/01',
        y: 0
      },
      {
        x: '08/01',
        y: 90
      }
    ]
  }
]

const chartOptions = {
  chart: {
    type: 'bar',
    fontFamily: 'Outfit, Arial, sans-serif',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: true,
    formatter: (val: number) => {
      return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
    },
    style: {
      fontSize: '11px',
      fontWeight: 'regular'
    },
    background: {
      enabled: false,
      foreColor: '#fff',
      padding: 4,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#C52222',
      opacity: 0.75
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  xaxis: {
    position: 'bottom',
    axisTicks: {
      show: false,
      borderType: 'solid',
      color: '#78909C',
      height: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      offsetY: -3,
      style: {
        colors: '#9BA3AF'
      }
    }
  },
  yaxis: {
    show: false
  },
  fill: {
    opacity: 1
  },
  colors: ['#DC2625'],
  tooltip: {
    show: false
  },
  grid: {
    show: false
  }
}
</script>

<template>
  <div class="w-full -mb-6 -mt-2">
    <apexchart height="120" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
