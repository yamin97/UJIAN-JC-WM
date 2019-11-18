function lelang(menit){ 
    var output = ''
    // for (var a = 0 ; a<=menit; a=1){
        // for ( var b = 0 ; b<a; b++){
            output += ((menit*0.2)+1)*10000
        // }
        // if(a !== 10){
        // output += '\n'
        // }       
    // }
return output
}

console.log(lelang(10))
console.log(lelang(50))
console.log(lelang(49))
