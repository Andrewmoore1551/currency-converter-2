import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function App() {
  const [currencyResults, setCurrencyResults] = useState({ rates: [] })
  const [amount, setAmount] = useState(1)

  // @ts-ignore
  useEffect(async () => {
    const resp = await axios.get('https://api.exchangeratesapi.io/v1/')
    ? access_key= 'd85c4f40ebc6f5bddea856130086f488'
    

    setCurrencyResults(resp.data)
  }, [])

  return (
    <div>
      <ul>
        {Object.entries(
          // @ts-ignore
          currencyResults.rates
        ).map(([currencyCode, currencyDetails]) => {
          return (
            <li key={currencyCode}>
              {currencyCode} : {(currencyDetails * amount).toFixed(2)}
            </li>
          )
        })}
      </ul>
      <input
        type="number"
        // @ts-ignore
        onChange={(event) => setAmount(event.target.value)}
        value={amount}
      />
      <footer>
        <h1>US $ Currency Converter</h1>
      </footer>
    </div>
  )
}
