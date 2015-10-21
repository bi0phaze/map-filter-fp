console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});


// #1
// define variables
var totalPrice= 0;
var avg;

//pull items
var item2 = items.forEach(function(currElement,idx,arr) {
//  add elemets sum all up into totalPrice
totalPrice += currElement.price;
// log item total
console.log(currElement.price) });
// price divided by the items = total
avg = Math.round(totalPrice/items.length) ;
//total of average
console.log(avg);
 $("#answer1").text(avg);



// #2

var midNumber = data.filter(function(item){
  return item.price >= 14 && item.price =< 18
});

var total = midNumber.map(function(element){
 return element.title + "<br>";
});

$("#answer2").append(total);








 // #3
//apply filter to items
var currency = items.filter(function(element) {
// pull the 1 element with GBP
return element.currency_code === "GBP";
});
//  
var total = currency.map(function(element) {
// get the item and amount
return [element.title, element.price];
});

$("#answer3").text(total);



// #4


// filter to extract array element being the matreials in items.
var materials = items.filter(function(currElement, idx, arr){
   return _.contains(currElement.materials,"wood");
});
//new var for materials // materials.map to return element.
var wood = materials.map(function(currElement){
  return [currElement.title];

});

$("#answer4").text(wood);





// #5
/////...............brain not functioning 
        var eight = items.filter(function(currElement,idx,arr){
  return currElement.materials.length >=8;
});
var total = eight.map(function(currElement){ ..//
	/////...............brain not functioning 



// #6

// filter to get element 
var unique = items.filter(function(currElement){
// return element same formula as #3
  return currElement.who_made === "i_did";
});

var total = unique.length

$("#answer6").text(total);
