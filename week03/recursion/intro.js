const print0toNum = (num) => {
    if (num >= 0) {
        console.log(num)
        num--
        print0toNum(num)
    }
}
print0toNum(10)