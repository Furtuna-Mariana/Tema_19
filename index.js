// const func = (arg) => {
//     const i = 0
//     return i
// }

// const closurVariabile = func()

// console.log(closurVariabile)



// function createAddClosure () {
//     let variable = 2

//     function addVariable (value) {
//         variable += value;
//     }

//     function getVariableValue () {
//         return variable;
//     }
//     return {
//         add: addVariable,
//         get: getVariableValue
//     };
// }

// const addClosure = createAddClosure();

// addClosure.add(1);

// console.log(addClosure.get());



// function createMultiplyClosure () {
//     let variable = 2

//     function multiplyVariable () {
//         variable *= 2;
//     }

//     function getVariableValue () {
//         return variable;
//     }
//     return {
//         multiply: multiplyVariable,
//         get: getVariableValue
//     };
// }

// const multiplyClosure = createMultiplyClosure();

// multiplyClosure.multiply();

// console.log(multiplyClosure.get());



// function createDecreaseClosure () {
//     let variable = 2

//     function decreaseVariable () {
//         variable -= 1;
//     }

//     function getVariableValue () {
//         return variable;
//     }
//     return {
//         decrease: decreaseVariable,
//         get: getVariableValue
//     };
// }

// const decreaseClosure = createDecreaseClosure();

// decreaseClosure.decrease(1);

// console.log(decreaseClosure.get());





// const closure = function () {
//     let x = 0

//     function displayX () {
//         return x
//     }

//     function changeX(arg) {
//         x = arg
//     }
//     return [displayX, changeX]
// }

// const [displayX, changeX] = closure()

// console.log(displayX())
// changeX(1)
// console.log(displayX())




// (function (arg1) {
//     console.log(arg1)
// }('item'))



const closure = () => {
    let x = 0;

    function displayValue () {
        return x;
    }

    function addOne () {
        x++
    }

    function multiplyByTow ()  {
        x = x *2
    }

    function minusOne () {
        x--
    }   

    function changeValue (arg) {
         x = arg
    }

    return {displayValue, addOne, multiplyByTow, minusOne, changeValue}
}

const {displayValue, addOne, multiplyByTow, minusOne, changeValue} = closure()

console.log(displayValue())
addOne()
console.log(displayValue())
multiplyByTow()
console.log(displayValue())
minusOne()
console.log(displayValue())
changeValue(9)
console.log(displayValue())



