console.log('Javascript is linked')


class AlienShip{
	constructor(){
		this.hull = randomNumber(3, 6);
		this.firepower = randomNumber(2, 4)
		this.accuracy = randomNumber(.6, .8, 'dec')
	}
}

//make a random number generator that will return a value between two input values
const randomNumber = (lowNum, highNum) => {
	const diff = highNum - lowNum;
	return ((Math.random() * diff) + lowNum);
}


const enemyShip1 = new AlienShip;

