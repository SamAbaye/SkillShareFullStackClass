export let object = {
    name: 'Samson',
    age: 34,
    isStudent: true,
    address: {
     city: 'Addis Ababa',
     sub_City: 'Bole'
    },
    introduce: function() {
        console.log(`My name is ${object.name}, I am ${object.age} Years old. it is ${object.isStudent} that am a student and i live in ${object.address.city} around ${object.address.sub_City}`)
    }
 };
console.log(object.introduce());
