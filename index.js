function distanceFromHqInBlocks(street){
    return Math.abs(street - 42)
}

function distanceFromHqInFeet(street){
    return 264 * distanceFromHqInBlocks(street)
}

function distanceTravelledInFeet(start, destination){
    return 264 * Math.abs(destination - start)
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0
    }
    else if (2000 > distance){
        return ((distance - 400) * 0.02)
    }
    else if (2500 > distance){
        return 25
    }
    else {
        return "cannot travel that far"
    }
}

