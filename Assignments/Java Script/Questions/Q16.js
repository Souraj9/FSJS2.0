/* 
16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
*/





function seasons(month) {
     if (month = 'December' , month = 'January' , month = 'February') {
        return ' The season is (Winter)';
      } 
      else if (month = 'March' , month = 'April' , month = 'May') {
        return 'The season is (Spring)';
      }
      else if (month = 'June' , month = 'July' , month = 'August') {
        return 'The season is (Summer)';
      }
      else if (month = 'September' , month = 'October' , month = 'November') {
        return 'The season is (Autumn)';
      } 
  }
  
  let output = seasons('January');
  console.log(output);





 
   
  