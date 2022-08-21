

//  1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// let n = 21;
// divide(n)

// function divide(n) {
//     if (n % 3 == 0 && n % 7 == 0) {
//         console.log("Divide");
//     }
//     else
//     console.log("Not divide");
// }

// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 


// function factorial(number) {
//     let answer = 1;
//     if (number == 0) {
//         answer = 0;
//         return answer;
//     }
//     for (let i = number; i >= 1; i--) {
//         answer = answer * i;
//     }
//     return answer;
// }

// console.log(factorial(7));


// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
   
// let arr = [1, 4, 5, 6, 8, 10];
   
//   function square(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             sum+= Math.pow(array[i],2)
//         }
//     }

//     console.log(sum);

// }
// square(arr)


//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

//     let email ="cavid@code.edu.az"
//     let password = "12345"

//     login("cavid@code.edu.az","12345")

//    function login(email, password){

//     if (email == "cavid@code.edu.az" && password == "12345") {
//         console.log("Accessed");
//     }
//     else{
//       console.log("Email or password is wrong");
//     }
//   }


//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

//   let arr = [1,2,3,5,6,7,8];

//    oddNumber(arr);

//     function oddNumber(array){
//         let sum = 0;
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] % 2 == 1) {
//                 sum+= array[i];
//             }

//         }
//         console.log(sum)

//     }

// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let arr = [1, 2, 3, 4, 6, 7, 9, 10, 11, 12]

// function numberOfCouples(array) {
//     let count = 0;

//     for (let i = 0; i < array.length; i++) {
//        if (array[i] % 2 == 0) {

//          count++;
//        }
        
//     }
//     console.log(count);
// }
//      numberOfCouples(arr)
