//1

var itemsArray = [
    {name:"juice",price:50, quantity:3},
    {name:"cookie",price:30, quantity:9},
    {name:"shirt",price:880, quantity:1},
    {name:"pen",price:100, quantity:2}];


    var gtotal = 0;
for ( var i=0;i<itemsArray.length;i++)
{
    
    var total = 0
    
 var item= console.log("item "+i + " price is "+(itemsArray[i].price*itemsArray[i].quantity));
gtotal+= (itemsArray[i].price*itemsArray[i].quantity); 


     

}
console.log("total items price is " + gtotal);

//2

let person = {name:"Ali", email:"ali123@gmail.com", password:"ali123", age:"24",
 gender:"male",city:"karachi",country:"pakistan"};

console.log(person.hasOwnProperty('age'));     // => true
console.log(person.hasOwnProperty('country'));
console.log(person.hasOwnProperty('firstName'));
console.log(person.hasOwnProperty('lastName'));

//3


function student(firstname,lastname,age)
{this.firstname = firstname;
this.lastname = lastname;
this.age = age;}

var student1= new student("usman","nadeem",26);
console.log(student1);

//4


function population(name,gender,address,education,profession)
{this.name=name;
 this.gender=gender;
 this.address=address;
 this.education=education;
 this.profession=profession;
 }

 var std,add,educ,profession,gen;
 function datasave(){
 
    std=  document.getElementById('std').value;
        console.log(std);

         add=  document.getElementById('addr').value;
        console.log(add);

         educ=  document.getElementById('edu').value;
        console.log(educ);
     

          profession=  document.getElementById('prof').value;
         console.log(profession);
     

        
        if (document.getElementById('gen').checked) {
         gen=  document.getElementById('gen').value;
        console.log(gen);
         }
         else
         {
             console.log('female');
         }

         
         
     }
     
     