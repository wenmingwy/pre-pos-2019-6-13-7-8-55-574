'use strict';
// 统计出A集合中相同的元素的个数，形成C集合，C集合中的元素要形如{key:"a", count: 3}，然后选出C集合中
// 的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合
function createUpdatedCollection(collectionA, objectB) {

  var result = [];
  var map = new Map();
  for (var i=0;i<collectionA.length;i++){
		if (map.get(collectionA[i])==null){
		  map.set(collectionA[i],1);
		}else{
		  map.set(collectionA[i],map.get(collectionA[i])+1);
		}
  }
  
  map.forEach(function(key,value){
		result.push({key:value,count:key})
  });
  console.log(result);


  var  collectionB = objectB.value;
  for (var i = 0;i < result.length;i++)
  {

		for (var j = 0;j<collectionB.length;j++)
		{
		  if (result[i].key == collectionB[j])
		  {
			var temp = result[i].count % 3;
			var  a = (result[i].count - temp) / 3;
			result[i].count = result[i].count - a;
		  }
		}
  }
  //返回值
  return result;
}
