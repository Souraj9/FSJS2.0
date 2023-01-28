/* 11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now. */



    const x = new Date();
    // year:
    console.log(x.getFullYear());
    //date:
    console.log(x.getDate());
    //day:
    console.log(x.getDay());
    //hours:
    console.log(x.getHours());
    //minutes:
    console.log(x.getMinutes());

    //Elapsed time:
    let y = new Date('1970-01-01');
    let z = new Date();
    let elapsed = (z-y);
    console.log(elapsed / 1000);