# 位图算法的实现

#### 1.算法来源

   为了应对日常的大规模数据处理需求， 应用于正整数的去重和排序问题
   
   两个目的： **有限正整数排序** or **有限正整数（ID，`单链表去重`）去重**
   
   
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

bool test(int n)
{
    return this._bits[n / INT_LENGTH] & (1 << n % INT_LENGTH );
}
```

# 位图的应用，每一次用到都会更新到这里

## 1. 正整数排序

## 2. Github题目，编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

示例1:

 输入：[1, 2, 3, 3, 2, 1]
 输出：[1, 2, 3]
 
示例2:

 输入：[1, 1, 1, 1, 2]
 输出：[1, 2]
 
提示：

链表长度在[0, 20000]范围内。

链表元素在[0, 20000]范围内。

进阶：

如果不得使用临时缓冲区，该怎么解决？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicate-node-lcci

最优题解，使用位图实现去重：
```c++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* removeDuplicateNodes(ListNode* head) {
       int bits[20000 / 32 + 1] = {0};
        ListNode* cur = head;
        while (cur != NULL && cur->next != NULL) {
            set(bits, cur->val);
            if (test(bits, cur->next->val))
                cur->next = cur->next->next;
            else
                cur = cur->next;
        }
        return head;
    }
    
    void set(int *bits, int val){
        bits[val / 32] |= 1 << val % 32;
    }

    bool test(int *bits, int val){
        return bits[val / 32] & (1 << val % 32);
    }
};
```

