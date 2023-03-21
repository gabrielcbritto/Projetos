const search = document.querySelector(".search")
const button = document.querySelector(".btn")


button.addEventListener("click", () => {
    const link = `https://www.google.com/search?q=` + search.value
    window.open(link, '_self')
})

search.addEventListener(`keypress`, function(e) {
    if(e.key === `Enter`) {
        const link = `https://www.google.com/search?q=` + search.value
        search.click()
        window.open(link, '_self')
    }
})