//.............First code...............
// function fun1(firstname){
//     function fun2(){
//         alert("HELLO"+" "+firstname)
//     }
//     fun2();
// }
// fun1("Sachin");

//.........Second code..............
// function fun1(firstname){
//     function fun2(){
//         var x=10;
//         alert("HELLO"+" "+firstname)
//     }
//     alert(x);//block k bahar hmm x ko access nhi kr sakte error ayega.
//     fun2();
// }
// fun1("Sachin");

//............Third Code.............
// function fun1(firstname){
//     var x=10;
//     function fun2(){
//         alert("HELLO"+" "+firstname)//First HELLO Sachin print hoga fir
//         alert(x);//10 bhi print hoga kyoki hmne function k bahar declare kiya hai.
//     }
//     fun2();
// }
// fun1("Sachin");

//....................NOTE........................
//