export class Human {
	constructor({name, cars=[]}={}) {
		this.cars=cars;
		this.name=name;
		this.creation=new Date();
	}

	greet(other) {
		return "Bonjour " + other.name + " !";
	}

	showOff(other) {
		if (!other || !(other.cars)) {
			throw new Error(`${this.name} est trop modeste`);
		}
		if (other.cars.length < this.cars.length) {
			return "J'ai plus de voitures que " + other.name;
		}
		return "Je n'aime pas me vanter";
	}

	/**
	 * will rest for [duration] seconds.
	 */
	sleep(duration) {
		return new Promise((resolve, reject)=>setTimeout(() => {
			if(!(duration >=0)) {
				return reject("Je n'arrive pas à dormir!");
			}
			resolve("J'ai dormi " + duration + " seconde" + (duration>1?"s":""));
		}, duration*1000));
	}

	/**
	 * Tire un nombre au hasard entre 1 et 100000.
	 */
	_randomDraw() {
		return Math.floor(Math.random() * Math.floor(100000));
	}

	/**
	 * Une chance sur 100 000 de gagner...
	 */
	playTheLottery() {
		if (this._randomDraw() === 1) {
			return "GAGNE";
		}
		return "PERDU";
	}

	async hypnotize(other) {
		if (!other) {
			throw new Error("Paramètre de type Human obligatoire");
		}
		await other.sleep(3);
                await other.sleep(2);
		await other.sleep(1);
		return;
	}
}
