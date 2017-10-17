var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.render = function (divId, text) {
        // finds an HTML DOM element that matches divId arg
        // sets the innerText property to the value of text arg
        var e1 = document.getElementById(divId);
        e1.innerText = text;
    };
    return MyClass;
}());
window.onload = function () {
    // creates new instance of MyClass
    var myClass = new MyClass();
    // call render func
    myClass.render("content", "Hello World");
};
