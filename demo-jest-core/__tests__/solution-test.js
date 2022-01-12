import * as demo from '../src/module.js';

describe('00 Check equality', () => {
	test('name', () => {
		const mike = new demo.Human({name:'Mike'});
		expect(mike.name).toBe('Mike');
		expect(mike).toEqual(expect.objectContaining({name:'Mike', cars:[]}));
	});
	
	test('cars', () => {
		const john = new demo.Human({name:'John', cars:["bmw", "kia"]});
		expect(john.cars).toEqual(["bmw", "kia"]);
	});
	
	test('greet OK', () => {
		const john = new demo.Human({name:'John', cars:["bmw"]});
		const mike = new demo.Human({name:'Mike'});
		const msg = john.greet(mike);
		expect(msg).toBe('Bonjour Mike !');
	});
});

describe('01 any', () => {
	test('creation', () => {
		const mike = new demo.Human({name:'Mike'});
		expect(mike.creation).toEqual(expect.any(Date));
		expect(mike).toEqual(expect.objectContaining({creation:expect.any(Date)}));
	});
});

describe('02 undefined', () => {
	test('no children at birth', () => {
		const mike = new demo.Human({name:'Mike'});
		expect(mike.children).toBeUndefined();
		expect(mike.children).toBeFalsy();
		expect(mike.children).not.toBeTruthy();
	});
});

describe('03 throw', () => {
	test('modeste si seul', () => {
		const mike = new demo.Human({name:'Mike'});
		expect(()=>mike.greet(undefined)).toThrow();
		expect(()=>mike.showOff(undefined)).toThrowError('modeste');
		expect(()=>mike.showOff(undefined)).toThrowError(/.*est trop modeste/);
	});
});


describe('04 promise', () => {
	test('dors bien.. ou pas', () => {
		const mike = new demo.Human({name:'Mike'});
		expect(mike.sleep(3)).resolves.toBe("J'ai dormi 3 secondes");
		expect(mike.sleep(1)).resolves.toBe("J'ai dormi 1 seconde");
		expect(mike.sleep(-3)).rejects.toBe("Je n'arrive pas à dormir!");
		expect(mike.sleep('cauchemar')).rejects.toBe("Je n'arrive pas à dormir!");
	});
});

describe('05 mock', () => {
	test('gagne au loto', () => {
		const mike = new demo.Human({name:'Mike'});
		jest.spyOn(mike, "_randomDraw").mockReturnValue(1);
		expect(mike.playTheLottery()).toBe("GAGNE");
	});
	
	test('ne gagne pas au loto', () => {
		const mike = new demo.Human({name:'Mike'});
		jest.spyOn(mike, "_randomDraw").mockReturnValue(0);
		expect(mike.playTheLottery()).toBe("PERDU");
	});

        jest.setTimeout(10000);
	test("comptage et paramètres d'appel", async () => {
		
		const john = new demo.Human({name:'John', cars:["bmw"]});
		const mike = new demo.Human({name:'Mike'});
		const mSleep = jest.spyOn(mike, 'sleep');
		await john.hypnotize(mike);
		expect(mSleep).toHaveBeenCalledTimes(3);
		expect(mSleep).toHaveBeenNthCalledWith(1,3);
		expect(mSleep).toHaveBeenNthCalledWith(2,2);
		expect(mSleep).toHaveBeenNthCalledWith(3,1);
	});
});

describe('07 jsdom', () => {
	test('display', () => {
		const john = new demo.Human({name:'John', cars:["bmw", "kia"]});
		
		const { JSDOM } = require('jsdom');
				
		document.body.innerHTML = "<div id='div_john'></div>";

		john.display("div_john");

		const div_john = document.getElementById("div_john");

		expect(div_john.childNodes.length === 3);
		expect([div_john.childNodes[0].id,div_john.childNodes[1].id,div_john.childNodes[2].id]).toEqual(expect.arrayContaining(["name", "children", "cars"]));
		expect(document.getElementById("name").innerHTML).toBe("Je suis John");
                expect(document.getElementById("car0")).toBeDefined();
                expect(document.getElementById("car1")).toBeDefined();

				
	});
});
