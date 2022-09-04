x = 1
z = 2
y = 3
function unequal(x,y,z) {
    if (x !== z || y !== z || x !== y) {
        console.log('True')
    }
    else {
        console.log('False')
    }
}
(unequal()