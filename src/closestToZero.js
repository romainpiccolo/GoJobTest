function closestToZero(myArr) {

    if (myArr === undefined || myArr.length === 0)
        return 0;

    let save = myArr[0];

    myArr.forEach( val => {
        if (Math.abs(val) === Math.abs(save) && val > 0){
            save = val
        } else {
            if (Math.abs(val) < Math.abs(save))
                save = val
        }
    });
    return save;
}

module.exports = closestToZero;
