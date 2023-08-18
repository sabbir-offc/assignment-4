function cubeNumber(number) {
  let result = number * number * number;
  if (typeof number !== "number") {
    return "Invalid input";
  }
  return result;
}

const output = cubeNumber(3);




function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "You need to inputs a valid strings.";
  }

  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

const string = matchFinder("John Doe", "ohn");






function sortMaker(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return "Invalid Input";
    }
  }
  const firstElement = arr[0];
  let equal = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstElement) {
      equal = false;
      break;
    }
  }
  if (equal) {
    return "equal";
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const input1 = sortMaker([2, 3]);
const input2 = sortMaker([4, 2]);
const input3 = sortMaker([4, 4]);
const input4 = sortMaker([1, 2]);
const input5 = sortMaker([4, -2]);


function findAddress(obj) {
  if (typeof obj !== "object") {
    return "please provide me a valid object";
  } else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return street + "," + house + "," + society;
  }
}

const address = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};






function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || changeArray.length === 0) {
    return "Your array is empty,Please fill up it first.";
  }

  let totalBill = 0;
  for (let i = 0; i < changeArray.length; i++) {
    totalBill += changeArray[i];
  }

  if (totalBill >= totalDue) {
    return true;
  } else {
    return false;
  }
}

const bill = [1, 5, 5];
const chipsPrice = 10;

