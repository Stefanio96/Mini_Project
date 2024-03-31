fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(value => {
        console.log(value)

        let block = document.createElement("div")

        for (const user of value) {


            let userDiv = document.createElement("div")
            userDiv.classList.add('divUSer')

            let h4 = document.createElement('h4')
            h4.href = 'user-details.html?id=' + user.id
            h4.innerHTML = `${user.name} `

            userDiv.appendChild(h4)
            block.appendChild(userDiv)

            let button = document.createElement("button")
            userDiv.appendChild(button)
            button.innerText = `Show more`
            button.classList.add('button')

            button.addEventListener("click", function (button) {
                location.href = 'user-details.html?id=' + user.id

            })
        }

        document.body.appendChild(block)

        console.log(location)

    })