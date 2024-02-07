//write a class to calculate the Uber price.

class uber{
constructor(kilometer,price){
  this.kilometer=kilometer;
  this.price=price;
  }
  charge(){
    return (`The charge for this uber ride of ${this.kilometer} kilometer is ${this.kilometer*this.price} rupees.`)
    }
}
var ride= new uber(25,16);
console.log(ride.charge());