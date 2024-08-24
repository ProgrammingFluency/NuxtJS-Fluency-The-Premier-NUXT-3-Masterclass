<template>
    <div>
      <h1>Currency Converter</h1>
      <br>
      <select v-model="fromCurrency" >
        <option value="USD">USD (US Dollar)</option>
        <option value="EUR">EUR (Euro)</option>
        <option value="JPY">JPY (Japanese Yen)</option>
        <option value="GBP">GBP (British Pound)</option>
        <option value="AUD">AUD (Australian Dollar)</option>
        <option value="EGP">EGP (Egyptian Pound)</option>
      </select>

      <select v-model="toCurrency" >
        <option value="USD">USD (US Dollar)</option>
        <option value="EUR">EUR (Euro)</option>
        <option value="JPY">JPY (Japanese Yen)</option>
        <option value="GBP">GBP (British Pound)</option>
        <option value="AUD">AUD (Australian Dollar)</option>
        <option value="EGP">EGP (Egyptian Pound)</option>
      </select>

      <br>
      <input type="number" v-model="amount" placeholder="Enter amount" >

      <br><br>

      <button @click="execute">Convert</button>

      <div v-if="conversionRate && amount" >
        <h1>
            {{ amount }} {{ fromCurrency }} equals {{ amount * conversionRate }} {{ toCurrency }}
        </h1>
      </div>

    </div>
</template>

<script setup>
    const apiKey = 'GW56WL98CFBFWP9S'
    const fromCurrency = ref('USD')
    const toCurrency = ref('EUR')
    const conversionRate = ref(null)
    const amount = ref('')

    const {data, execute} = await useFetch(() => {
        return `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency.value}&to_currency=${toCurrency.value}&apikey=${apiKey}`
    }, {
        immediate: false,
        transform: data => {
            conversionRate.value = Number(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
        }
    })

</script>