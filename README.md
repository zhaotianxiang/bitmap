# 位图算法的实现

#### 1.算法来源

   为了应对日常的大规模数据处理需求， 应用于正整数的去重和排序问题
   
   两个目的： **正整数排序** or **正整数（ID） 去重**
   
   
#### 2.算法优点
 
   1. 节省内存 0 ~ 4 000 000 000 （40亿） 仅需内存 < 512MB
   
   2. 降低排序算法时间复杂度， 仅有O(n), 既扫描一次数据即可完成排序。
   
   3. 世界上存在既节约内存也降低时间复杂度的算法。

#### 3.算法的思路

   一个 **正整数** 用 **1bit** 来表示其是否存在， 存在将对应位置1 否则置0
   
#### 4. 核心置位运算

```c
#define INT_LENGTH 32

/*置第 n 位为 1 */
void set(int n)
{
    int index = n / INT_LENGTH;
    int cur = n % INT_LENGTH;
    this._bits[index] |= (1 << cur);
}

/*置第 n 位为 0 */
void reset(int n)
{
    int index = n / INT_LENGTH;
    int cur = n % INT_LENGTH;
    this._bits[index] &= ~(1 << cur);
}
```
