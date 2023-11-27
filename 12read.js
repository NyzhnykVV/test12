const fs = require('fs')
let text = fs.readFileSync('person.txt')

let arr = []
text = text.toString()
arr = JSON.parse(text)

arr.forEach((person, index) => {
	console.log(`${index + 1}. ${person.name} ${person.surname} ${person.birthday} ${person.email}`)
})

console.log()