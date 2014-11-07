/**
 * Created by AntonyBaasan on 14-11-07.
 * Controller script.
 *
 * Generate and response Random numbers
 */

//Returns "Random and Unique" integer list between "from" "to" params
exports.getRandUnique = function(req, res)
{
    var minValue = 0;
    var maxValue = 10000;
    var from = req.params.from;
    var to = req.params.to;

    var reason = "";
    //is integer validation
    if(!isInt(from) || !isInt(to))
        reason = "Wrong data type. Input has to be Integer";

    from = parseInt(from);
    to = parseInt(to);

    //range validation
    if(from > to || from < minValue || to > maxValue)
        reason = "Wrong data range";

    //if error
    if(reason != "")
    {
        res.status(400);
        return res.send({reason:reason})
    }

    res.send(generateRandomUnique(from, to));
}

//checks if value is Integer
function isInt(value) {
    if (isNaN(value)) {
        return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
}

//generate linear integer array between "from" to "to"
function generateArray(from, to)
{
    var array = [];
    for(var i=from, index=0; i<=to; i++,index++) {
        array[index] = i;
    }
    return array;
}

//returns shuffled integer array between "from" to "to" numbers
//Fisher–Yates shuffle algorithm
function generateRandomUnique(from, to){
    var myArray = generateArray(from, to);

    for (var i = myArray.length-1; i > 1  ; i--)
    {
        var r = Math.floor(Math.random()*i);
        var t = myArray[i];
        myArray[i] = myArray[r];
        myArray[r] = t;
    }

    return myArray;
}