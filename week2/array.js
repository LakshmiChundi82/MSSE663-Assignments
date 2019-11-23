// var names = new Array("Mary","Tom","Jack","Jill") 
// for(var i = 0;i<names.length;i++) { 
//    console.log(names[i]) 
// }

  
// #1 Take an array of numbers and make them strings
function stringItUp(arr) {
    
    var tempArray = [];

    arr.forEach(element => {
        tempArray.push(element.toString());
    });
   
    
    return tempArray;
}

console.log(stringItUp([2,5,100]));



// #2 Make an array of strings of the names

function namesOnly(arr) {

    var nameArray = [];

    arr.forEach(element => {
        nameArray.push(element.name);
    });

    return nameArray;
   
}

console.log(
	namesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);


// #3 Filter the output array from #2.


function oldOnesOnly(arr) {
    var newArray = [];
	arr.filter(function(item) {
        if(item.age > 60) {
            newArray.push(item.age);
        }
      });
    return newArray;  
}

console.log(
	oldOnesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);