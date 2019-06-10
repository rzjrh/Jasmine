//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function Sum1toN(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
y = (2);
w = (3);
z = (4);
console.log(Sum1toN(y));




//return the sum of the first number in the array and the last number in the array
// function sumFirstLast(arr) {
//     return arr[0] + arr[arr.length - 1];

// }

function sumFirstLast(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = arr[0] + (arr[arr.length - 1]);
    }
    return sum;
}
w = ([2, 3, 8]);
z = ([-6, 23, 3, -4]);
y = ([1, 2]);

console.log(sumFirstLast(w));
console.log(sumFirstLast(z));
console.log(sumFirstLast(y));


// x = sumFirstLast([10, 20, 40]);
// console.log(x);




//write a function that returns the maximum number in the array.
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}
y = [-3, 3, 5, 7];
console.log(findMax(y));



describe("Sum1toN", function() {
    it("should return 3 when we pass 2 as an argument", function() {
        expect(Sum1toN(2)).toEqual(3);
    });
    it("should return 6 when we pass 3 as an argument", function() {
        expect(Sum1toN(3)).toEqual(6);
    });
    it("should return 10 when we pass 4 as an argument", function() {
        expect(Sum1toN(4)).toEqual(10);
    });
});






describe("sumFirstLast", function() {
    it("should return 3 when we pass [1,2] as an argument", function() {
        expect(sumFirstLast([1, 2])).toEqual(3);
    });
    it("should return 10 when we pass [2,3,8] as an argument", function() {
        expect(sumFirstLast([2, 3, 8])).toEqual(10);
    });
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() {
        expect(sumFirstLast([-6, 23, 3, -4])).toEqual(-10);
    });
});


describe("findMax", function() {
    it("should return 7 when we pass 2 as an argument", function() {
        expect(findMax([-3, 3, 5, 7])).toEqual(7);
    });

});