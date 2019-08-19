'use strict';

function collectSameElements(collectionA, collectionB) {
	
var collectionB01 = new Array();
collectionB01 = Object.values(collectionB)[0];	
var result = new Array();
var sameCount = 0;
 for(var i=0;i<collectionA.length;i++){
    var tempA = collectionA[i].key
    for(var j=0;j<collectionB01.length;j++){
        var tempB = collectionB01[j];
        if(tempA == tempB){
                result[sameCount] = tempB;
                sameCount++;
        }
    }
	
}
return result;
}