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
	expect(mike.children).toBeUndefined();
	expect(mike.children).toBeFalsy();
	expect(mike.children).not.toBeTruthy();
});

test('modeste si seul', () => {
	const mike = new demo.Human({name:'Mike'});
	// Check that .greet would throw an exception if called on incorrect value
	// Then verify that .showOff throws exception containing the word "modeste" if called on null
	// then check that is matches a regular expression (in this cas : it ends with 'est trop modeste'...

});
