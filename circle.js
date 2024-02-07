//Circle - Class
//Convert the UML diagram to Typescript class.

class circle{
    constructor(radius,colour){
      this.radius=radius;
      this.colour=colour;
      }
      getradius(){
        return(`The radius of the circle is ${this.radius}.`)
        }
        getcolour(){
          return (`The colour of the circle is ${this.colour}.`)
          }
          getarea(){
            return (`The area of the circle is ${Math.PI*this.radius*this.radius}.`)
            }
            getcircumference(){
              return (`The circumference of the circle is ${2*Math.PI*this.radius}.`)
              }
              tostring(){
                return(`Circle[radius=${this.radius},colour=${this.colour}]`)
                }
  }
  var r= new circle(1.0,"red")
  console.log(r);
  console.log(r.getradius());
  console.log(r.getcolour());
  console.log(r.getarea());
  console.log(r.getcircumference());
  console.log(r.tostring());