function patternPrinter(n){
    for(let i=0; i<n; i++){
        var pattern = '';
        for(let j=0; j<n-i; j++){
            pattern += '*'+' ';
            
        }
        console.log(pattern);
    }
}

patternPrinter(6)