function getMostCostEffectiveSolution(scores, costs, highscore) {
    var cost=100;
    var index=[];
    var highscore;
    for(var i=0; i<scores.length; i++){
        if (scores[i] == highscore）{
        if (costs>cost[i]){
            index=i;
            cost =cost[i];
        }
          }
   
    }
    return index;
}
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");