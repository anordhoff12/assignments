 function evenNumbers() {
        for (var i = 0; i < 100; i++){
            if ((i % 2) == 0) 
                console.log(i + ' ');
        }
    }

    function oddNumbers() {
        for (var i = 0; i < 100; i++){
            if ((i % 2) !== 0) 
                console.log(i + ' ');
        }
    }
    oddNumbers();

//alt way:
//for (var i = 0; i <= 100); i++) {
//    if((i % 2 == 0) && (i !=0)){
//        console.log("Even");
//} else if (i % 2 !=0){
//} else {
//    console.log("zero");
//}
//}

