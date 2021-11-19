// Hide all conversion blocks
document.getElementById('output').style.visibility = 'hidden';


// Find out which option was selected
function weightSelect() {

    // Assign the selected option to weightTpe variable
    let weightType = document.getElementById("weighType").value;
    
    // Assign the inputted value to unit
    let unit = document.getElementById('unit').value;
    
    // Display all blocks 
    document.getElementById('output').style.visibility = 'visible';

    // Check if selection is kilograms
    if (weightType == "kg") {

        // Make relevant weight blocks visible
        document.getElementById('kilosOutput').parentElement.parentElement.style.display = 'none';
        document.getElementById('gramsOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('poundsOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('ozOutput').parentElement.parentElement.style.display = 'block'; 
        
        // Call appropriate function for calculations
        convertKilos(unit);
    } 
    
    // Check if selection is grams
    else if (weightType == "g") { 

        // Make relevant weight blocks visible
        document.getElementById('kilosOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('gramsOutput').parentElement.parentElement.style.display = 'none';
        document.getElementById('poundsOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('ozOutput').parentElement.parentElement.style.display = 'block'; 
        
        // Call appropriate function for calculations
        convertGrams(unit);
    } 
    
    // Check if selection is pounds
    else if (weightType == "lbs") { 

        // Make relevant weight blocks visible
        document.getElementById('kilosOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('gramsOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('poundsOutput').parentElement.parentElement.style.display = 'none';
        document.getElementById('ozOutput').parentElement.parentElement.style.display = 'block'; 
        
        // Call appropriate function for calculations
        convertPounds(unit);
    } 
    
    // Check if selection is ounces
    else if (weightType == "oz") {

        // Make relevant weight blocks visible
        document.getElementById('kilosOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('gramsOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('poundsOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('ozOutput').parentElement.parentElement.style.display = 'none';  
        
        // Call appropriate function for calculations
        convertOunces(unit);
    }

    document.getElementById('unit').addEventListener('input', function(e){
        let unit = e.target.value;

        if (weightType == "kg") {
 
            // Call appropriate function for calculations
            convertKilos(unit);
        } 
        
        // Check if selection is grams
        else if (weightType == "g") { 

            // Call appropriate function for calculations
            convertGrams(unit);
        } 
        
        // Check if selection is pounds
        else if (weightType == "lbs") { 

            // Call appropriate function for calculations
            convertPounds(unit);
        } 
        
        // Check if selection is ounces
        else if (weightType == "oz") {

            // Call appropriate function for calculations
            convertOunces(unit);
        }
    })
  
 }
        
        
function convertKilos(weight) {
            
    //convert from kg to g
    document.getElementById('gramsOutput').innerHTML = `${(weight*1000).toFixed(3)} g`;

    //convert from kg to lbs
    document.getElementById('poundsOutput').innerHTML = `${(weight*2.20462).toFixed(3)} lbs`;

    //convert from kg to oz
    document.getElementById('ozOutput').innerHTML = `${(weight*35.274).toFixed(3)} oz`;

}

function convertGrams(weight) {
    
    //convert from g to kg
    document.getElementById('kilosOutput').innerHTML = `${(weight*0.001).toFixed(3)} kg`;

    //convert from g to lbs
    document.getElementById('poundsOutput').innerHTML = `${(weight*0.00220462).toFixed(3)} lbs`;

    //convert from g to oz
    document.getElementById('ozOutput').innerHTML = `${(weight*0.035274).toFixed(3)} oz`;

}

function convertPounds(weight) {

    //convert from lbs to g
    document.getElementById('gramsOutput').innerHTML = `${(weight*453.592).toFixed(3)} g`;

    //convert from lbs to kg
    document.getElementById('kilosOutput').innerHTML = `${(weight*0.453592).toFixed(3)} kg`;

    //convert from lbs to oz
    document.getElementById('ozOutput').innerHTML = `${(weight*16).toFixed(3)} oz`;

}

function convertOunces(weight) {
  
    //convert from oz to g
    document.getElementById('gramsOutput').innerHTML = `${(weight*28.3495).toFixed(3)} g`;

    //convert from oz to lbs
    document.getElementById('poundsOutput').innerHTML = `${(weight*0.0625).toFixed(3)} lbs`;

    //convert from oz to kg
    document.getElementById('kilosOutput').innerHTML = `${(weight*0.0283495).toFixed(3)} kg`;

}