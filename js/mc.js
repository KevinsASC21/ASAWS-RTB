

class Item
{
    charReference = null;
    stringReference = null;
    itemName = null;
    price = 0.0;
    withCheese = false;
    type = null;
    // just a filler variable tbh, to seperate the booleans
    canDip = false;
    constructor(charReference, stringReference, itemName, price, withCheese, type, canDip)
    {
        this.charReference = charReference;
        this.stringReference = stringReference;
        this.itemName = itemName;
        this.price = price;
        this.withCheese = withCheese;
        this.type = type;
        this.canDip = canDip;
    }

    getCharReference()
    {
        return this.charReference;
    }
    getStringReference()
    {
        return this.stringReference;
    }
    getItemName()
    {
        return this.itemName;
    }
    getPrice()
    {
        return this.price;
    }
    getCanDip()
    {
        return this.canDip;
    }
    getWithCheese()
    {
        return this.withCheese;
    }
    getType()
    {
        return this.itemName;
    }
    toString()
    {
        return "ItemName: " + this.itemName + "\nPrice: " + this.price + "\nCharReference: " + this.charReference + "\nStringReference: " + this.stringReference + "\nWithCheese: " + this.withCheese + "\nType: " + this.type + "\nCanDip: " + this.canDip;
    }
}


let filletHTML = `<span class="fillet MCitem" title="Fillet Burger | $2.00" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918"> fillet burger </span>`;

let beefburgHTML = `<span class="beefBurg MCitem" title="All-Beef Meatlovers' Burger | $3.00" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">all-beef meatlovers' burger</span>`;


let wingsHTML = `<span class="wings MCitem" title="Chicken Wings | $4.50" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  side of wings</span>`;


let baconburgHTML = `<span class="bacon MCitem" title="O-Bacon Burger | $3.25" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  o-bacon burger</span>`;


let chicburgHTML = `<span class="chic MCitem" title="Chicken Sandwich | $3.50" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  chicken burger</span>`;


let shrimpHTML = `<span class="cajun MCitem" title="Cajun Shrimp Sub | $3.25" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  cajun shrimp sub</span>`;

let impossibleHTML = `<span class="imposs MCitem" title="All-Vegan Impossible Burger | $4.50" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  impossible burger</span>`;


let dsbeefburgHTML = `<span class="dsbeef MCitem" title="Double-Stacked Meatlovers' Burger | $4.00" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  double-stacked meatlovers' burger</span>`;


let nuggetHTML = `<span class="nugget MCitem" title="Nuggets | $2.25" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  side of nuggets </span>`;


let friesHTML = `<span class="fries MCitem" title="French Fries | $1.50" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  side of fries</span>`;


let ribBurgHTML = `<span class="ribBurg MCitem" title="BigRib-Supreme Burger | $3.25" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  bigRib-Supreme burger</span>`;


let sodaHTML = `<span class="soda MCitem" title="Fillet-Burger | $1.25" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  can of soda </span>`;


let coffeeHTML = `<span class="coffee MCitem" title="Cup Of Coffee | $1.00" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  cup of coffee </span>`;


let waterHTML = `<span class="water MCitem" title="Cup OF Water | $1.00" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  cup of water</span>`;


let milkshakeHTML = `<span class="mshake MCitem" title="Milkshake | $1.00" style="color: red"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  milkshake </span>`;


  let fishBurg = new Item("f","Fillet Burger","fillet burger",2.00,true,"burger",true);
  console.log(fishBurg.price);

   let wings = new Item("s","Serving of Wings",wingsHTML,4.50,false,"side",true);
   let chickenBurg = new Item("c","Chicken Sandwich",chicburgHTML,3.50,true,"burger",false);
   let shrimpSand = new Item("c","Cajun Shrimp Sandwich",shrimpHTML,3.25,false,"burger",true);
   let ribBurg = new Item("c","BigRib Burger",ribBurgHTML,3.25,true,"burger",true);
   let baconBurg = new Item("c","O-Bacon Burger",baconburgHTML,3.25,true,"burger",false);
   let impossibleBurg = new Item("c","Impossible Burger",impossibleHTML,4.50,true,"burger",true);
   let beefBurg = new Item("b","All Beef Burger",beefburgHTML,3.00,true,"burger",false);
   let beefBurgDub = new Item("d","Double-Stacked Burger",dsbeefburgHTML,true,4.00,false);
   let nuggets = new Item("n","Side Of Nuggets",nuggetHTML,2.25,false,"side",true);
   let fries = new Item("s", "Side of Fries",friesHTML,1.50,true,"side",true);
   let soda =  new Item("ca", "Can of Soda",sodaHTML, 1.25, false,"drink",false);
   let water = new Item ("cu", "Cup of Water",waterHTML, 1.00,false,"drink",false,);
   let coffee = new Item ("cu", "Cup of Coffee",coffeeHTML, 1.00,false,"drink",false);
   let milkshake = new Item ("cu", "Cup of RoFlurry",milkshakeHTML, 1.00,false,"drink",false);

class Cash_Register {
    customerTotal = 0.0;
  
    constructor(cT)
    {
        this.customerTotal = cT;
    }
    getCustomerTotal()
    {
        return this.customerTotal;
    }
    getReader()
    {
        return this.reader;
    }
    SecureScanner()
    {
        return this.getReader();
    }

