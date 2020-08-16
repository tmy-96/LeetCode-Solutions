let arr: number[] = [1,2,34,3,4,7,9,23,12]

let output: boolean = threeConsecutiveOdds(arr)

console.log(output)

function threeConsecutiveOdds(arr: number[]): boolean {
    if (arr.length < 3) return false

    let oddCounter = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) oddCounter += 1
        else oddCounter = 0

        if (oddCounter === 3) return true
    }
    return false
}
