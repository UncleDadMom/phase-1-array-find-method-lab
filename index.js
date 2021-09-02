function superbowlWin(records){
    const found = records.find(function(entry){
        return entry.result === "W"
    }) 
    if (found) {
        return found.year
    }
}