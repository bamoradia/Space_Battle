console.log('Javascript is linked')


class AlienShip{
	constructor(){
		//use random numbers to generate stats for each instatiation of the class
		this.hull = randomNumber(3, 6);
		this.firepower = randomNumber(2, 4)
		this.accuracy = randomNumber(.6, .8, 'dec')
	}
	//reduces the hull strength by the firepower of the opposing ship
	receiveDamage(damage){
		this.hull -= damage;
	}
	//made an attack method which uses a random number to determine if the attack was succesful or not
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
//make the human ship object
const ussAssembly = {
	//assign it standard properties
	hull: 20,
	firepower: 5, 
	accuracy: 0.7, 
	//make a receive damage method which will reduce hull strengh by the firepower of the opposing ship
	receiveDamage(damage){
		this.hull -= damage;
	},
	//made an attack method which uses a random number to determine if the attack was succesful or not
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


const battle = (ship1, ship2) => {
	ship2.receiveDamage(ship1.attack());
	if (ship2.hull > 0) {
		ship1.receiveDamage(ship2.attack());
		if(ship1.hull <= 0) {
			console.log("You're ship is defeated!");
		}
	} else {
		console.log("You defeated the enemy ship!");
	}
	return
}

let count = 0;
//make a loop to continue battling one ship until either's hull goes to 0
while(enemyShip.hull > 0 && ussAssembly.hull > 0 && count < 7) {
	battle(ussAssembly, enemyShip);
	count++;
}
