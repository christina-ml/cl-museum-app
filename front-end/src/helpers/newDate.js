function newDate() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    let years = [2022]

    let newMonthStr = ''
    let newDayStr = 0

    // gives random values from 0 - 11
    let randomMonthIndex = Math.floor(Math.random() * 12)
    // console.log("randomMonthIndex:", randomMonthIndex) 

    // get random month by iterating through months array
    for (let i = 0; i < months.length; i++){
        if (i === randomMonthIndex){
            newMonthStr += months[i];
        }
    }
    // console.log(newMonthStr)


    // check how many days are in each month
    if (newMonthStr === "February"){
        days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    }

    if (newMonthStr === "April" || newMonthStr === "June" || newMonthStr === "September" || newMonthStr === "November"){
        days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    }

    // console.log(`Did you know? ${newMonthStr} 2022 has ${days.length} days!`)
    // after getting random month, get a random day, based on the chosen month.
    let randomDayIndex = Math.floor(Math.random() * days.length)
    // console.log(randomDayIndex);

    for (let j = 0; j < days.length; j++){
        if (j === randomDayIndex){
            newDayStr += days[j];
        }

    }

    // Note: This code will only make sense for during the years COVID-19 mask wearing is applicable.
    // To make current - dates will be from April 2022 - March 2023
    if (newMonthStr === "January" || newMonthStr === "February" || newMonthStr === "March"){
        years = 2023;
    }

    // console.log(`${newMonthStr} ${newDayStr}, 2022`);
    return `${newMonthStr} ${newDayStr}, ${years}`;
}

export default newDate;