/*function printData() {
    this.x = 0;
    this.foo = function () {
      this.x = this.x + 1;
      console.log("your value", this.x);
    };
  }
  
  let a = new printData();
  console.log(a);
  a.foo();
  a.foo();
  a.foo();
  a.foo();
  a.foo();*/
  
//    function Person(x) {
//    this.name = x;
//  }

//  var p1 = new Person("Venkat");

//  console.log(p1.name);

// class Person {
//   constructor(x) {
//     this.name = x;
//   }
// }

// var p = new Person("Abhisek");
// console.log(p);
// console.log(p.name);

// class calculator{
//   constructor(a,b){
//     this.sum=a + b;
//     this.mult=(a * b);
//     this.sub=(a-b);
//     this.div=(a/b);
//   }
// }
// var r=new calculator(5,3);
// console.log(r.mult);

// Class for storing a person's details.//

// class Person{
//   constructor(first,last,age,ht,wt,nat,){
//     this.firstname=first;
//     this.lastname=last;
//     this.Age=age;
//     this.height=ht;
//     this.weight=wt;
//     this.nationality=nat;
//   }
// }

// var jay=new Person('Jayanth','Kumar',24,170,58,'Indian');
// console.log(jay);


// Class for calculating circumference of a circle.//
// class circum{
//   constructor(r){
//     const x=2;
//     const pi=3.14;
//     this.radius=r;
//     this.circumference=x*pi*r;
    
//   }
// }

// var circ= new circum(3);
// console.log(circ);

// Class for calculating uber price.//

// class uber{
//   constructor(km){
//     const bc=15;
//     const ppkm=7;
//     this.kms=km;
//     this.price=bc+ppkm*km;
//   }
// }

// var estprice= new uber(4);
// console.log(estprice);

// Class for movies//

// class movies{
//   constructor(title,stud,rati){
//     this.movietitle=title;
//     this.studio=stud;
//     this.rating="PG";
//     this.getpg=function(title){
//       return this.movietitle ==(this.rating="PG");
//     }
//   }
// }

// var mv= new movies("Casino Royale","Eon Productions","R");
// console.log(mv);