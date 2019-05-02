'use strict'
/**
  位图算法的实现，利用 32 位整数的二进制表示， 存在整数将对应的位置1；

  用一个bit位来标识一个int整数存不存在。

  算法节省内存，10亿的整数去重或者排序只需要： 10 0000 0000 bit = 120Mb内存

  一个int可以表示32个整数， 


**/

const INT_LENGTH = 32;

class BitMap
{
	constructor(maxInt)
	{
		this.maxInt = maxInt;
		this.length = Math.floor(maxInt / INT_LENGTH) + 1;
		this._bits = new Array(this.length).fill(0);
	}

	set(x)
	{
		let index = Math.floor(x / INT_LENGTH);
		let curr = x % INT_LENGTH;
		this._bits[index] |= (1 << curr);
	}

	reset(x)
	{
		let index = Math.floor(x / INT_LENGTH);
		let curr = x % INT_LENGTH;
		this._bits[index] &= ~(1 << curr);
	}

	test(x)
	{
		let index =  Math.floor(x / INT_LENGTH);
		let curr = x % INT_LENGTH;
		if( this._bits[index] & (1 << curr) )
			return true;
		else
			return false;
	}

}

// TEST --- 10位数 -- 120MB
let bitmap = new BitMap(1200000000);

bitmap.set(2);
bitmap.reset(2);
bitmap.set(3);
bitmap.set(4);
bitmap.set(12000000);

for(let i=1; i<=bitmap.maxInt; ++i)
{
	if(bitmap.test(i))
		console.log(i);
}
