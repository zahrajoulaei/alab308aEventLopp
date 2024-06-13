
function flattenArray(arr, result=[]){
    arr.forEach(val => {
    if(Array.isArray(val)){
        flattenArray(val, result)
    }
    else{
        result.push(val)
    }
    
});
return result;
}
const nestedArray = ['a',['b','c','d'], ['e',['f'],'j'],'h',['i',['j','k',['l','m']]],'n']

console.log(flattenArray(nestedArray))




// function XX(arr, result = []) {
//     arr.forEach(val => {
//         if (Array.isArray(val)) {
//             XX(val, result);
//         } else {
//             result.push(val);
//         }
//     });
//     return result;
// }

// // Example usage
// const ZA = ['a',['b','c','d'], ['e',['f'],'j'],'h']

// console.log(XX(ZA)); // Output: [1, 2, 3, 4, 5]