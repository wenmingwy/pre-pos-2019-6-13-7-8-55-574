'use strict';
// 选出A集合中元素的key属性跟B对象中value属性中的元素
// 相同的元素,把他们的count，满3减1，输出减过之后的新A集
function createUpdatedCollection(collectionA, objectB) {


  var  collectionB = objectB.value;
  
    // 双循环进行遍历
	
	
  for (var i = 0;i < collectionA.length;i++)
  {

    for (var j = 0;j<collectionB.length;j++)
    {
		  if (collectionA[i].key == collectionB[j])
		  {
			var temp = collectionA[i].count % 3;
			var  result = (collectionA[i].count - temp) / 3;
			collectionA[i].count = collectionA[i].count - result;
		  }
    }
  }
    // 返回值
  return collectionA;
}
