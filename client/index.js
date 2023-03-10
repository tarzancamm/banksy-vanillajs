const urbanForm = document.getElementById('urban-form')
const urbanInput = document.querySelector('#urban-input')


const urbanHandler = (e) => {
    e.preventDefault()

    let param = urbanInput.value
    console.log(param)

    axios.get()
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

urbanForm.addEventListener('submit', urbanHandler)