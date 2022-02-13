let robots = 0;

let clickUpgrades = {
    MomsOldFashionedRobotOil: {
        Cost: 5,
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
        clickUpgrades.MomsOldFashionedRobotOil.Cost += 5;
        document.querySelector('.updateOilCost').innerHTML = clickUpgrades.MomsOldFashionedRobotOil.Cost;
        updateResource();
    }
}

function buyMechanicalArms() {
    if (robots >= clickUpgrades.MechanicalArms.Cost) {
        clickUpgrades.MechanicalArms.Quantity++;
        robots -= clickUpgrades.MechanicalArms.Cost;
        clickUpgrades.MechanicalArms.Cost++;
        updateResource();
    }
}

function buyPlanetExpressDelivery() {
    if (robots >= automaticUpgrades.planetExpressDelivery.Cost) {
        automaticUpgrades.planetExpressDelivery.Quantity++;
        robots -= automaticUpgrades.planetExpressDelivery.Cost;
        automaticUpgrades.planetExpressDelivery.Cost++;
        deliveryVar();
        updateResource();
    }
}

function buyRobot1X() {
    if (robots >= automaticUpgrades.Robot1X.Cost) {
        automaticUpgrades.Robot1X.Quantity++;
        robots -= automaticUpgrades.Robot1X.Cost;
        automaticUpgrades.Robot1X.Cost++;
        robot1XVar();
        updateResource();
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
    updateDelivery.innerHTML = automaticUpgrades.planetExpressDelivery.Quantity;
    let updateRobot1X = document.querySelector('.updateRobot1X');
    updateRobot1X.innerHTML = automaticUpgrades.Robot1X.Quantity;
}


function mineRobots() {
    debugger;
    robots++
    console.log(robots)
    updateResource();
}


//ANCHOR: Still stuck on how to get these to work:


// const deliveryVar = setInterval(function () { robots += automaticUpgrades.planetExpressDelivery.Multiplier }, 3000)

// const robot1XVar = setInterval(function () { robots += automaticUpgrades.Robot1X.Multiplier }, 3000)

