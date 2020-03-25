/******************
 * YOUR CODE HERE *
 ******************/
function triple(num){
  return num *3
}

function tripleAll(array){
  return array.map(triple)
}

function getNegativeValue(num){
  if (num > 0){
    return num * -1
  } else{
    return num
  }
}

function negativeValues(array){
  return array.map(getNegativeValue)
}

function makeQuestion(str){
  return str + '?'
}

// function makeEx(str){
//   return str + '!'
// }

function questionings(array){
  return array.map(makeQuestion)
  //return array.map(makeEx) -_-
}

const getInitials = name => { let initials = ''; name.split(' ').map( subName => initials = initials + subName[0]); return initials; }; 

function changeToInitials(array){
  return array.map(getInitials)
}

function doubleIfEven(num){
  if (num % 2 == 0){
    return num * 2
  }else{
    return num 
  }
}

function doubleEven(array){
  return array.map(doubleIfEven)
}

function titleCase(string){
  return string[0].toUpperCase + string.slice(1).toLowerCase()
}

function titleCaseNames(string){
  return string.split(" ").map(letter => titleCase(letter).join(" "))
}

function doubleEveryOther(num){
  return num.map(function(value, i){
    return i % 2 == 0 ? value : value * 2
  })
}
/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
