// Variables : var , let, const
const myVariable: string = 'Hello, TypeScript!'
const numVariable: number = 50

// Function
function greetFunction(name: string): string {
  return `Hello, ${name}!`
}
function add(a: number, b: number): number {
  return a + b
}
// Promise
const myPromise = new Promise<string>((resolve) => {
  resolve('Resolved')
})

const promiseExample: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42)
  }, 1000)
})

// Class
class NameUser {
  constructor(public name: string) {}
  speak(): string {
    return `My name is ${this.name}.`
  }
}

const myName = new NameUser('meo')
console.log(myVariable)
console.log(add(3, 4))
console.log(greetFunction('Tuan'))
console.log(`cmyName ${myName}`)
promiseExample.then((result) => console.log(result))
console.log('myPromise', myPromise)

console.log(typeof numVariable as string)
console.log(numVariable)
