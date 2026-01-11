type student = {
    name: string
    rollNo: number
    mobile: number
    gender: string
    isPass: boolean
    isPresent: boolean
}

function data(s: student): student {
    return({name: "Aryan", rollNo: 1, mobile: 111, gender: "male", isPass: true, isPresent: true});
}