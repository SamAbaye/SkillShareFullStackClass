function printPattern(n){
    for(let i=1; i<=n; i++ ){
        process.stdout.write("*")
        for(let j=0; j<i; j++){
            console.log("*")
        }
    }
}
printPattern(3);
