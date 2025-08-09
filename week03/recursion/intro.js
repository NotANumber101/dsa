const print0toNum = (num) => {
    if (num >= 0) { // recursive call
        console.log(num)
        num--
        print0toNum(num)
    } else {
        console.log('all done') // base case
        return
    }
}
// print0toNum(10)

const print0toNumV2 = (num) => {
    if (num >= 0) {
        console.log(num)
        print0toNum(num-1)
    } else {
        console.log('all done')
        return
    }
}
print0toNumV2(10)