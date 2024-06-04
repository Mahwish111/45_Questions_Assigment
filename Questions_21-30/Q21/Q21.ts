// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    name:string
    Price:number
}
// Create two Objects
const book: item ={
    name: 'ESSENTIAL TYPSCRIPT',
    Price: 450
}
const fruit: item={
    name: 'apple',
    Price: 200
}
console.log(`book name: ${book.name}, Price: ${book.Price}`)
console.log(`fruit name: ${fruit.name}, Price: ${fruit.Price}`) 