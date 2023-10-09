var a = 21;
var b;
var count = "";
const date =  new Date(2020,3,3)


const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

    switch(month){
        case 1: b = "January";
            count="31";
            break;
        case 2: b = "February";
            count=28/29;
            break;
        case 3: b = "March";
            count="31";
            break;
        case 4: b = "April";
            count="30";
            break;
        case 5: b = "May";
            count="31";
            break;
        case 6: b = "June"; 
            count="30";    
        break;

        case 7: b = "July";
            count="31";
            break;
        case 8: b = "August";
            count="31";
            break;
        case 9: b = "September";
            count="30";
            break;
        case 10: b = "October";
            count="31";    
            break;
        case 11: b = "November";
            count="30";
            break;
        case 12: b = "December";
            count="31";
            break;
        default:
            b="You have entered wrong value";  
            count="not applicable accordingly"
    }
    
    console.log( "Month -" + b + ", Days " + count )
    console.log(date);