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
	expect(mike.sleep(3)).resolves.toBe("J'ai dormi 3 secondes");
        expect(mike.sleep(1)).resolves.toBe("J'ai dormi 1 seconde");
        expect(mike.sleep(-3)).rejects.toBe("Je n'arrive pas à dormir!");
        expect(mike.sleep('cauchemar')).rejects.toBe("Je n'arrive pas à dormir!");
});

test('gagne au loto', () => {
	const mike = new demo.Human({name:'Mike'});
	// Check that mike will go "GAGNE" when he wins at the lottery
});

test('ne gagne pas au loto', () => {
	const mike = new demo.Human({name:'Mike'});
        // Check that mike will go "PERDU" when he wins at the lottery
});

test("comptage et paramètres d'appel", async () => {
	const john = new demo.Human({name:'John', cars:["bmw"]});
	const mike = new demo.Human({name:'Mike'});
	// Let john hypnotize mike then check that mike will have slept 3 times :
	// once 3 seconds
	// then 2 seconds
	// then 1 second
	// Watch out, hypnotize is an async method !
});
