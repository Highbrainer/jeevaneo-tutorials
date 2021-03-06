import * as demo from '../src/module.js';

test('name', () => {
	const mike = new demo.Human({name:'Mike'});
	expect(mike.name).toBe('Mike');
	expect(mike).toEqual(expect.objectContaining({name:'Mike', cars:[]}));
});

test('creation', () => {
	const mike = new demo.Human({name:'Mike'});
	expect(mike.creation).toEqual(expect.any(Date));
	expect(mike).toEqual(expect.objectContaining({creation:expect.any(Date)}));
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



test('no children at birth', () => {
	const mike = new demo.Human({name:'Mike'});
	// Verirfy that mike has no children yet!
	// Try ugin .toBeUndefined, .toBeFalsy, .toBeTruthy and maybe .not!
});
