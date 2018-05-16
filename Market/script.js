
class Item{
    constructor(category,name,price,weight){
        this.category = category;
        this.name = name;
        this.price = price;
        this.weight = weight;
    }
}


const tomato = new Item('Vegetables', 'tomato', 3, 0.100);
const cucumber = new Item('Vegetables', 'cucumber', 4, 0.100);
const onion = new Item('Vegetables', 'onion', 2.5, 0.075);
const carrot = new Item('Vegetables', 'carrot', 4.5, 0.075);
const pepper = new Item('Vegetables', 'pepper' , 8, 0.150);

const banana = new Item('Fruits', 'banana', 10, 0.120,15);
const strawberry = new Item('Fruits', 'strawberry', 5, 0.050);
const mango = new Item('Fruits', 'mango', 40, 0.400);
const pineapple = new Item('Fruits', 'pineapple', 75, 2);
const apple = new Item('Fruits', 'apple', 7, 0.150);

const chocolate = new Item('Sweets', 'chocolate', 30, 0.100);
const cookies = new Item('Sweets', 'cookies', 65, 1);
const iceCream = new Item('Sweets', 'iceCream', 20, 0.100);
const marshmallows = new Item('Sweets', 'marshmallows', 25, 0.500);
const cake = new Item('Sweets', 'cake', 150, 1);

let allProducts = [tomato, tomato, tomato, tomato, cucumber, cucumber, cucumber, onion, onion, carrot, carrot, carrot, carrot, carrot, pepper, pepper, pepper, banana, banana, banana, banana, strawberry, strawberry, strawberry, strawberry, strawberry, strawberry, mango, mango, pineapple, apple, apple, apple, chocolate, chocolate, chocolate, chocolate, cookies, iceCream, iceCream, iceCream, iceCream, marshmallows, marshmallows, marshmallows, cake, cake, cake];
let cart = [];


class Market{

    constructor(allProducts, cart){
        this.allProducts = allProducts;
        this.cart = cart;
    }

    findProduct(name){
        for(let i=0; i< this.allProducts.length;i++){
            if(name === this.allProducts[i].name){
               return this.allProducts[i];
            }
        }
    }

    buy(Item,count) {
        let productCount = this.allProducts.filter(product => product.name === Item.name).length;
        if (count > productCount){
            console.log("There is no such quantity  " + name);
        }else{
            let countRemoved = 0;
            for (let i = this.allProducts.length-1; i > 0 && countRemoved < count; i--) {
                if (this.allProducts[i].name == Item.name) {
                    var prod = allProducts.splice(i,1);
                    cart.push(prod[0]);
                    countRemoved++;
                }
            }
        }
        return cart;
    }

    getbill(Item){
        let counter = cart.filter(product => product.name === Item.name).length;
            if(counter>=1){
                console.log("Category: "+Item.category +", Name:"+Item.name +", Pieces:" + counter + ", weight:" + (counter*Item.weight).toFixed(3) + "kg" + ", Price:" + Item.price*counter + 'hrn');
            }  
    }

    sum(){
        let sum=0;
        for(let i=0; i<cart.length;i++){
            sum = sum + cart[i].price;
        }
    console.log("SUM: " + sum + "hrn");
    }
}
   
    







