// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress : "Eskişehir odunpazarı"
};

 function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
 }

 function updateEmployeeWithKeyAndValue(obj, key, value){
    let newObj = {...obj};
    newObj[key] = value;
    return newObj;
 }

 function deleteFromEmployeeByKey(obj, key){
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
 }

 function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
 }