class Bug {
  constructor(title, severity) {
    this.title = title;
    this.severity = severity;
  }

  display() {
    console.log("[" + this.severity + "] " + this.title);
  }
}

let b1 = new Bug("Login crash", "Critical");
let b2 = new Bug("Typo in footer", "Low");

b1.display(); // [Critical] Login crash
b2.display(); // [Low] Typo in footer