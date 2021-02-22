let n:number = 7
let k:number = 2

let output = kthFactor(n,k)

console.log(output)

function kthFactor(n: number, k: number): number {
    let factorList:number[] = []
    for(let i = 1;i<=n; i++){
        if(n%i === 0)  factorList.push(i)
    }
    console.log(factorList)
    return factorList[k-1] ?? -1
};