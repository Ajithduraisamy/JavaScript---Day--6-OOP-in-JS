//Write a “person” class to hold all the details.

class person{
  constructor(name,age,gender,education,phone,email,nationality){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.education=education
    this.phone=phone;
    this.email=email;
    this.nationality=nationality
  }
}
var p1 = new person("Ajith",29,"Male","B.E",9445118859,"ajithduraisamy.r@gmail.com","Indian");
console.log(p1);