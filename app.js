let robots = 0;

let clickUpgrades = {
    MomsOldFashionedRobotOil: {
        Cost: 10,
        Quantity: 0,
        Multiplier: 15,
    },

    MechanicalArms: {
        Cost: 10,
        Quantity: 0,
        Multiplier: 25,
    }
}

let automaticUpgrades = {

    planetExpressDelivery: {
        Cost: 20,
        Quantity: 0,
        Multiplier: 35,
    },

    Robot1X: {
        Cost: 50,
        Quantity: 0,
        Multiplier: 50,
    }

}

function buyMomsOldFashionedRobotOil() {
    if (robots >= clickUpgrades.MomsOldFashionedRobotOil.Cost) {
        clickUpgrades.MomsOldFashionedRobotOil.Quantity++
        console.log("Working")
    }
}

function buyMechanicalArms() {
    if (robots >= clickUpgrades.MechanicalArms.Cost) {
        clickUpgrades.MechanicalArms.Quantity++
        console.log("Working")
    }
}



function mineRobots() {
    robots++
    console.log(robots)
}

