console.log('Javascript is linked')


class AlienShip{
	constructor(){
		this.hull = randomNumber(3, 6);
		this.firepower = randomNumber(2, 4)
		this.accuracy = randomNumber(.6, .8, 'dec')
	}
	receiveDamage(damage){
		this.hull -= damage;
	}
	attack(){
		if(Math.random() < this.accuracy){
			console.log('The enemy ship hit you!');
			return this.firepower;
		} else {
			console.log("The enemy ship missed it's attack");
			return 0
		}
	}
}

const ussAssembly = {
	hull: 20,
	firepower: 5, 
	accuracy: 0.7, 
	receiveDamage(damage){
		this.hull -= damage;
	},
	attack(){
		if(Math.random() < this.accuracy){
			console.log('Successful attack! You hit the enemy ship!');
			return this.firepower;
		} else {
			console.log('You missed the enemy ship!');
			return 0
		}
	}
}

//make a random number generator that will return a value between two input values
const randomNumber = (lowNum, highNum) => {
	const diff = highNum - lowNum;
	return ((Math.random() * diff) + lowNum);
}

const enemyShip = new AlienShip;

// for(let i = 0; i < 6; i++){
// 	enemyShips[i].push((new AlienShip));
// }
