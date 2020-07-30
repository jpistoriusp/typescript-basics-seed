class Pizza {
    name: string;
    toppings: string[] = []

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);



//INTERFACES WITH FUNCTIONS
// interface Sizes {
//     sizes: string[];
// }

// interface Pizza extends Sizes {
//     name: string;
//     toppings?: number;
//     getAvalibleSizes(): void;
//     [key: number]: string;
// };

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//     return {
//         name,
//         sizes,
//         getAvalibleSizes() {
//             return this.sizes;
//         }
//     };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza[1] = 'xyz';
// pizza.toppings = 1;


//TYPE ASSERTIONS
// type Pizza = { name: string, toppings: number };

// const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5};

// const serialized = JSON.stringify(pizza);

// function getNameFromJSON(obj: string) {
//     return (<Pizza>JSON.parse(obj) as Pizza).name;
// }

// getNameFromJSON(serialized);


//TYPE ALIASES
// type Size = 'small'| 'medium' | 'large';
// type Callback = (size: Size) => void;

// let pizzaSize: Size = 'small';

// const selectSize: Callback = (x) => {
//     pizzaSize = x;
// };

// selectSize('medium');



//TUPLE - FIXED ARRAY TYPE
// let pizza: [boolean, string, number];

// pizza = [true, 'Peppernoi', 20];


// ARRAY TYPES GENERIC
// let sizes: number[];

// sizes = [1,2,3];

// let toppings: Array<string>;

// toppings = ['pepperoni', 'tomatoe', 'bacon'];



// OBJECT TYPES
// let pizza: { name: string, price: number; getName(): string } = {
//     name: 'Plain Old Pepperoni',
//     price: 20,
//     getName() {
//         return pizza.name;
//     }
// };

// console.log(pizza.getName());



// DEFAULT PARAM FUNCTIONS
// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y = 1) => x * y;

// const sum = sumOrder(25);

// console.log(`Total sum: ${sum}`);



// OPTIONAL PARAMETERS
// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y) => {
//     if (y) {
//         return x * y;
//     }
//     return x;
// }

// const sum = sumOrder(25);

// console.log(`Total sum: ${sum}`);



// TYPED FUNCTION SIGNATURE
// let sumOrder: (price: number, quantity: number) => number;

// sumOrder = (x, y) => x * y;

// const sum = sumOrder(25, 2);

// console.log(`Total sum: ${sum}`);


// UNION AND LITERAL TYPES
// let pizzaSize: number = 1;

// function selectSize(size: 1 | 2 | 3): void {
//     pizzaSize = size;
// }

// selectSize(3);

// console.log(`Pizza size: ${pizzaSize}`);



// DOUBLE ASSIGN VARIABLE TYPES
// let coupon: string | null = 'pizza25';

// function removeCoupon(): void {
//     coupon = null;
// }

// console.log(coupon);

// removeCoupon();

// console.log(coupon);



// NEVER RETURN TYPE
// function orderError(error: string): never {
//     throw new Error(error);
//     // never going to return a value!
// }

// orderError('Something went wrong');



// VOID RETURN TYPE
// let selectedTopping: string = 'pepperoni';

// function selectTopping(topping: string): void {
//     selectedTopping = topping;
// }

// selectTopping('bacon');

// console.log(selectedTopping);


// EXPLICIT vs IMPLICIT TYPES
// let implicitCoupon = 'pizza25';
// let explicitCoupon: string = 'pizza25';



// TYPE ANY
// let coupon;

// coupon = 25;
// coupon = 'pizza25';
// coupon = true;


// BOOLEAN
// const pizzas: number = 2;

// function offerDiscount(orders: number): boolean {
//     return orders >= 3;
// }

// if (offerDiscount(pizzas)) {
//     console.log(`You're entitled to a discount!`);
// } else  {
//     console.log(`Order more than 3 pizzas for a discount!`);
// }


// STRING
// const coupon: string = 'pizza25';

// function normalizeCoupon(code: string): string {
//     return code.toUpperCase();
// }

// const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

// console.log(couponMessage);


// NUMBER TYPES
// const pizzaCost: number = 10;
// const pizzaToppings: number = 5;

// function calculatePrice(cost: number, toppings: number) {
//     return cost + 1.5 * toppings;
// }

// const cost: number = calculatePrice(pizzaCost, pizzaToppings);
// console.log(`Pizza cost:  ${cost}`);
// parseInt('15', 10);


// DESTRUCTURING ARRAYS AND OBJECTS
// const pizza = {
//     name: 'Pepperoni',
//     toppings: ['pepperoni']
// };

// function order({ name: pizzaName, toppings: pizzaToppings }: any) {
//     return { pizzaName, pizzaToppings };
// }

// const { pizzaName } = order(pizza);

// const toppings = ['pepperoni', 'bacon', 'chilli'];

// const [ first, second, third ] = toppings;

// function logToppings([ first, second, third ]: any) {
//     console.log(first, second, third);
// }

// logToppings(toppings);


// OBJECT SPREAD OPERATOR
// const pizza = {
//     name: 'Pepperoni'
// };

// const toppings = ['pepperoni'];

// const order = {
//     ...pizza,
//     toppings
// };

// const finalOrder = { ...order };

// console.log(finalOrder);


// ARRAY SPREAD OPERATOR
// const toppings = ['bacon', 'chilli'];

// const newToppings = ['pepperoni'];

// const allToppings = [...newToppings, ...toppings];

// console.log(allToppings);


// REST PARAMETERS
// function sumAll(message, ...arr) {
//     console.log(arguments);
//     return arr.reduce((prev, next) => prev + next);
// }

// const sum = sumAll('Hello!',1,2,3,4,5,6,7,8,9,10);

// console.log(sum);


// OBJECT LITERAL IMPROVEMENTS
// const pizza = {
//     name: 'Pepperoni',
//     price: 15,
//     getName() {
//         return this.name;
//     }
// };

// console.log(pizza.getName());

// const toppings = ['pepperoni'];

// function createOrder(pizza, toppings) {
//     return { pizza, toppings };
// }

// console.log(createOrder(pizza, toppings));

// OVERWRITING PARAMATERS
// function multiply(a, b = 25) {
//     return a * b;
// };

// console.log(multiply(5));
// console.log('overwriting ' + multiply(5, 35));


// ARROW FUNCTIONS
// const pizzas = [
//     { name  : 'Pepperoni', toppings: ['pepperoni'] }
// ];

// const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

// console.log(mappedPizzas);

// const pizza = {
//     name: 'Blazing Inferno',
//     getName: function() {
//         console.log(this.name);
//     },
// };

// console.log(pizza.getName())