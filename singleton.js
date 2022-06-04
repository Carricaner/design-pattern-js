

// Demo 1
let myObj = (function() {
    let __name = "steve";
    return { getName: function() { return __name } }
})();

console.log(myObj.getName()); // steve
console.log(myObj.__name); // undefined


// Demo 2
let CreateDiv = function(html) {
    this.html = html;
    this.init();
}

CreateDiv.prototype.init = function() {
    console.log(this.html);
}

let ProxySingletonCreateDiv = (function() {
    let instance;
    return function(html) {
        if (!instance) {
            instance = new CreateDiv(html);
        }
        return instance;
    }
})();

let a = new ProxySingletonCreateDiv("AAA");
let b = new ProxySingletonCreateDiv("BBB");

console.log(a === b);


let testFun = function() {
    return 2 || 1;
}

console.log(testFun());
