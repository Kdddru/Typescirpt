var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.함수 = function (a) {
        console.log('안녕 ' + a);
    };
    return Person;
}());
var 사람1 = new Person('김');
var 사람2 = new Person('이');
console.log(사람1.name);
console.log(사람2.name);
사람1.함수('나');
