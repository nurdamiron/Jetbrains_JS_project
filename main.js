const input = require('sync-input');

const teddy_bear = {
    name: "Teddy Bear", cost: 10, id: 1
};
const big_red_ball = {
    name: "Big Red Ball", cost: 5, id: 2
}
const huge_bear = {
    name: "Huge Bear", cost: 50, id: 3
}
const candy = {
    name: "Candy", cost: 8, id: 4
}
const stuffed_tiger = {
    name: "Stuffed Tiger", cost: 15, id: 5
}
const stuffed_dragon = {
    name: "Stuffed Dragon", cost: 30, id: 6
}
const skateboard = {
    name: "Skateboard", cost: 100, id: 7
}
const toy_car = {
    name: "Toy Car", cost: 25, id: 8
}
const basketball = {
    name: "Basketball", cost: 20, id: 9
}
const scary_mask = {
    name: "Scary Mask", cost: 75, id: 10
}

let gifts = [teddy_bear, big_red_ball, huge_bear, candy, stuffed_tiger, stuffed_dragon, skateboard, toy_car, basketball, scary_mask];
let visitor_ticket = 0;

console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);

function buy_gift() {
    if (gifts.length == 0) {
        console.log("Wow! There are no gifts to buy.");
    } else {
        let gift_id = Number(input("Enter the number of the gift you want to get: "));

        if (Number.isNaN(gift_id)) {
            console.log("Please enter a valid number!");
        } else {
            let gift_to_buy = gifts.find(i => i.id === gift_id);

            if (!gifts.includes(gift_to_buy)) {
                console.log("There is no gift with that number!");
            } else {
                if (visitor_ticket < gift_to_buy.cost) {
                    console.log(`You don't have enough tickets to buy this gift.\nTotal tickets: ${visitor_ticket}`);
                } else {
                    visitor_ticket -= gift_to_buy.cost;

                    for (i = 0; i < gifts.length; i++) {
                        if (gifts[i] == gift_to_buy) {
                            gifts.splice(i, 1);
                        }
                    }

                    console.log(`Here you go, one ${gift_to_buy.name}!\nTotal tickets: ${visitor_ticket}`);
                }
            }
        }
    }
}

function add_ticket() {
    let add_amount = Number(input("Enter the ticket amount: "));

    if (Number.isNaN(add_amount) || add_amount > 1000 || add_amount < 0) {
        console.log("Please enter a valid number between 0 and 1000.");
    } else {
        visitor_ticket += add_amount;
        console.log(`Total tickets: ${visitor_ticket}`);
    }
}

function check_ticket() {
    console.log(`Total tickets: ${visitor_ticket}`);
}

function show_gifts() {
    console.log("Here's the list of gifts:\n");

    if (gifts.length == 0) {
        console.log("\nWow! There are no gifts to buy.");
    } else {
        for (let i in gifts) {
            console.log(`${gifts[i].id}- ${gifts[i].name}, Cost: ${gifts[i].cost} tickets`)
        }
    }
}

show_gifts();

while (true) {
    let option = Number(input(`\nWhat do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n`));

    switch (option) {
        case 1:
            buy_gift();
            break;
        case 2:
            add_ticket();
            break;
        case 3:
            check_ticket();
            break;
        case 4:
            show_gifts();
            break;
        case 5:
            console.log("Have a nice day!");
            return;
        default:
            console.log("Please enter a valid number!");
            break;
    }
}
