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
	expect(()=>mike.greet(undefined)).toThrow();
        expect(()=>mike.showOff(undefined)).toThrowError('modeste');
	expect(()=>mike.showOff(undefined)).toThrowError(/.*est trop modeste/);

});

test('dors bien.. ou pas', () => {
	const mike = new demo.Human({name:'Mike'});
	// Test that mike says "J'ai dormi 3 secondes" when he sleeps 3 seconds
        // Test that mike says "J'ai dormi 1 seconde" when he sleeps 1 second
	// Check that mike complains "Je n'arrive pas à dormir!" when you ask him to sleep for a negative amount of time
	// Check that mike complains "Je n'arrive pas à dormir!" when you ask him to .sleep('cauchemar')
});