    static calcCustomerCash(t)
    {
        var cash = 5 * (Math.round(t / 5));
        if (cash <= t)
        {
            cash += 5;
        }
        return cash;
    }
    static calcChangeNeeded(t, c)
    {
        var change = Cash_Register.calcCustomerCash(t) - c;
        return change;
    }
    static userRegisterCatcher(hD, fT, tY, t, f, s, q, d, n, p)
    {
        var userAnswers = [hD, fT, tY, t, f, s, q, d, n, p];
        return userAnswers;
    }
    static calcDominations(uA)
    {
        var finalChange = this.calcChangeNeeded(this.getCustomerTotal(), this.getCustomerTotal());
        var numOfHundreds = 0;
        var numOfFifties = 0;
        var numOfTwenties = 0;
        var numOfTens = 0;
        var numOfFives = 0;
        var numOfSingles = 0;
        var numOfQuarters = 0;
        var numOfDimes = 0;
        var numOfNickels = 0;
        var numOfPennies = 0;
        var correctChange = true;
        while (finalChange > 0.01)
        {
            if (finalChange >= 100.0)
            {
                finalChange = finalChange - 100.0;
                numOfHundreds += 1;
            }
            else if (finalChange >= 50.0)
            {
                finalChange = finalChange - 50.0;
                numOfFifties += 1;
            }
            else if (finalChange >= 20.0)
            {
                finalChange = finalChange - 20.0;
                numOfTwenties += 1;
            }
            else if (finalChange >= 10.0)
            {
                finalChange = finalChange - 10.0;
                numOfTens += 1;
            }
            else if (finalChange >= 5.0)
            {
                finalChange = finalChange - 5.0;
                numOfFives += 1;
            }
            else if (finalChange >= 1.0)
            {
                finalChange = finalChange - 1.0;
                numOfSingles += 1;
            }
            else if (finalChange >= 0.25)
            {
                finalChange = finalChange - 0.25;
                numOfQuarters += 1;
            }
            else if (finalChange >= 0.1)
            {
                finalChange = finalChange - 0.1;
                numOfDimes += 1;
            }
            else if (finalChange >= 0.05)
            {
                finalChange = finalChange - 0.05;
                numOfNickels += 1;
            }
            else 
            {
                finalChange = finalChange - 0.01;
                numOfPennies += 1;
            }
        }
        var denominations = [numOfPennies, numOfNickels, numOfDimes, numOfQuarters, numOfSingles, numOfFives, numOfTens, numOfTwenties, numOfFifties, numOfHundreds];
        for ( const  i of denominations) {
        if (uA[i] != denominations[i])
        {
            correctChange = false;
        }
}
        return correctChange;
    }
    static registerGame(NhD,NfT,NtY,Nt,Nf,Ns,Nq,Nd,Nn,Np)
    {
        var userNhD = NhD;
        var userNfT = NfT;
        var userNtY = NtY;
        var userNt = Nt;
        var userNf = Nf;
        var userNs = Ns;
        var userNq = Nq;
        var userNd = Nd;
        var userNn = Nn;
        var userNp = Np;
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 100.0)
        // {
        //     console.log("How many hundreds would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNhD = register.nextInt();
        // }
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 50.0)
        // {
        //     console.log("How many fifties would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNfT = register.nextInt();
        // }
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 20.0)
        // {
        //     console.log("How many twenties would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNtY = register.nextInt();
        // }
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 10.0)
        // {
        //     console.log("How many ten(s) would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNt = register.nextInt();
        // }
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 5.0)
        // {
        //     console.log("How many five(s) would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNf = register.nextInt();
        // }
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 1.0)
        // {
        //     How many single(s) would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNs = register.nextInt();
        // }
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 0.25)
        // {
        //     console.log("How many quarter(s) would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNq = register.nextInt();
        // }
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 0.1)
        // {
        //     console.log("How many dime(s) would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNd = register.nextInt();
        // }
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 0.05)
        // {
        //     console.log("How many nickel(s) would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNn = register.nextInt();
        // }
        // if (this.calcChangeNeeded(Cash_Register.calcCustomerCash(this.getCustomerTotal()), this.getCustomerTotal()) >= 0.01)
        // {
        //     console.log("How many pennies would you like to pull from the register? ");
        //     var register = this.SecureScanner();
        //     userNp = register.nextInt();
        // }
        return (this.calcDominations(this.userRegisterCatcher(userNp, userNn, userNd, userNq, userNs, userNf, userNt, userNtY, userNfT, userNhD)));
    }
}
class Game
{
//      static #fishBurg = new Item("f", "Fillet Burger", "fillet burger", 2.0, true, "burger", true);
  
//      static #wings = new Item("s", "Serving of Wings", "serving of wings", 4.5, "side", false);
//     static wings()
//     {
//         return Game.#wings;
//     }
//      static #chickenBurg = new Item("c", "Chicken Sandwich", "chicken sandwich", 3.5, true);
//     static chickenBurg()
//     {
//         return Game.#chickenBurg;
//     }
//      static #shrimpSand = new Item("c", "Cajun Shrimp Sandwich", "cajun shrimp sandwich", 3.25, true);
//     static shrimpSand()
//     {
//         return Game.#shrimpSand;
//     }
//      static #ribBurg = new Item("c", "BigRib Burger", "bigRib", 3.25, true);
//     static ribBurg()
//     {
//         return Game.#ribBurg;
//     }
//      static #baconBurg = new Item("c", "O-Bacon Burger", "o-bacon burger", 3.25, true);
//     static baconBurg()
//     {
//         return Game.#baconBurg;
//     }
//      static #impossibleBurg = new Item("c", "Impossible Burger", "impossible burger", 4.5, true, "burger", true);
//     static impossibleBurg()
//     {
//         return Game.#impossibleBurg;
//     }
//      static #beefBurg = new Item("b", "All Beef Burger", "all beef burger", 3.0, true);
//     static beefBurg()
//     {
//         return Game.#beefBurg;
//     }
//      static #beefBurgDub = new Item("d", "Double-Stacked Burger", "double-stacked burger", 4.0, true);
//     static beefBurgDub()
//     {
//         return Game.#beefBurgDub;
//     }
//      static #nuggets = new Item("n", "Side Of Nuggets", "side of nuggets", 2.25, "side", true);
//     static nuggets()
//     {
//         return Game.#nuggets;
//     }
//      static #fries = new Item("s", "Side of Fries", "side of fries", 1.5, true, "side", true);
//     static fries()
//     {
//         return Game.#fries;
//     }
//      static #soda = new Item("ca", "Can of Soda", "can of soda", 1.25, "drink");
//     static soda()
//     {
//         return Game.#soda;
//     }
//      static #water = new Item("cu", "Cup of Water", "cup of water", 1.0, "drink");
//     static water()
//     {
//         return Game.#water;
//     }
//      static #coffee = new Item("cu", "Cup of Water", "cup of water", 1.0, "drink");
//     static coffee()
//     {
//         return Game.#coffee;
//     }
//      static #milkshake = new Item("cu", "Cup of RoFlurry", "cup of roFlurry", 1.0, "drink");
//     static milkshake()
//     {
//         return Game.#milkshake;
//     }

//      static #firstShift = false;
//     static getShift()
//     {
//         return Game.#firstShift;
//     }
//     static setShift(a)
//     {
//         Game.#firstShift = a;
//     }
    items = [fishBurg, ribBurg, shrimpSand, impossibleBurg, wings, chickenBurg, beefBurg, beefBurgDub, baconBurg, nuggets, fries, soda, water, coffee, milkshake];

