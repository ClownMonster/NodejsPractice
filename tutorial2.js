const sum = (n1,n2) => n1 + n2;
const my_number =  123;
class testclass
{
    constructor()
    {
        console.log('inside testclass constructor');
    }
}

export const sum = sum;
export const my_number = my_number;
export const testclass = testclass;