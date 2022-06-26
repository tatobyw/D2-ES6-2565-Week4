function* gen(){
    yield 100
    yield
    yield 200
}

const mygen = gen()
console.log(mygen.next().value)
console.log(mygen.next().value)
console.log(mygen.next().value)