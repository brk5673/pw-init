import { CustomerDetails } from '../helper/printHelper.js';

const customerDetails = new CustomerDetails();
customerDetails.printFirstName('John');

let familySize = 10;
let plannedDistance = 210;
function recommendedCar (familySize, plannedDistance) {
  if (familySize <= 4 && plannedDistance < 200) {
    return 'Tesla Model';
  } else if (familySize <= 4 && plannedDistance > 200) {
    return 'Toyota Camry';
  } else if ( familySize > 4 ) {
    return 'Minivan';
  }

}

console.log(recommendedCar(familySize, plannedDistance));