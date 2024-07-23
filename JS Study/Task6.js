function findNumber(array, n){
    for(let i=0; i<array.length; i++){
        if( array[i] === n){
            console.log(i);
            break;
        } else if((array[i]%3) === 0){
            continue;
        } else if(i === (array.length -1) && array[i] != n)  {
            console.log("Target not found");
        }
    }
}

findNumber([3,5,7,23,65], 23);
