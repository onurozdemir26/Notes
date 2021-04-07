//  var a = 10;
//  var b = 20;
//  var c = 30;

//  console.log(a+b+c)

// var a = true;
// console.log(typeof a)

// var a = null
// console.log(typeof a)

// var a;
// console.log(a)

// var number = [1,2,3,4,5];

// console.log(number)
// console.log(typeof number)

// var person = {
//     name : "Onur",
//     age : 25
// }
// console.log(person)
// console.log(typeof person)

// var date = new Date();
// console.log(date)

// console.log(typeof date)

// var merhaba = function(){
//     console.log("Merhaba")
// }
// console.log(merhaba);
// console.log(typeof merhaba);

// var a = 10;
// var b = a;
// console.log(a, b)

// a = 20;
// console.log(a, b)

// var a = [1,2,3];
// var b = a;

// a.push(4);

// console.log(b)

//  VAR LET CONST FARKLARI

// var name = "Onur özdemir"

// var name = "Murat"

// console.log(name);

// let name = "Onur Özdemir"

// let name = "Murat"

// console.log(name)   // Syntax Hatası alınır!

// let a,b;

// a = 10;
// b = 20;

// console.log(a+b)

// const name = "Onur Özdemir";

// console.log(name);

// name = "Murat";

// console.log(name); // Syntax Hatası alınır!

// const a;

// a = 10;

// console.log(a) // Syntax Hatası alınır!

// const a = [1,2,3,4,5];

// console.log(a)

// a.push(6) //Mülakat sorusu! Const bu şekilde kullanılabilir.

// console.log(a)

// let value;

// Veritiplerini String'e çevirme

// value = String(123)
// value = String(3, 14)
// value = String(true)
// value = String(false)
// value = String(function () {
//     console.log()
// });
// value = String([1, 2, 3, 4])

// value = (10).toString();
// value = (3, 14).toString();

// value = Number("123");
// value = Number(null);
// value = Number(undefined);
// value = Number("Hello Word");
// value = Number(function () {
//     console.log()
// });
// value = Number([1, 2, 3, 4]);

// value = Number("3,14");
// value = parseFloat("3,14");

// value = parseInt("2");

// const a = "Hello" + 34

// console.log(a);
// console.log(typeof a);


// console.log(value);
// console.log(typeof value);

// let value;

// const value1 = 10;
// const value2 = 4;

// value = value1 + value2
// value = value1 - value2
// value = value1 / value2
// value = value1 * value2
// value = value1 % value2

// value = Math.PI;
// value = Math.E;

// value = Math.round(3.6);
// value = Math.round(3.5);
// value = Math.round(3.2);

// value = Math.ceil(3.2); // Yukarı Yuvarlar

// value = Math.floor(3.2); //Aşşağıya yuvarlar

// value = Math.sqrt(16); //Mutlak değer bulur
// value = Math.sqrt(32);

// value = Math.abs(-10); //Eskili sayıların mutlak değerini bulur

// value = Math.pow(8,3); //8 in 3.kuvvetini alır

// value = Math.max(1, -1, 100, 32); //En büyük sonucu döner
// value = Math.min(1, -1, 100, 32); //En küçük sonucu döner

// value = Math.random(); //Random sayı üretir

// value = Math.random() *20 +1 //21 ile 1 arasında sayı üretir

// value = Math.floor(Math.random() * 20 +1) //Floor metodu kullanarak karışık random


// console.log(value);


// let value;

// const firstName = "Onur";
// const lastName = "Özdemir";

// const langs = "java, python, kotlin";

// value = firstName+lastName;
// value = firstName+""+lastName;

// value ="Eray Özdemir";

// value += "Murat"; // value = value + "Murat"

// value = firstName.length;

// value = firstName.concat("",lastName,"", "Rock");

// value = firstName.toLowerCase();

// value = firstName.toUpperCase();

// value = firstName[2];

// value = firstName[firstName.length -1] //Sondan bir önceki elemanı gösterir

// value = firstName.indexOf("r"); //Karakterin kaçıncı index de olduğunu belirtir

// value = firstName.charAt(0); //Yine aynı elemen alma metodu
// value = firstName.charAt(firstName.length -1);

// //Split

// value = langs.split(",") //Elemanları parçalayıp array e yerleştirir

// //Replace

// value = langs.replace("python","Css"); //Seçtiğiniz elemanın çıkarır girdiğiniz elemanı yerleştirir

// //Includes

