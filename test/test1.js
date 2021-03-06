/**
 * Created by muzrea on 17-7-14.
 */
describe('fizzBuzzWhizz',() => {
    it('when number is times of 3,return fizz',() => {
        let num = 3;//given
        const expectedResult = 'fizz';
        expect(fizzBuzzWhizz(num,a,b,c)).toEqual(expectedResult);
    });
    it('when number is times of 5,return buzz',() => {
        let num = 5;//given
        const expectedResult = 'buzz';
        expect(fizzBuzzWhizz(num,a,b,c)).toEqual(expectedResult);
    });
    it('when number is times of 7,return whizz',() => {
        let num = 7;//given
        const expectedResult = 'whizz';
        expect(fizzBuzzWhizz(num,a,b,c)).toEqual(expectedResult);
    });
    it('when number includes  3,return fizz',() => {
        let num = 13;//given
        const expectedResult = 'fizz';
        expect(fizzBuzzWhizz(num,a,b,c)).toEqual(expectedResult);
    });
    it('when number is only the times of 3 and 5 ,also the number does not include 3,return fizzBuzz',() => {
        let num = 15;//given
        const expectedResult = 'fizzBuzz';
        expect(fizzBuzzWhizz(num,a,b,c)).toEqual(expectedResult);
    });
    it('when number is only the times of 3 and 7,also the number does not include 3,return fizzWhizz',() => {
        let num = 21;//given
        const expectedResult = 'fizzWhizz';
        expect(fizzBuzzWhizz(num,a,b,c)).toEqual(expectedResult);
    });
    it('when number is only the times of 5 and 7,also the number does not include 3,return buzzWhizz',() => {
        let num = 70;//given
        const expectedResult = 'buzzWhizz';
        expect(fizzBuzzWhizz(num,a,b,c)).toEqual(expectedResult);
    });
    it('when number is not match all requires ,return num',() => {
        let num = 22;//given
        const expectedResult = num;
        expect(fizzBuzzWhizz(num,a,b,c)).toEqual(expectedResult);
    });
    it('when number is the times of 3, 5 and 7,also the number does not include 3,return fizzBuzzWhizz',() => {
        let num = 105;//given
        const expectedResult = 'fizzBuzzWhizz';
        expect(fizzBuzzWhizz(num,a,b,c)).toEqual(expectedResult);
    });
});