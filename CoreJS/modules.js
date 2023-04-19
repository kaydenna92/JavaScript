class Food { 
    #foodList = ['orange', 'apple']
    get getFood() {
        return this.#foodList;
    }
}

const food = new Food();
console.log(food.getFood)
console.log(food.#foodList)