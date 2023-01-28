/* 12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm */




let time_date = {
    x : new Date (),

    // Format [YYYY-MM-DD HH:mm ]
first : function () {
    let td1 =
        this.x.getFullYear() +
        "-" +
        this.x.getMonth() +
        1 +
        "-" +
        this.x.getDate() +
        " " +
        this.x.getHours() +
        ":" +
        this.x.getMinutes();
  
      return td1;
} ,
// Format - [ DD-MM-YYYY HH:mm ]
secound: function () {
    let td2 =
      this.x.getDate() +
      "-" +
      this.x.getMonth() +
      1 +
      "-" +
      this.x.getFullYear() +
      " " +
      this.x.getHours() +
      ":" +
      this.x.getMinutes();

      return td2;
    },
    // Format - [ DD/MM/YYYY HH:mm ]
  third: function () {
    let td3 =
      this.x.getDate() +
      "/" +
      this.x.getMonth() +
      1 +
      "/" +
      this.x.getFullYear() +
      " " +
      this.x.getHours() +
      ":" +
      this.x.getMinutes();

    return td3;
  },

}
console.log("Format [YYY-MM-DD HH:MM] ", time_date.first());
console.log("Format [DD-MM-YYY HH:MM] ", time_date.secound());
console.log("Format [DD/MM/YYY HH:MM] ", time_date.third());