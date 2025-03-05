function angkaPrima(angka) {
    batas = Math.floor(Math.sqrt(angka))

    if(angka > 3){
        for(let i = 2 ; i <= batas ; i++ ){
            if(angka % i === 0 ){
                 return false
            }
        }
    } else{
        if(angka <= 1 ) return false ;
        if(angka <= 3 ) return true ; 
    }
    return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false