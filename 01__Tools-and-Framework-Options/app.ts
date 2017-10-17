class MyClass {
  public render(divId: string, text: string) {
    // finds an HTML DOM element that matches divId arg
    // sets the innerText property to the value of text arg
    var e1: HTMLElement = document.getElementById(divId)
    e1.innerText = text
  }
}

window.onload = () => {
  // creates new instance of MyClass
  var myClass = new MyClass();
  // call render func
  myClass.render("content", "Hello World")
}