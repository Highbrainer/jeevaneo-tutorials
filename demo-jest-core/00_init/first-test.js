import * as demo from '../src/module.js';

test('name', () => {
	const mike = new demo.Human({name:'Mike'});
	// Test that mike's name is 'Mike'
	// Try with .toBe, .toEqual or expect.objectContaining
});

test('cars', () => {
        const john = new demo.Human({name:'John', cars:["bmw", "kia"]});
	// Test that john has a bmw and a kia
});

test('greet OK', () => {
	const john = new demo.Human({name:'John', cars:["bmw"]});
	const mike = new demo.Human({name:'Mike'});
	// verify that john greets mike well
});
