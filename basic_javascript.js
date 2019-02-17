// freeCodeCamp 
// Javascript Algorithms And Data Structures Certification (300 hours)

// Basic JavaScript 

// Record Collection
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/record-collection/

function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
   	// if key(prop) exists at collection[id] then add value to key's values: 
    collection[id][prop].push(value);
   }
   else {
   	// give prop key a value
    collection[id][prop]=[value];
   }
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}