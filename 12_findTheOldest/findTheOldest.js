function getAge(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPerson = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestPerson > currentPerson ? oldest : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
