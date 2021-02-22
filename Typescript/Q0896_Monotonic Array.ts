let input: number[] = [1, 2, 2, 3];
let output = isMonotonic(input);

console.log(output);

function isMonotonic(A: number[]): boolean {
    let monotone: boolean = null;
    for (let i = 1; i < A.length; i++) {
        if (monotone === null) {
            monotone =
                A[i] - A[i - 1] > 0 ? true : A[i] - A[i - 1] < 0 ? false : null;
        } else {
            console.log(monotone)
            if (monotone ? A[i] - A[i - 1] < 0 : A[i] - A[i - 1] > 0) return false;
        }
    }
    return true;
}
