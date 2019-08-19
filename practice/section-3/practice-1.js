'use strict';

// 选出A集合中元素的key属性跟B对象中value属性中的元素
// 相同的元素,把他们的count-1，输出减过之后的新A集合

function createUpdatedCollection(collectionA, objectB) {
  
  
  var  collectionB = objectB.value;
  // 双循环进行遍历
  for (var i = 0;i < collectionA.length;i++)
  {
		for (var j = 0;j<collectionB.length;j++)
		{
		  if (collectionA[i].key == collectionB[j])
		  {
			collectionA[i].count --;
		  }
		}
  }
  // 返回值
  return collectionA;
}
