
Algorithmic complexity is a measure of how long an algorithm would take to complete given an input of size n. If an algorithm has to scale, it should compute the result within a finite and practical time bound even for large values of n. For this reason, complexity is calculated asymptotically as n approaches infinity. While complexity is usually in terms of time, sometimes complexity is also analyzed in terms of space, which translates to the algorithm's memory requirements.

Analysis of an algorithm's complexity is helpful when comparing algorithms or seeking improvements. Algorithmic complexity falls within a branch of theoretical computer science called computational complexity theory. It's important to note that we're concerned about the order of an algorithm's complexity, not the actual execution time in terms of milliseconds.

Algorithmic complexity is also called complexity or running time.

Suppose you're looking for a specific item in a long unsorted list, you'll probably compare with each item. Search time is proportional to the list size. Here complexity is said to be linear.

On the other hand, if you search for a word in a dictionary, the search will be faster because the words are in sorted order, you know the order and can quickly decide if you need to turn to earlier pages or later pages. This is an example of logarithmic complexity.

If you're asked to pick out the first word in a dictionary, this operation is of constant time complexity, regardless of number of words in the dictionary. Likewise, joining the end of a queue in a bank is of constant complexity regardless of how long the queue is.

Suppose you are given an unsorted list and asked to find all duplicates, then the complexity becomes quadratic. Checking for duplicates for one item is of linear complexity. If we do this for all items, complexity becomes quadratic. Similarly, if all people in a room are asked to shake hands with every other person, the complexity is quadratic.


<H1>Big O Notation Rule </H1>
1. Find fastest growing term <br/>
2. Remove Coefficient<br/>

  Example: T=an+g = O(n)<br/>
           T = an^2 + n= o(n^2)
