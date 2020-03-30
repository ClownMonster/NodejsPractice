const sum = (n1,n2) => n1 + n2;
const my_number =  123;
class testclass{
    constructor()
    {
        console.log('inside testclass constructor');
    }
}
module.exports.sum = sum;
module.exports.my_number = my_number;
module.exports.testclass = testclass;