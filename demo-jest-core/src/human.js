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

	display(containerId) {

		let html = `<div id="name">Je suis ${this.name}</div><div id="children">Je n'ai pas d'enfant.</div><div id="cars">J'ai ${this.cars.length} voiture(s) `;
		for  (let i =0;i<this.cars.length;i++) {
			let car_url = (this.cars[i]==="bmw")?'https://sf2.viepratique.fr/wp-content/uploads/sites/9/2018/06/p90307459_highres-547x410.jpg':"https://cdn.auto-ies.com/catalog/product/cache/1/image/660x/17f82f742ffe127f42dca9de82fb58b1/r/i/rio-cv_4.jpg";
			html += `<span><img id="car${i}" style="height:200px" src="${car_url}"></span>`;
		}
		html += `</div>`;

		const container = document.getElementById(containerId);
		container.innerHTML += html;
	}
}
