// One data type in JS is the 'numbers' data type

32

3.43556

Math.PI


// Programs commonly use numbers for arithmetic
// Arithmetic operators: +, -, /, *, %
// 

3 + 4

3 + 2 * 2

// JS runs arithmatic using mathematic order of operations
// Think of PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction)
// When there is more than one + or - sign, it's computed from left to right. Same for * and /

3 + 2 * 2 / 2

    (3 + 2) * 2

// Modulo (the percent sign) returns the remainder after dividing the value on the left with 
// the value on the right.

8 % 2

9 % 5

// NaN stands for Not A Number.  NaN sometimes represents unrepresentable data. It may also get
// returned if you attempt to do something like multiply a string by a number.
NaN

// Math.random() returns a random floating point value from 0 to 1.
Math.random()

// Adding a * followed by a number at the end of Math.random() will give you random numbers
// from 0 up to (but not including) the number you specified.
Math.random() * 3

// Math.floor(Math.random()*3) returns an integer (as opposed to a floating point) less than the
// number you specify after the *
Math.floor(Math.random() * 3);




// ASSIGNMENT
// 1. Generate a random number from 0-10
// 2. Find the remainder of 5/2

// Strings are another data type used to identify text. They can be created with single
// or double quotes.

'My name is Thomas'

"Her name is Cardi B"

"His name's Quav0"

// The \ is an escape character. It can be used for actions such as adding an apostrophe
// or creating new lines.

'His name\'s Cardi'

'My name\'s Thomas. \nHis name\'s Quavo.'

// Concatenation can be used for combining strings

'concat' + 'enation'

'This is ' + 'a ' + 'concatenated ' + 'string.'


// Strings vs numbers

'1' //is a string
1 //is a number 

// Unary Operators are operators that take one value as an argument.
// The typeof operator tells you the data type of whatever value you pass.

typeof 'hello'
//string

typeof 4
//number

typeof '4'
//string

typeof Math.PI
//number

typeof {}
//object


var x;

// Boolean Values have two possible values: true or false.

// One way of producing boolean values is by using the following comparison operators:

==  // Checks if a value is equal to another
=== // Checks if a value is 'strictly' equal to another
!=  // ! means 'not'. So this checks if one value is not equal to another
!== // Checks if a value is strictly not equal to another
<   // Checks if the value on left is less than the value on the right
>   // Checks if the value on left is greater than the value on the right
<=  // Checks if the value on left is less than or equal to the value on right
        >=  // Checks if the value on left is greater than or equal to value on right
        
        
        3 > 2
        //true
        
        'sherlock' > 'batman' //compares the lexical order of the strings.
        
        //true
        
        'harry potter' > 'hermione'
        //false
        
        'harry potter'.length > 'hermione'.length //checks if the length of the value on left is greater
                                                  //than the value on the right
        //true
        
        NaN == NaN // NaN is the result of a statement that doesn't make sense. The reason this is false
                   // is that the result of one nonsensical statement isn't equal to the result of
                   // another.
//false

// When an operator is applied to unexpected data types, JavaScript will sometimes automatically
// convert one of the data types. This is known as "type coercion".

'Farhad' + 5 // A string plus a number will result in converting the number to a string and 
             // concatonating it.
// 'Farhad5'

'5' - 1 // A string number subtracted by a number will conver the string to a number and then
		// subtract the two numbers.
// 4

'Farhad' * 5 // Notice that type coercion doesn't work for everything. In some cases JS doesn't
			 // know how to make sense of a statement.
// NaN


(('5'-1) > 3) && (('10' + 1) > 100) // the left evaluates to true since 4 is greater than 3. the 
									// right is also true since 101 is greater than 100.