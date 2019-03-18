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
});
