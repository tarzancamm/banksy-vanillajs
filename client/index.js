const urbanForm = document.getElementById('urban-form')
const urbanInput = document.querySelector('#urban-input')
const urbanAnswer = document.querySelector('#urban-answer')


const urbanHandler = (e) => {
    e.preventDefault()

    let param = urbanInput.value

    const options = {
        method: 'GET',
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: {term: param},
        headers: {
            'X-RapidAPI-Key': '7577c3e02cmsh371a88f3003f950p18dd14jsn1ca1dbe86336',
            'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
          }
    }

    axios.request(options)
        .then((res) => {
            console.log(res.data.list[0].definition)
            let definition = res.data.list[0].definition

            //! innerHTML option also works
            // let answerCard = `<p>${definition}</p>`
            // urbanAnswer.innerHTML += answerCard

            const sentence = document.createElement('p')
            sentence.textContent = definition
            urbanAnswer.appendChild(sentence)

        })
        .catch((err) => {
            console.log(err)
        })
}

urbanForm.addEventListener('submit', urbanHandler)