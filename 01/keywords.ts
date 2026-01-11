type User = {
    readonly id: string // readonly => that cannot modify
    name: string
    email: string
    atmCardNumber?: string // ? => for optional value 
}

let myUser: User = {
    id: "1",
    name: "Aryan",
    email: "a@gmail.com",
}

// cannot modify
// myUser.id = "2";


// & => for combine multiple type
type cardNumber = {
    cardN: number
}

type cardDate = {
    cardD: string
}

type cardData = cardNumber & cardDate & {
    cvv: number
}