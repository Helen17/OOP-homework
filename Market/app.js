var market = new Market(allProducts);

market.findProduct('banana');
market.findProduct('tomato');
market.findProduct('iceCream');
market.findProduct('pepper');
market.findProduct('cake');
market.findProduct('mango');
market.buy(banana,2);
market.buy(tomato,3);
market.buy(iceCream,3);
market.buy(pepper,2);
market.buy(cake,1);
market.buy(mango,1);

console.log("-----------BILL-----------");
market.getbill(banana);
market.getbill(tomato);
market.getbill(iceCream);
market.getbill(pepper);
market.getbill(cake);
market.getbill(mango);

market.sum();
