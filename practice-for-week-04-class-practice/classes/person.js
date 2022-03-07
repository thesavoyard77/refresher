// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  introduce() {
   console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(...people){
    if (typeof people != Array) console.log("introducePeople only takes an array as an argument.");
    
    people.map(person => {
      if (person instanceof Person) {
        return this.introduce(person)
      } else {
        console.log("All items in array must be Person class instances.")
      }
    })
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}