    // public static double  taxCalculator{
    // }
    // menu()

  static difficultySetter(wW)
    {
        var diff_numberOfItemsMax = 0;
        var diff_numberOfItemsMin = 0;
        var livesTotal = 0;
        var customersPerShift = 0;
        var taxDeduction = 0;
        var moneyGoal = 599.0;
        var payRate = 20.0;
        var userDiff = "";
        if (wW)
        {
            console.log("\nDifficulty?\n" + Game.ANSI_BLUE() + " \nBeginner - Less Customers, Smaller Orders, Larger Taxes, 4 lives." + Game.ANSI_RESET() + Game.ANSI_GREEN() + "\nIntermediate - More Customers, Larger Orders, \'Normal\' Taxes, 3 lives.\n" + Game.ANSI_RESET() + Game.ANSI_RED() + "Expert - Back-breaking Shifts, Minimal Tax Deduction, 2 lives." + Game.ANSI_RESET() + "\nInfinite(ish) - Achievements Disabled, Endless Work, 9 lives.\n" + Game.ANSI_CYAN_BACKGROUND() + "Custom - You set the rules." + Game.ANSI_RESET() + "\n");
            userDiff = reader.nextLine();
            if (userDiff== "Beginner" || userDiff== "beginner" || userDiff== "b")
            {
                diff_numberOfItemsMax = 3;
                customersPerShift = 3;
                livesTotal = 4;
                taxDeduction = 21;
            }
            else if (userDiff== "Intermediate" || userDiff== "intermediate" || userDiff== "i")
            {
                diff_numberOfItemsMax = 6;
                diff_numberOfItemsMin = 2;
                customersPerShift = 3;
                livesTotal = 3;
                taxDeduction = 21;
                payRate = 30;
            }
            else if (userDiff== "expert" || userDiff== "Expert" || userDiff== "e")
            {
                diff_numberOfItemsMax = 9;
                diff_numberOfItemsMin = 3;
                customersPerShift = 9;
                livesTotal = 2;
                taxDeduction = 21;
                payRate = 40;
            }
            else if (userDiff== "Infinite" || userDiff== "infinite" || userDiff== "infinity" || userDiff== "infiniteish" || userDiff== "Infiniteish" || userDiff== "Infinite-ish" || userDiff== "infinite(ish)" || userDiff== "Infinite(ish)")
            {
                diff_numberOfItemsMax = 12;
                diff_numberOfItemsMin = 4;
                customersPerShift = Number.MAX_VALUE;
                livesTotal = 9;
                taxDeduction = 21;
            }
            else if (userDiff== "Custom" || userDiff== "custom" || userDiff== "c")
            {
                console.log("\nADVISORY: Custom Diffculty might cause things to break down when values are set particulary high/low. (have mercy pls)\n");
                console.log("Maximum # of item(s) per order?");
                diff_numberOfItemsMax = reader.nextInt();
                if (diff_numberOfItemsMax <= 1)
                {
                    diff_numberOfItemsMax = 3;
                    console.log("Nice Try.");
                }
                console.log("Minimum # of item(s) per order?");
                diff_numberOfItemsMin = reader.nextInt();
                if (diff_numberOfItemsMin < 0 || diff_numberOfItemsMin >= diff_numberOfItemsMax)
                {
                    diff_numberOfItemsMin = diff_numberOfItemsMax - 1;
                    console.log("Nice Try.");
                }
                console.log("# of customer(s) per shift?");
                customersPerShift = reader.nextInt();
                if (customersPerShift <= 0)
                {
                    customersPerShift = 2;
                    console.log("Nice Try.");
                }
                console.log("Total Amount of Lives?");
                livesTotal = reader.nextDouble();
                if (livesTotal <= 0)
                {
                    livesTotal = 1;
                    console.log("Nice Try.");
                }
                console.log("Paycheck Tax Deduction? (Enter as Whole Percentage)");
                taxDeduction = reader.nextDouble();
                if (taxDeduction < 0)
                {
                    taxDeduction = 21;
                    console.log("Nice Try. Enjoy.");
                }
                console.log("Amount Earned Per Correct Order?");
                payRate = reader.nextDouble();
                if (payRate <= 0)
                {
                    payRate = 1.0;
                    console.log("Nice Try. Enjoy.");
                }
                console.log("Monetary Target/Goal?");
                moneyGoal = reader.nextDouble();
                if (moneyGoal <= 0)
                {
                    moneyGoal = 5000;
                    console.log("Nice Try. Enjoy.");
                }
            }
            else 
            {
                diff_numberOfItemsMax = 3;
                customersPerShift = 3;
                livesTotal = 4;
                taxDeduction = 20;
            }
        }
        var difficulty = [diff_numberOfItemsMax, diff_numberOfItemsMin, customersPerShift, livesTotal, taxDeduction, payRate, moneyGoal];
        return difficulty;
    }

static async shiftStart(wW, dS, items) {
        var moneyGoal = 1000;
        var payRate = 7.50;
        var taxDeduction = 0.10;
        var livesTotal = 3;
        var customersPerShift = 5;
        var diff_numberOfItemsMin = 2;
        var diff_numberOfItemsMax = 5;
        var userLivesLost = 0;
        var employeePoints = 0;
        var customerLeft = false;
        var tooManyLeaves = false;
        var passedOn = false;
        var extraCharges = 0;
        var itemCharges = 0;
        var finalTotal = 0;
        var grossPay = 0;
        var netPay = 0;
        var ordersCorrect = 0;
        var shiftsCompleted = 0;
        var dayCounter = 1;
        var timeQuota = 25;
        var gameEnd = "";
        var printCheat = false;
  

let filletHTML = `<span class="fillet MCitem" title="Fillet Burger | $2.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">fillet burger </span>`;

let beefburgHTML = `<span class="beefBurg MCitem" title="All-Beef Meatlovers' Burger | $3.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  all-beef meatlovers' burger</span>`;


let wingsHTML = `<span class="wings MCitem" title="Chicken Wings | $4.50"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  side of wings</span>`;


let baconburgHTML = `<span class="bacon MCitem" title="O-Bacon Burger | $3.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  o-bacon burger</span>`;


let chicburgHTML = `<span class="chic MCitem" title="Chicken Sandwich | $3.50"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  chicken burger</span>`;


let shrimpHTML = `<span class="cajun MCitem" title="Cajun Shrimp Sub | $3.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  cajun shrimp sub</span>`;

let impossibleHTML = `<span class="imposs MCitem" title="All-Vegan Impossible Burger | $4.50"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  impossible burger</span>`;


let dsbeefburgHTML = `<span class="dsbeef MCitem" title="Double-Stacked Meatlovers' Burger | $4.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  double-stacked meatlovers' burger</span>`;


let nuggetHTML = `<span class="nugget MCitem" title="Nuggets | $2.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  side of nuggets </span>`;


let friesHTML = `<span class="fries MCitem" title="French Fries | $1.50"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  side of fries</span>`;


let ribBurgHTML = `<span class="ribBurg MCitem" title="BigRib-Supreme Burger | $3.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  bigRib-Supreme burger</span>`;


let sodaHTML = `<span class="soda MCitem" title="Can Of Soda | $1.25"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  can of soda </span>`;


let coffeeHTML = `<span class="coffee MCitem" title="Cup Of Coffee | $1.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  cup of coffee </span>`;


let waterHTML = `<span class="water MCitem" title="Cup OF Water | $1.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  cup of water</span>`;


let milkshakeHTML = `<span class="mshake MCitem" title="Milkshake | $1.00"> <img class="orderPic" src="https://cdn.glitch.global/a3f8d675-462f-49f9-991d-46b2424ea5db/9053e636-a631-418b-aaf4-6478d18289d5.image.png?v=1652891201918">
  milkshake </span>`;


  let fishBurg = new Item("f","Fillet Burger",filletHTML,2.00,true,"burger",true);
  console.log(fishBurg.price);
   let wings = new Item("s","Serving of Wings",wingsHTML,4.50,false,"side",true);
   let chickenBurg = new Item("c","Chicken Sandwich",chicburgHTML,3.50,true,"burger",false);
   let shrimpSand = new Item("c","Cajun Shrimp Sandwich",shrimpHTML,3.25,false,"burger",true);
   let ribBurg = new Item("c","BigRib Burger",ribBurgHTML,3.25,true,"burger",true);
   let baconBurg = new Item("c","O-Bacon Burger",baconburgHTML,3.25,true,"burger",false);
   let impossibleBurg = new Item("c","Impossible Burger",impossibleHTML,4.50,true,"burger",true);
   let beefBurg = new Item("b","All Beef Burger",beefburgHTML,3.00,true,"burger",false);
   let beefBurgDub = new Item("d","Double-Stacked Burger",dsbeefburgHTML,true,4.00,false);
   let nuggets = new Item("n","Side Of Nuggets",nuggetHTML,2.25,false,"side",true);
   let fries = new Item("s", "Side of Fries",friesHTML,1.50,true,"side",true);
   let soda =  new Item("ca", "Can of Soda",sodaHTML, 1.25, false,"drink",false);
   let water = new Item ("cu", "Cup of Water",waterHTML, 1.00,false,"drink",false,);
   let coffee = new Item ("cu", "Cup of Coffee",coffeeHTML, 1.00,false,"drink",false);
   let milkshake = new Item ("cu", "Cup of RoFlurry",milkshakeHTML, 1.00,false,"drink",false);

  items = [fishBurg, ribBurg, shrimpSand, impossibleBurg, wings, chickenBurg, beefBurg, beefBurgDub, baconBurg, nuggets, fries, soda, water, coffee, milkshake];

      
      
//         var menu = "\n......" + "\nMcRonald\'s Menu\n" + "\nENTREES, BEVERAGES AND SIDES";
//         for (i; i >= 0; i--)
//         {
//             var dollar = "$" + items[i].getPrice();
//             if (dollar.substring(3,4)== "0" || dollar.substring(3,4)== "5")
//             {
//                 menu += " | " + items[i].getStringReference() + " - " + dollar + "0";
//             }
//             else 
//             {
//                 menu += " | " + items[i].getStringReference() + " - " + dollar;
//             }
//         }
      
//         menu += Game.ANSI_PURPLE() + "\n\nEXTRAS" + Game.ANSI_RESET() + "\nCheese - +$0.25\nDip - +$0.25";
//         menu += Game.ANSI_MAGENTA() + "\n\nSIZE OPTIONS" + Game.ANSI_RESET() + "\nSmall - +$0.25\nLarge - +$0.50\nXTRA Large - +$0.75\n";
//         menu += "......";
      
    while (wW == true) {
            
            console.log("\nDay " + dayCounter);
            var order = null;
            var greetingListPt1 = ["Hello!", "Good Mornin\'!", "Bonjour!", "Hola!", "Howdy!"];
            var NumberOfItems = (parseInt((Math.random() * diff_numberOfItemsMax + diff_numberOfItemsMin)));
            var greetingListPt2 = [" Lemme get ", " I\'d like ", " I\'ll get uhhh- ", " I\'d like to order "];
            
            for (let i1 = 1; i1 > 0; i1--) {
                customerLeft = false;
                extraCharges = 0;
                itemCharges = 0;
                finalTotal = 0;
                NumberOfItems = (parseInt((Math.random() * diff_numberOfItemsMax + diff_numberOfItemsMin)));
                order = null;
    
                order = "<h2> " + greetingListPt1[(parseInt((Math.random() * greetingListPt1.length)))];
                if (NumberOfItems != 0)
                {
                    order += greetingListPt2[(parseInt((Math.random() * greetingListPt2.length)))];
                    // console.log(order);
                }
                else if (tooManyLeaves)
                {
                    order += greetingListPt2[(parseInt((Math.random() * greetingListPt2.length)))];
                    NumberOfItems++;
                    if (NumberOfItems != 0)
                    {
                        // console.log(order);
                    }
                    tooManyLeaves = false;
                }
                else if (NumberOfItems == 0)
                {
                    customerLeft = true;
                    tooManyLeaves = true;
                    var cancelledOrderList = [" -ah wait nevermind, the food here sucks.", " -wow what terrible customer service.", " -eh nah. ", " -eh I\'ma just go to Sandwich Queen instead."];
                    order += cancelledOrderList[(parseInt((Math.random() * greetingListPt2.length)))];
                }
                for (let i2 = NumberOfItems; i2 > 0; i2--)
                {
                    var orderChosen = (parseInt((Math.random() * items.length)));
                    if (i2 > 1)
                    {
                        order += "a ";
                        var cheese = false;
                        var dip = false;
                        var sizeDecider = (parseInt((Math.random() * 6)));
                        if (sizeDecider == 1)
                        {
                            order += `<span class="sizes sma MCitem" title="Small Size += $0.25">small</span>`;
                            extraCharges = extraCharges + 0.25;
                        }
                        if (sizeDecider == 2)
                        {
                            order += `<span class="sizes lar MCitem" title="Large Size += $0.50">large</span>`;
                            extraCharges = extraCharges + 0.5;
                        }
                        if (sizeDecider == 3)
                        {
                            order += `<span class="sizes xtra MCitem" title="XTRA-Large Size += $0.75">XTRA-large</span>`;
                            extraCharges = extraCharges + 0.75;
                        }
                        if (items[orderChosen].getWithCheese())
                        {
                            var cheeseDecider = (parseInt((Math.random() * 1)));
                            if (cheeseDecider == 0)
                            {
                                extraCharges = extraCharges + 0.25;
                                order += items[orderChosen].getItemName() + `<span class="extras MCitem" title="Cheese += $0.25"> with cheese</span>`;
                                cheese = true;
                            }
                        }
                        if (items[orderChosen].getCanDip())
                        {
                            var dipDecider = (parseInt((Math.random() * 4)));
                            if (dipDecider == 0)
                            {
                                extraCharges = extraCharges + 0.25;
                                if (cheese)
                                {
                                    order += `<span class="extras MCitem" title="Extra Dip += $0.25"> and extra dip</span>`;
                                }
                                else 
                                {
                                    order += items[orderChosen].getItemName() + `<span class="extras MCitem" title="Extra Dip += $0.25"> with extra dip</span>`;
                                }
                                dip = true;
                            }
                        }
                        if (!cheese && !dip)
                        {
                            order += items[orderChosen].getItemName() + ", ";
                        }
                        else 
                        {
                            order += ", ";
                        }
                    }
                    else if (i2 == 1 && NumberOfItems == 1)
                    {
                        order += "just a " + items[orderChosen].getItemName() + " please?";
                    }
                    else if (i2 == 1 && NumberOfItems != 1)
                    {
                        order += "and a " + items[orderChosen].getItemName() + ".";
                    }
                    itemCharges = itemCharges + items[orderChosen].getPrice();
                    finalTotal = extraCharges + itemCharges;
                    finalTotal = (Math.round(finalTotal * 100.0) / 100.0);
                }
                console.log(order + "</h2>");
                $(".order").empty();
                $(".order").append(order + "</h2>")
              
                // var orderStart = System.currentTimeMillis();
                // System.out.println(orderStart/1000);
                if (customerLeft)
                {
                    $(".notifer").empty();
                    $(".notifer").append("<h3>Customer Left. Nothing will be recorded for this order.</h3>");
                }
                if (printCheat)
                {                     
                    $(".notifer").empty();
                    $(".notifer").append("<h3>|eRegister| Total: " + finalTotal + "</h3>");
                }
              
                if (!customerLeft) {
                    $(".notifer").empty();
                    $(".notifer").append("<h3>Sure thing! Your total is: (Enter in dollar format, excluding the sign)</h3>");
                    // userAnsTotal = 0;
                  //   try
                  //   {
                  //       userAnsTotal = $(".mc_total").val();
                  //   } 
                  // catch {
                  //       console.log("\n? Are you sure you have an 8th grade education?" + Game.ANSI_RESET());
                  //       userLivesLost += 1;
                  //       // System.out.println(userLivesLost + " out of " + livesTotal + " citations filled.");
                  //       if (livesTotal - userLivesLost == 1)
                  //       { 
                  //   $(".notifer").empty();
                  //   $(".notifer").append("<h3>Only one citation left before you\'re fired!</h3>");
                  //       }
                  //       if (userLivesLost == livesTotal)
                  //       {
                  //           gameEnd = `GAME END - "You're Fired!`;
                  //   $(".notifer").empty();
                  //   $(".notifer").append(`<h3>${gameEnd}</h3> `);
                  //   $(".notifer").append("<h3>*Sad Trombrone Sound Effect*</h3>");
                  //           wW = false;
                  //       }
                  //   }
                    let userAnsTotal = 0;
                  
                  $("#coolB").click(function () {
                  
                  console.log("this is working");
                  let userAnsTotal = $("#mc_input").val();
                  console.log(userAnsTotal);
                                      
                  var mrKrabs = new Cash_Register(finalTotal);
                  console.log(mrKrabs);
                      
                  if (userAnsTotal == finalTotal) {
                  $(".notifer").empty();
                  console.log(mrKrabs.calcCustomerCash(Math.abs(finalTotal)));
                  $(".notifer").append(`<h3> Customer hands you $${mrKrabs.calcCustomerCash(Math.abs(finalTotal))}0 in cash*</h3>`);
                  $(".notifer").append("<h3>Return the appropriate amount of change, by highest denomination(s) only</h3>");
                  let totalcoinage = 0;
                  
                  $(".50").click(function () {
                  console.log("this works the fifty");
                  totalcoinage += 50.00
                  $(".totalChange").innerHTML(totalcoinage);
                  });
                  var correctRegister = mrKrabs.registerGame();
                        // var orderEnd = System.currentTimeMillis();
                        // System.out.println(orderEnd/1000);
                        var time = (orderEnd - orderStart) / 1000;
                  if (correctRegister && time <= timeQuota) {
                            ordersCorrect += 1;
                    $(".notifer").empty();
                    $(".notifer").append("<h3>Perfect Order! Keep up the good work!</h3>");
                            employeePoints += 1;
                            grossPay += payRate;
                  }
                  else if (correctRegister && time > timeQuota) {
                    userLivesLost += 1;
                    $(".notifer").empty();
                    $(".notifer").append("<h3> You took way too long! This\'ll have to go on your record </h3>");
                    $(".notifer").append(`<h3>${userLivesLost}" out of ${livesTotal} citations filled. </h3>`);
                            
                    if (livesTotal - userLivesLost == 1) {
                    $(".notifer").empty();
                    $(".notifer").append("<h3>Only one citation left before you\'re fired!</h3>");
                    }                            }
                    if (userLivesLost == livesTotal) {
                    gameEnd = `GAME END - "You're Fired!`;
                    $(".notifer").empty();
                    $(".notifer").append(`<h3>${gameEnd}</h3> `);
                    $(".notifer").append("<h3>*Sad Trombrone Sound Effect*</h3>");
                            wW = false;
                    }
                  }

                    });
                  
                  
                    userAnsTotal = $(".mc_total").val();
                  
                if (userAnsTotal == finalTotal) {
                    $(".notifer").empty();
                    console.log(mrKrabs.calcCustomerCash(Math.abs(finalTotal)));
                      
                    $(".notifer").append(`<h3> Customer hands you $${mrKrabs.calcCustomerCash(Math.abs(finalTotal))}0 in cash*</h3>`);
                        $(".notifer").append("<h3>Return the appropriate amount of change, by highest denomination(s) only</h3>");
                        var correctRegister = mrKrabs.registerGame();
                        // var orderEnd = System.currentTimeMillis();
                        // System.out.println(orderEnd/1000);
                        var time = (orderEnd - orderStart) / 1000;
                  if (correctRegister && time <= timeQuota) {
                            ordersCorrect += 1;
                    $(".notifer").empty();
                    $(".notifer").append("<h3>Perfect Order! Keep up the good work!</h3>");
                            employeePoints += 1;
                            grossPay += payRate;
                  }
                  else if (correctRegister && time > timeQuota) {
                    userLivesLost += 1;
                    $(".notifer").empty();
                    $(".notifer").append("<h3> You took way too long! This\'ll have to go on your record </h3>");
                    $(".notifer").append(`<h3>${userLivesLost}" out of ${livesTotal} citations filled. </h3>`);
                            
                    if (livesTotal - userLivesLost == 1) {
                    $(".notifer").empty();
                    $(".notifer").append("<h3>Only one citation left before you\'re fired!</h3>");
                    }                            }
                    if (userLivesLost == livesTotal) {
                    gameEnd = `GAME END - "You're Fired!`;
                    $(".notifer").empty();
                    $(".notifer").append(`<h3>${gameEnd}</h3> `);
                    $(".notifer").append("<h3>*Sad Trombrone Sound Effect*</h3>");
                            wW = false;
                    }
                  }
                  
                  
                  
              else {
                    userLivesLost += 1;
                    $(".notifer").empty();
                    $(".notifer").append("<h3> You took way too long! This\'ll have to go on your record </h3>");
                    $(".notifer").append(`<h3>${userLivesLost}" out of ${livesTotal} citations filled. </h3>`);
                    if (livesTotal - userLivesLost == 1) {
                    $(".notifer").empty();
                    $(".notifer").append("<h3>Only one citation left before you\'re fired!</h3>");                            }
                    if (userLivesLost == livesTotal) {
                    gameEnd = `GAME END - "You're Fired!`;
                    $(".notifer").empty();
                    $(".notifer").append(`<h3>${gameEnd}</h3> `);
                    $(".notifer").append("<h3>*Sad Trombrone Sound Effect*</h3>");
                    wW = false;
                    }
                }
            }
              
              
          else {
                    userLivesLost += 1;
                    $(".notifer").empty();
                    $(".notifer").append("<h3>This'll have to go on your record</h3>");
                    $(".notifer").append(`<h3>${userLivesLost}" out of ${livesTotal} citations filled. </h3>`);
                    if (livesTotal - userLivesLost == 1) {
                    $(".notifer").empty();
                    $(".notifer").append("<h3>Only one citation left before you\'re fired!</h3>");
                    }
                    if (userLivesLost == livesTotal){
                             gameEnd = `GAME END - "You're Fired!`;
                    $(".notifer").empty();
                    $(".notifer").append(`<h3>${gameEnd}</h3> `);
                    $(".notifer").append("<h3>*Sad Trombrone Sound Effect*</h3>");
                            wW = false;
                    }
                }
          }
      }
      $(".notifer").empty();
      $(".notifer").append(`<h3>\n--SHIFT COMPLETE--</h3>`);
  
  
  
        //     var logo = "\n __  __      _____                   _     _\n|  \\/  |    |  __ \\                 | |   | |\n| \\  / | ___| |__) |___  _ __   __ _| | __| |___\n| |\\/| |/ __|  _  // _ \\| \'_ \\ / _` | |/ _` / __|\n| |  | | (__| | \\ \\ (_) | | | | (_| | | (_| \\__ \\\n|_|  |_|\\___|_|  \\_\\___/|_| |_|\\__,_|_|\\__,_|___/";
        //     console.log(logo);
        //     dayCounter++;
        //     netPay = grossPay * (1.0 - (0.01 * taxDeduction));
        //     shiftsCompleted += 1;
        //     console.log("\nWould you like to visit the Retention shop? You currently up have $" + netPay + " and " + employeePoints + " ePs saved up.");
        //     reader.nextLine();
        //     var userContinue1 = reader.nextLine();
        //     if (wW && userContinue1== "Y" || userContinue1== "y" || userContinue1== "yes" || userContinue1== "Yes" && userLivesLost > 0 && employeePoints >= 3)
        //     {
        //         var logoHF = "\n? ?????  ???  ??????? ?????????????\n???????  ??   ???? ?? ???? ???? ???\n? ?? ?????    ?  ??????????????????";
        //         console.log(logoHF);
        //         console.log("\nWelcome to the HALF POUNDER. Our one stop shop for Employee Retention! Here\'s our selction:");
        //         console.log(Game.ANSI_CYAN() + "\n(1) {5 POINTS} [POWERUP] Unpaid Overtime | Order time quotas are doubled. You do more work and we pay you the same, sounds like a steal to us!" + Game.ANSI_RESET() + "\n\n" + Game.ANSI_PURPLE() + "(2) {3 POINTS} [ITEM] Self-Checkout Kiosk | This thing may take your job one day but who cares? Customers are ordering less which means less work to do!\n\n" + Game.ANSI_RESET() + Game.ANSI_BLUE() + "(3) {6 POINTS} [BENEFIT] Employer Match: Social Security | Your hard work has paid off. We\'ll now match your FICA contribution for you!\n\n" + Game.ANSI_RESET() + Game.ANSI_PURPLE() + "(4) {4 POINTS} [ITEM] Smart Register | Out with the old and in with the new! The Cash Register will now tell you a customer\'s total! How cool is that?\n\n" + Game.ANSI_RESET() + Game.ANSI_PURPLE() + "(5) {10 POINTS} [ITEM] White-Out | Forgive and Forget like snow from yesteryear. Management will remove one citation from your record!\n\n" + Game.ANSI_RESET() + Game.ANSI_CYAN() + "(6) {8 POINTS} [POWERUP] Florida Residency | You can\'t default on your state and local income taxes if they don\'t exist!\n" + Game.ANSI_RESET());
        //         console.log("\nPlease enter the reference number of an item you\'d like to buy, -1 to exit.");
        //         var userBuy = reader.nextInt();
        //         if (userBuy == 1 && employeePoints >= 5)
        //         {
        //             timeQuota *= 2;
        //             console.log("\n---POWERUP APPILED---");
        //         }
        //         if (userBuy == 2 && employeePoints >= 3)
        //         {
        //             diff_numberOfItemsMax -= 1;
        //             console.log("\n---ITEM APPILED---");
        //         }
        //         if (userBuy == 3 && employeePoints >= 6)
        //         {
        //             taxDeduction -= 7.65;
        //             console.log("\n---BENEFIT APPILED---");
        //         }
        //         if (userBuy == 4 && employeePoints >= 4)
        //         {
        //             userLivesLost -= 1;
        //             console.log("\n---ITEM APPILED---");
        //         }
        //         if (userBuy == 5 && employeePoints >= 10)
        //         {
        //             printCheat = true;
        //             console.log("\n---ITEM PURCHASED---");
        //         }
        //         if (userBuy == 6 && employeePoints >= 8)
        //         {
        //             taxDeduction -= 5.67;
        //             console.log("\n---POWERUP APPILED---");
        //         }
        //         else 
        //         {
        //             console.log("\nYou\'re gonna need to put in some effort, you currently can\'t afford this. Now, get back to work!");
        //         }
        //     }
        //     else 
        //     {
        //         console.log("\nLet\'s hope you keep up the good work then!");
        //     }
        //     console.log("\nWould you like to complete another shift? So far, you\'ve earned" + Game.ANSI_GREEN() + " $" + netPay + Game.ANSI_RESET() + ".");
        //     reader.nextLine();
        //     // I now understand the hate for Scanner
        //     var userContinue = reader.nextLine();
        //     if ((userContinue== "Y" || userContinue== "y" || userContinue== "yes" || userContinue== "Yes") && userLivesLost > 0 && netPay >= 100 && passedOn == false)
        //     {
        //         console.log("\nDo you want to purchase an extra life for $100 before you move on? So far, you have " + (livesTotal - userLivesLost) + " lives available.\nThis is a one-time opportunity and will be taken from your gross pay.");
        //         var userWantslives = reader.nextLine();
        //         if (userWantslives== "Y" || userWantslives== "y" || userWantslives== "yes" || userWantslives== "Yes")
        //         {
        //             userLivesLost -= 1;
        //             grossPay = grossPay - 100;
        //             console.log("\nA citation has been cleared from your record.");
        //             passedOn = true;
        //         }
        //         else 
        //         {
        //             console.log("\nGood luck.");
        //         }
        //     }
        //     if (userContinue== "Y" || userContinue== "y" || userContinue== "yes" || userContinue== "Yes")
        //     {
        //         wW = true;
        //     }
        //     else 
        //     {
        //         wW = false;
        //     }
        // }
        var careerRundown = "\n......\nCAREER RUNDOWN\n\nGross Pay Earned: $" + grossPay + "\nEmployee Points Earned: " + employeePoints + " ePs" + "\nTAX DEDUCTIONS" + "\n- Federal: 7.13%" + "\n- State: 5.97%" + "\n- Local: 3.82%" + "\n- FICA (Medicare & SS): 7.65%" + "\nEffective Tax Rate: 21.39%" + "\n" + "Net (Take-Home) Pay: " + netPay + "\nAmount Of Orders Completed: " + ordersCorrect + "\nAmount of Shifts Completed: " + shiftsCompleted + "\nTotal Citations: " + userLivesLost + "\n......";
        if (passedOn)
        {
            reader.nextLine();
        }
        console.log(careerRundown);
        if (userLivesLost == 0 && grossPay > 0)
        {
            console.log(Game.ANSI_YELLOW() + "\n? Achievement Unlocked - \"Employee Of The Month\"" + Game.ANSI_RESET());
            console.log("\nNo Mistakes!? Now that\'s what I call an exceptional employee.");
        }
        if (netPay >= moneyGoal)
        {
            console.log("\n? Achievement Unlocked - \"I came, I saw, I conquered.\"");
            console.log("\nSomehow, someway, you\'ve reached your monetary goal!");
            var buysPhone = false;
            console.log("\nDo you want to buy the ePhone XSS Pro Max Ultra? Y/N?");
            var finale = reader.nextLine();
            if (finale== "Y" || finale== "y" || finale== "yes" || finale== "Yes")
            {
                buysPhone = true;
            }
            if (buysPhone)
            {
                console.log("\n? GAME END - \"Captured On ePhone\"");
                var ePhone = "\n? ??????? ?\n? ??????? ?\n???????????\n???????????\n???????????\n???????????\n???????????\n???????????\n? ??????? ?\n? ??????? ?\n";
                console.log(ePhone);
                console.log("Never lost sight of the goal.");
            }
            else 
            {
                console.log("\n? GAME END - \"Chasing the Bag.\"");
                var showMeTheMoney = "\n,,,,,,,,,,,,,,,,,,,$$$$\n,,,,,,,,,,,,,,,,,,,$$$$\n,,,,,,,,,,,$$$$$$$$$$$$$$$$$\n,,,,,,,$$$$$$$$$$$$$$$$$$$$$$$$$$\n,,,,,$$$$$$$,,,,,,,$$$$,,,,$$$$$$$$\n,,,$$$$$$,,,,,,,,,,$$$$,,,,,,,,$$$$$$$\n,,$$$$$$,,,,,,,,,,,$$$$,,,,,,,,,,$$$$$$\n,,$$$$$$,,,,,,,,,,,$$$$\n,,$$$$$$,,,,,,,,,,,$$$$\n,,,$$$$$$,,,,,,,,,,$$$$\n,,,,$$$$$$$$,,,,,,$$$$$\n,,,,,,$$$$$$$$$$$$$$$$$\n,,,,,,,,,,$$$$$$$$$$$$$$$$$$\n,,,,,,,,,,,,,,,,,$$$$$$$$$$$$$$$$\n,,,,,,,,,,,,,,,,,,,$$$$,,,$$$$$$$$$$\n,,,,,,,,,,,,,,,,,,,$$$$,,,,,,,$$$$$$$\n,,,,,,,,,,,,,,,,,,,$$$$,,,,,,,,,,$$$$$$\n,,,,,,,,,,,,,,,,,,,$$$$,,,,,,,,,,,$$$$$$\n$$$$$$$,,,,,,,,,,,,$$$$,,,,,,,,,,$$$$$$$\n,$$$$$$,,,,,,,,,,,,$$$$,,,,,,,,,,$$$$$$$\n,,$$$$$$$,,,,,,,,,,$$$$,,,,,,,,$$$$$$$$\n,,,$$$$$$$$,,,,,,,,$$$$,,,,,,$$$$$$$$\n,,,,,,$$$$$$$$$$$$$$$$$$$$$$$$$$$\n,,,,,,,,,,$$$$$$$$$$$$$$$$$$$\n,,,,,,,,,,,,,,,,,,,$$$$\n,,,,,,,,,,,,,,,,,,,$$$$\n";
                console.log(showMeTheMoney);
                console.log("Never lost sight of the TRUE goal.");
            }
        }
        else 
        {
            console.log(gameEnd);
            console.log("\nSo close, yet so far.");
        }
    }

}

console.log("test");
console.log(Cash_Register.calcCustomerCash(5));
Game.shiftStart(true,[5, 1, 5, 3, 0.10, 7.50, 1000],Game.items);
