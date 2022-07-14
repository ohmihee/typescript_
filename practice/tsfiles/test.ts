function padLeft(value:string,padding:any):string{
    if(typeof padding === 'number'){
        return Array(padding + 1).join('')+value;
    }
    if(typeof padding === 'string'){
        return padding + value
    }
    throw new Error(`error${padding}`)
}