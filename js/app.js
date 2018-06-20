console.log('Javascript is linked')


class AlienShip{
	constructor(){
		//use random numbers to generate stats for each instatiation of the class
		this.hull = randomNumber(3, 6);
		this.firepower = randomNumber(2, 4)
		this.accuracy = randomNumber(.6, .8)
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

// const enemyShip = new AlienShip;


const enemyShips = [];
for(let i = 0; i < 6; i++){
	enemyShips.push(new AlienShip());
}

//takes the two ships as inputs
const battle = (ship1, ship2) => {
	//the first ship attacks the second ship
	ship2.receiveDamage(ship1.attack());
	//check if ship 2 is destroyed
	if (ship2.hull > 0) {
		//ship 2 attacks ship 1
		ship1.receiveDamage(ship2.attack());
		//checks if ship 1 is detroyed
		if(ship1.hull <= 0) {
			console.log("You're ship is defeated!");
		}
	//if ship 2 was destroyed first	
	} else {
		console.log("You defeated the enemy ship!");
		promptUser();
	}
	return
}

//function to prompt user what action to take next after defeating enemy ship
const promptUser = () => {
	//asks user for input to continue or retreat
	let userInput = window.prompt(`Your ship has ${ussAssembly.hull} hull strength left. Would you like to continue to the next enemy or would you like to retreat? (Enter continue or retreat.)`);
	let loop = true;
	//keeps looping unless there is match
	while(loop) {
		//if user wants to continue
		if(userInput.toLowerCase() === 'continue'){
			loop = false;
			return
		//if user wants to retreat	
		} else if (userInput.toLowerCase() === 'retreat') {
			loop = false;
			stay = false;
			return 
		//user provided a non valid response continues looping 
		} else {
			userInput = window.prompt(`Please enter a valid response. Your ship has ${ussAssembly.hull} hull strength left. Would you like to continue to the next enemy or would you like to retreat? (Enter continue or retreat.)`)
		}
	}	
}





// let stay = 0;
// //make a loop to continue battling one ship until either's hull goes to 0
// while(enemyShip.hull > 0 && ussAssembly.hull > 0 && stay < 7) {
// 	battle(ussAssembly, enemyShip);
// 	stay++;
// }

