// value = langs.includes("java"); //Arattığınız kelime atadığınız değerin içinde varsa true yoksa false döner.

// console.log(value);

// const name = "Onur Özdemir";
// const department = "Yazılım";
// const salary = "6000";

// const a = "İsim: " + name + "\n" + "Departman: " + department + "\n" + "Maaş: " + salary; //Zor yazım şekli

// const a = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`; //Kolay yazım şekli

// console.log(a)

// function a(){
//     return "Merhaba"
// }

// const html = `
//      <ul>
//         <li>${name}</li>
//         <li>${department}</li>
//         <li>${salary}</li>
//         <li>${10/4}</li>
//         <li>${a()}</li>

//         </ul>
// `;
// document.body.innerHTML = html;

// let value;

// const numbers = [25, 45, 85, 21, 23, 25, 28];

// const langs = ["Python", "Java", "Kotlin", "JavaScript"];

// const a = ["Merhaba", 23, null];

// value = numbers.length;
//İndekslenme
// value = numbers[0];
// value = numbers[2];
// value = numbers[numbers.length - 1];
//Herhangi bir yerde index değiştirme.

// numbers[2] = 1000;

// value = numbers;

//Index of

// value = numbers.indexOf(1000);

//Arrayin sonuna değer eklemek - Push

// numbers.push(2021);

// value = numbers;

//Arrayin başına değer eklemek - unshift

// numbers.unshift(2020);

//Sonundan değer atma

// numbers.pop();

// value = numbers;

//Başından değer atma

// numbers.shift()

// value = numbers;

//Belirtilen indexlerde ki değerleri atma örnek 0 dan 3. index e kadar 3 eleman atıldı.

// numbers.splice(0, 3);

// value = numbers;

// Array i tam tersine çevirme Reverse

// numbers.reverse();

// value = numbers;

// value = numbers.sort();

// value = numbers.sort(function (x, y) { //Küçükten büyüğe
//     return x - y;
// });

// value = numbers.sort(function (x, y) { //Büyükten küçüğe
//     return y- x;
// });

// console.log(value);

// let value;

// const programmer= {
//     name : "Onur Özdemir",
//     age : 25,
//     email : "onurozdemiroffical@gmail.com",
//     langs : ["Html","Css","JavaScript"],

//     adress : {
//         city : "Eskişehir",
//         street : "Bolbay",
//     },

//     work : function(){
//         console.log("Programcı Çalışıyor...");
//     }
// }

// value = programmer;

// value = programmer.email; //Tek objeleri böyle çağırıyoruz

// value = programmer.langs;

// value = programmer.adress.city; 

// programmer.work();

// const programmers = [
//     {name:"Onur Özdemir", age:23},
//     {name : "Eray Özdemir", age:18}
// ];

// value = programmers[0]; //Sıfırıncı index onur olduğu için onur çağırdı

// value = programmers[0].name;

// console.log(value)

// let value;

// const now = new Date(); //Şuanki zamanı almamızı sağlar

// console.log(now)

// const date1 = new Date("02-03-1997 07:00:00");

// const date2 = new Date("March 02 1997");

// const date3 = new Date("02/03/1997"); //Yabancı ülke kullanımı :)

// value = date1;

// value = date1.getMonth();
// value = date1.getDate();
// value = date1.getDay();

// value = date1.getHours();
// value = date1.getMinutes();
// value = date1.getSeconds();
// value = date1.getMilliseconds();

// date1.setMonth(7); //Sonradan tarihleri değiştirme

//Get getirir Set oluşturur unutma!

// date1.setDate(15);
// date1.setFullYear(2001);

//Geri kalanları da aynı şekilde değiştirilebilir.

// value = date1

// console.log(value);

// Operatörler

// console.log(2 == "2");

// console.log(2 === "2");

// console.log(4 > 2);

// console.log(2 > 4);

// console.log(2 != 4);

// console.log(2 < 4);

// console.log(4 < 2);

// console.log(4 >= 2);

// console.log(4 <= 2);

// console.log(2 <= 2);

//Mantıksal Bağlaçlar

//Not Operatörü

// console.log(!(2 == 2));

// console.log(!(!2 == 2));

// And Operatörü //Biri yanlış olursa false

// console.log((2 == 2) && ("onur" == "onur"));

// console.log((4 == 2) && ("onur" == "onur"));

// Or Operatörü //Biri yanlış olsa dahi true

