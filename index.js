function scuberGreetingForFeet(feet){
  if (feet<=400){
    return 'This one is on me!';
  }else if(feet <2000 && feet> 400){
    return 'That will be twenty bucks.';

  }
  else if(feet <2500 && feet > 2000){
    return 'I will gladly take your thirty bucks.';

  }
  else if( feet> 2500){
    return 'No can do.';

  }
}

function ternaryCheckCity(city){
 return city=='NYC'?"Ok, sounds good.":"No go."
  
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
    
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';


  }
}


console.log("hello",switchOnCharmFromTip("generous"))

  // index.js
  //   scuberGreetingForFeet()
  //     1) gives customers a free sample if the ride is less than or equal to 400 feet
  //     2) charges 20 dollars for a distance between 400 and 2000 feet
  //     3) charges 30 dollars for a distance over 2000 feet
  //     4) does not allow rides over 2500 feet
  //   ternaryCheckCity()
  //     5) returns "Ok, sounds good." when the city is NYC
  //     6) should return "No go." if the destination city is not NYC
  //   switchOnCharmFromTip()
  //     7) should return "Thank you so much." if the tip is generous
  //     8) should return "Thank you." if the tip is not as generous
  //     9) should return "Bye." if anything else