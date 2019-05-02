#include<iostream>
#include<vector>
using namespace std;

#define INT_BITS 32

class BitMap
{
	private:
		vector<int> _bits;
		size_t range;

	public:
		BitMap(size_t range)
		{
			this->range = range;
		    this->_bits.resize(range/INT_BITS + 1);
		}

		void set(size_t x)
		{
			size_t index = x / INT_BITS;
			size_t temp = x % INT_BITS;
			this->_bits[index] |= (1 << temp); 
		}

		void reset(size_t x)
		{
	        size_t index = x / INT_BITS;
			size_t temp = x % INT_BITS;
			this->_bits[index] &= ~(1 << temp);
		}

		bool test(size_t x)
		{
			size_t index = x /INT_BITS;
			size_t temp = x % INT_BITS;
			if(this->_bits[index] & (1 << temp))
				return true;
			else
				return false;
		}
		size_t getRange()
		{
			return this->range;
		}
};

int main()
{
	size_t N;
	BitMap m(100);

	while(cin >> N)
	{
		if(N <= 0)
			break;
		m.set(N);
	}

	for(int i=1; i<m.getRange(); i++){
		if(m.test(i))
		{
			cout << i <<' ';
		}
	}
	cout << endl;
	return 0;
}
