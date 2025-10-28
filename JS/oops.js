

//<-----[ ENCAPSULATION ]----->

class BankAccount{
     #balance;
     constructor(owner,initialBalance){
          this.#balance = initialBalance;
          this.owner = owner;
     }
     deposit(amount){
          if (amount > 0){
               this.#balance += amount;
               console.log(`Deposited +${amount}`)
          }else{
               console.log('Invalid Amount !')
          }
     }

     withdraw(amount){

          if (amount > 0 && amount <= this.#balance){
               this.#balance -= amount;
               console.log(`Amount withdrawn - ${amount}`)
          }else{
               console.log('Insufficient funds')
          }
     }
     getBalance(){
          return this.#balance
     }
}

const myAccount = new BankAccount('Kannan',1000)
console.log(myAccount.getBalance())
myAccount.deposit(500)
console.log(myAccount.getBalance())
myAccount.withdraw(600)
console.log(myAccount.getBalance())


//<-----[ ABSTRACTION ]----->

class CoffeeMachine{

     #boilWater(){
          console.log('Boiling water...')
     }
     #addBeans(){
          console.log('Adding Beans..')
     }

     makeCoffee(){
          this.#boilWater()
          this.#addBeans()
          console.log('Coffee is Ready')
     }
}

const coffee = new CoffeeMachine()
coffee.makeCoffee()


//<-----[ INHERITANCE ]----->

class Vehicle{
     constructor(brand,model){
          this.brand = brand;
          this.model = model;
     }
     start(){
          console.log(`${this.brand}-${this.model} is starting..`)
     }
}

class Car extends Vehicle{
     constructor(brand,model,speed){
          super(brand,model)
          this.speed = speed;
     }
     race(){
          console.log(`${this.brand}-${this.model} is racing at ${this.speed}m/s`)
     }
}

const c1 = new Car('Porshe','RS',399)
c1.start()
c1.race()


//<-----[ Polymorphism ]----->

class Payment{
     pay(){
          console.log('Processing payment...')
     }
}

class Upi extends Payment{
     pay(){
          console.log('Processing UPI payment...')
     }
}

class Card extends Payment{
     pay(){
          console.log('Processing CARD payment')
     }
}

const pay1 = new Upi()
const pay2 = new Card()

pay1.pay()
pay2.pay()