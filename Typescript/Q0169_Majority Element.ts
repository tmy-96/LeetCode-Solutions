let input: number[] = [2,1,2,2,3]
let output:number = majorityElement(input)

console.log(output)

function majorityElement(nums: number[]): number {
    let elements:number[] = []
    

    nums.forEach(num=>{
        if(!elements.includes(num))
            elements.push(num)
    })
    
    console.log(elements)
    console.log(nums)
    return 1
};