
//What does the following code return?
const s = new Set([1,1,2,2,3,4])
console.log(s)
// { 1, 2, 3, 4 }


//What does the following code return?
const a = [...new Set("referee")].join("");
console.log(a);
//ref

//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m);
//{ [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }


//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

function hasDuplicate(values) {
    const a = values.length
    const v = new Set(values)
    const b = v.size
    return a !== b;
}

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
    return "aeiou".includes(char);
}


function VowelCount(str){
    const vowelMap = new Map();

    for( let char of str){
        let lowercaseChar = char.toLowerCase()
        if(isVowel(lowercaseChar)){
            if(vowelMap.has(lowercaseChar)){
                vowelMap.set(lowercaseChar, vowelMap.get(lowercaseChar) + 1);
            }else{
                vowelMap.set(lowercaseChar, 1);
            }
        }
    }
    return vowelMap;
}

console.log(VowelCount('quick'));


