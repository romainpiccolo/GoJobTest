const closestToZero = require('../src/closestToZero');

const cases = [
    [ undefined, 0 ],
    [ [], 0 ],
    [ [8, 5, 10], 5],
    [ [5, 4, -9, 6, -10, -1, 8], -1],
    [ [8, 2, 3, -2], 2]
];


//Unit test

describe('Tests ClosesToZero with unit test', () => {

    it("must return 0", () => {
        expect(closestToZero()).toBe(0)
    });

    it("must return 0", () => {
        expect(closestToZero([])).toBe(0)
    });

    it("must return 5", () => {
        expect(closestToZero([8, 5, 10])).toBe(5)
    });

    it("must return -1", () => {
        expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1)
    });

    it("must return 2", () => {
        expect(closestToZero([8, 2, 3, -2])).toBe(2)
    });

});

//With each
describe('Tests ClosesToZero with each', () => {

    it.each(cases)(
        "argument %p must return %p",
        (firstArg, expectedResult) => {
            expect(closestToZero(firstArg)).toBe(expectedResult)
        }
    );

});
