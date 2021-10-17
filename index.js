// Code your solution here
const findMatching = (array,name) => {
    const match = array.filter(element => element.toLowerCase() === name.toLowerCase());
    return match;
}

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
// console.log(findMatching(drivers, 'bobby'));

const fuzzyMatch = (array, letters) => {
    const lettersLength = letters.length;
    const match = array.filter(element => {
        return element.slice(0,lettersLength).toLowerCase() === letters.toLowerCase()
    });
    return match;
}

const matchName = (drivers,name) => {
    const match = drivers.filter(element => element.name === name);
    return match;
}