// console.log((4 == 2) || ("Onur" == "Onur"));

// const error = false;

// if (error == true){
//     console.log("Hata oluştu");
// }else{
//     console.log("Hata olmadı")
// }

// const user = "mmc";

// if (user ==="mmc"){
//     console.log("Başarılı Kullanıcı")
// }else{
//     console.log("Kullanıcı bulunmadı")
// }

// const process = "1";

// if (process === "1"){
//     console.log("İşlem 1")
// }else if(process === "2"){
//     console.log("İşlem 2")
// }else if(process === "3"){
//     console.log("İşlem 3")
// }else if(process === "4"){
//     console.log("İşlem 4")
// }else{
//     console.log("Geçersiz işlem")
// }

// const number = 101;

// if(number === 100){
//     console.log("Sayı 100'e eşit")
// }else{
//     console.log("Sayı 100'e eşit değil")
// }

//Ternary Operatör

// console.log(number === 100 ? "Sayı 100" : "Sayı 100 değil");

//Tek işlem varsa süslü parantez kullanmamıza gerek yok

// if (number === 100) console.log("Sayı 100");
// else console.log("Sayı 100 değil")

// const process = 3;

// switch(process){
//     case 1:
//         console.log("işlem1");
//         break;
//     case 2:
//         console.log("işlem2");
//         break;
//     case 3:
//         console.log("işlem3");
//         break;

//     default:
//         console.log("Geçersiz işlem")    
// }

//  function merhaba(name,age){
//      console.log(`isim ${name} yaş:${age}`);
//  }
//  merhaba("Murat", 23) //Fonksiyon çağırmayı unutma yoksa çalışmaz!

// IIFE Fonksiyon

// (function(name){
//     console.log("merhaba: " + name)
// }("Onur "))

// const database = {
//     host: "localhost",
//     add: function(){
//         console.log("Eklendi");
//     },
//     get: function(){
//         console.log("Getirildi")
//     },
//     update: function(id){
//         console.log(`Id: ${id} Güncellendi`);
//     },
//     delete: function(id){
//         console.log(`Id: ${id} Silindi`);
//     }
// }

// console.log(database.host),

// database.add();
// database.delete(10);

//While Döngüleri

// let i =0;

// while(i < 10){ //Sonsuz Döngü
//     console.log(i)

//     i++;

// }

//  const langs = ["ptyhon","javascript","java"];

// let index = 0;

// while (index < langs.length){
//     console.log(langs[index]);
//     index++;
// }

// for (let index = 0;index < langs.lenght;index++){

//     console.log(langs[index]);

// }

// langs.forEach(function(lang,index){

//     console.log(lang,index);
// })

// const users= [
//     {name:"Onur", age:23},
//     {name:"Eray", age:19},
//     {name:"Osman", age:21}
// ];

// const names = users.map(function(user){
//     return user.name;

// });
// const ages = users.map(function(user){
//     return user.age
// })
// console.log(names);
// console.log(ages);

// const user ={
//     name :"Onur",
//     age:23
// };

// for(let key in user){
//     console.log(key,user[key]);
// }

// alert("merhaba");


// if(confirm("Emin misiniz?")){
//     console.log("Silin gitsin")
// }else{
//     console.log("Silmeyin")
// }

// const cevap = prompt("2+2= ?");

// console.log(cevap)
// console.log(typeof cevap)

// if (cevap == "4"){
//     console.log("Doğru");
// }else{
//     console.log("Yanlış!");
// }

// let value ;

// value = window.location.hostname;
// value = window.location.port;
// value = window.location.href;

// if (confirm("Sayfa Yenilensin mi?")){
//     window.location.reload()

// }else{
//     console.log("Sayfa Yenilenmedi")
// }

// console.log(value)

// value= window.outerHeight;
// value= window.outerWidth;

// value = window.scrollX;
// value = window.scrollY;

// console.log(value)

//Function Scope,Global Scope,Block Scope

//Global Scope

//  var value1 = 10;
//  let value2= 20;
//  const value3= 30;

// console.log(value1,value2,value3)

// function Func(){
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1,value2,value3)
// }
// Func()

// if (true){

//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a,b,c);

// }


//  if (true){

//     var value1 = 10;
//     let value2 = 20;
//     const value3 = 30;
//     console.log(value1,value2,value3);

// }

//  console.log(value1);
//  console.log(value2);
//  console.log(value3);

// let a = "123456";

// if(true){
//     var a ="5545485";
// }
