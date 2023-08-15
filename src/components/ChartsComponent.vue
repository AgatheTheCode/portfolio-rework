<script setup lang="ts">
import { defineComponent } from 'vue'
import { BarChart, DoughnutChart, LineChart, PieChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import { ref } from 'vue'
Chart.register(...registerables)
///LETIABLES
let labels: any = []
let labelName: string
let data: any = []
let datum: number
let colors: any = []
let colorSingle: string

function MyChart() {
  labels = ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre']
  data = [30, 40, 60, 70, 5]
  colors = ['#77CEFF', '#63ab51', '#123E6B', '#97B0C4', '#A5C8ED']
}

MyChart()
///REF
let testData = ref({
  labels: labels,
  datasets: [
    {
      data: data,
      backgroundColor: colors
    }
  ]
})
</script>

<template>
  <DoughnutChart :chartData="testData" />
  <BarChart :chartData="testData" />
  <LineChart :chartData="testData" />
  <BarChart :chartData="testData" />
  <PieChart :chartData="testData" />
</template>

<style scoped></style>
