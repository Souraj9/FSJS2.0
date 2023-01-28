// 17. Write a program which tells the number of days in a month.






 let month = 'February';
if('January' === month , 'March' === month , 'May' === month , 'July' === month , 'Aguest' === month , 'October' === month , 'December' === month) {
    console.log(` ${month} has 31 days`);
}
else if('February' === month){
    console.log(` ${month} has 28 days`);
}
else if('April' === month , 'june' === month , 'September' === month , 'November' === month){
    console.log(`${month} has 30 days`);
}
else{
    console.log('Re-enter');
}