let age = 42

if (age <= 17){
    console.log("Underage");
} else if (age <= 65){
    console.log("Insurable");
}
else {
    console.log("Out of Range");
}

age <= 17 ? console.log("Underage") : console.log("18 or over");