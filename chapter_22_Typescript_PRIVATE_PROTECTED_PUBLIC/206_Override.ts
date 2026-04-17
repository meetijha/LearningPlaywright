class Father {
    home(): void {
        console.log("3BHK");
    }
}

class Meeti extends Father {
    home(): void {
        console.log("4BHK");
    }
}

let meeti = new Meeti();
meeti.home();