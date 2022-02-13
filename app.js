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
        clickUpgrades.MomsOldFashionedRobotOil.Quantity++;
        robots -= clickUpgrades.MomsOldFashionedRobotOil.Cost;
        clickUpgrades.MomsOldFashionedRobotOil.Cost++;
        updateResource();
    }
}

function buyMechanicalArms() {
    if (robots >= clickUpgrades.MechanicalArms.Cost) {
        clickUpgrades.MechanicalArms.Quantity++;
        robots -= clickUpgrades.MechanicalArms.Cost;
        clickUpgrades.MechanicalArms.Cost++;
        updateResource();
        // console.log("Working")
    }
}

function buyPlanetExpressDelivery() {
    if (robots >= clickUpgrades.planetExpressDelivery.Cost) {
        clickUpgrades.planetExpressDelivery.Quantity++;
        robots -= clickUpgrades.planetExpressDelivery.Cost;
        clickUpgrades.planetExpressDelivery.Cost++;
        updateResource();
        // console.log("Working")
    }
}

function buyRobot1X() {
    if (robots >= clickUpgrades.Robot1X.Cost) {
        clickUpgrades.Robot1X.Quantity++;
        robots -= clickUpgrades.Robot1X.Cost;
        clickUpgrades.Robot1X.Cost++;
        updateResource();
        // console.log("Working")
    }
}

function updateResource() {
    let updateResource = document.querySelector('.updateResource');
    updateResource.innerHTML = robots;
    let updateOil = document.querySelector('.updateOil');
    updateOil.innerHTML = clickUpgrades.MomsOldFashionedRobotOil.Quantity;
    let updateArms = document.querySelector('.updateArms');
    updateArms.innerHTML = clickUpgrades.MechanicalArms.Quantity;
    let updateDelivery = document.querySelector('.updateDelivery');
    updateDelivery.innerHTML = clickUpgrades.Delivery.Quantity;
    let updateRobot1X = document.querySelector('.updateRobot1X');
    updateRobot1X.innerHTML = clickUpgrades.Robot1X.Quantity;
}


function mineRobots() {
    robots++
    console.log(robots)
    updateResource();
}

