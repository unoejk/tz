const deepClone=(target)=>{
    if (target===null){
        return null
    }
    if (Array.isArray(target)){
        const newArray=Array(0)
        for (let num in target){
            newArray.push(deepClone(target[num]))
        }
        return newArray
    }
    if (typeof target==='object'){
        const newObject=Object.create(Object.prototype)
        for (let name in target){
            newObject[name]=deepClone(target[name])
        }
        return newObject
    }
    return target
}

export {deepClone}