function getMostCostEffectiveSolution(scores, costs, highscore) {
    var cost=100;
    var index=[];
    var highscore;
    for(var i=0; i<scores.length; i++){
        if (scores[i] == highscore）{
            index=i;
        }
        if (costs>100){
            cost=index;
        }
        return index;
    }
    return index;
}
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");