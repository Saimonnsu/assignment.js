// feetToMile
function feetToMile(feet){
    var mile = feet/5280
    
    return mile;
}
var result = feetToMile(1000);
console.log(result);
// woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator (2, 2, 3);
console.log(woodResult);
// bricCalculator
function brickCalculator(numberOfFloor){
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    if(numberOfFloor > 20){
        numberOfBricks = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) ((numberOfFloor - 20) + 10 * 1000);
    }
    else if (numberOfFloor > 10){
        numberOfBricks = (firstTenFloor * 15 * 1000) + ((numberOfFloor - 10) * 12 * 1000);
    }
    else if (numberOfFloor > 0){
        numberOfBricks = (numberOfFloor * 15 * 1000);
    }
    else{
        console.log("number of floor is > o");
    }
    return numberOfBricks;
}
// tinyFriend
function tinyFriend(names){
    var smallest = names[0];
    for (var i = 0; i < names.length; i++){
        varCurrentName = names [i];
        if (varCurrentName.length < smallest.length){
            smallest = varCurrentName;
        }
    }
    return smallest;
}
var smallestNameFriend = tinyFriend(['Selim', 'Niloy','Mohammad', 'Any']);
console.log(smallestNameFriend);