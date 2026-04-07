class ICICI {
    #balance;

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}

let meeti = new ICICI("Meeti", 1000);
console.log(meeti.getBalance());
meeti.setBalance(10000000, false);
console.log(meeti.getBalance());

let meeti_father = new ICICI("Pramod", 2000);
console.log(meeti_father.getBalance());
meeti_father.setBalance(300000, true);
console.log(meeti_father.getBalance());