function superbowlWin(records){ //declaring superbowlWin function where the parameter records is an array
    const found = records.find(function(entry){ //entry = element within records
        return entry.result === "W" //returns the object with result: "W" into the found variable
    }) 
    if (found) { //if the .find didn't find anything, found will be undefined which is falsey
        return found.year //this block will execute if records has a win
    }
}