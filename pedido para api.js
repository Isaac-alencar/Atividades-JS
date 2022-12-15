var listItems = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
  ]

function geratuamae(html) {
    /* Aqui cria o template, pra sustentar o contéudo no console */
    const template = document.createElement('template')
    /*Aqui o contéudo do template recebe o argumento com o espaço  limpo (trim())*/
    template.innerHTML = html.trim()
    /*Aqui a função deve retornar o conteudo do html deixando a template como pai*/
    return template.content.children[0]
}
listItems.map((item) =>{
    const html = `
    <div>
            <p>
             ${item.completed}
            </P>
            <p>
            ${item.userId}
            </P>
            <p>
            ${item.title}
            </P>
            <p>
            ${item.id}
            </P>
    </div>`
    document.querySelector('body').append(geratuamae(html))
})
