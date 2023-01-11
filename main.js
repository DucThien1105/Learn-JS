
// Cach 1:
// function sumTotal(number) {
//     var sum = 0;
//     for (var i = 0; i < number.length; i++) {
//         sum += number[i];
//     }
//     return sum;
// }

// var number = [1, 2, 3];

// console.log(sumTotal(number)); //6

// -------------------------------------------

// Cach 2: 
// function sumTotal(number) {
//     var sum = 0;
//     var i = 0;
//     while (i < number.length) {
//         sum += number[i];
//         i++;
//     }
//     return sum;
// };

// var number = [1, 2, 3];

// console.log(sumTotal(number)); //6

// -------------------------------------------

//Cach 3: 
    // function sumTotal(number) {
    //         var sum = 0;
    //         var i = 0;
    //         do {
    //             sum += number[i], 
    //             i++;
    //         }
    //         while (i < number.length);
    //         return sum;
    // };
    
        
    //     var number = [1, 2, 3];
        
    //     console.log(sumTotal(number)); //6

// -------------------------------------------

// Cach 4: 
    function sumTotal(number) {
            var sum = 0;
            var i = 0;
            for (var i in number) {
                sum += number[i];
                i++;
            }
            return sum;
    };
    
        
        var number = [1, 2, 3];
        
        console.log(sumTotal(number)); //6