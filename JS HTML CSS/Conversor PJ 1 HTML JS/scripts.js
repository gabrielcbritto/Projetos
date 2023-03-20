const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const dolar = 5.2
const euro = 5.9
const btc = 146.864


const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById("realValueText")
    const currencyValueText = document.getElementById("currencyValueText")


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais)


    if (select.value === "U$$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReais / dolar)
    }

    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'XBT',
        }).format(inputReais / btc)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReais / euro)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const imgCurrency = document.getElementById("img-currency")
    if (select.value === "U$$ Dólar americano") {
        currencyName.innerHTML = "Dolar americano"
        imgCurrency.src = "./assets/eua.png"
    }
    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        imgCurrency.src = "./assets/euro.png"
    }
    if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        imgCurrency.src = "./assets/btc.png"
    }
    convertValues()

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)