---
title: 6. Exploring Loops
sidebar_position: 6
---

# Exploring Loops

## Understanding `while` Loops

You can make a block of code execute over and over again using a `while` statement. The code in a `while` clause will be executed as long as the while statement’s condition is True. In code, a    `while` statement always consists of the following:

- The `while` keyword
- A condition (that is, an expression that evaluates to True or False)
- A colon
- Starting on the next line, an indented block of code (called the `while` clause)

You can see that a `while` statement looks similar to an `if` statement. The difference is in how they behave. At the end of an `if` clause, the program execution continues after the `if` statement. But at the end of a `while` clause, the program execution jumps back to the start of the `while` statement. The `while` clause is often called the `while` loop or just the loop.

Let’s look at an `if` statement and a `while` loop that use the same condition and take the same actions based on that condition. Here is the code with an `if` statement:

```
spam = 0
if spam < 5:
    print('Hello, world.')
    spam = spam + 1
```

Here is the code with a while statement:

```
spam = 0
while spam < 5:
    print('Hello, world.')
    spam = spam + 1
```

These statements are similar—both if and while check the value of spam, and if it’s less than 5, they print a message. But when you run these two code snippets, something very different happens for each one. For the if statement, the output is simply "Hello, world.". But for the while statement, it’s "Hello, world." repeated five times! Take a look at the flowcharts for these two pieces of code to see why this happens.

#### If Flowchart
![If Flowchart](/img/while-loops-1.png)

#### While Flowchart
![While Flowchart](/img/while-loops-2.png)

The code with the `if` statement checks the condition, and it prints `Hello, world.` only once if that condition is true. The code with the `while` loop, on the other hand, will print it five times. The loop stops after five prints because the integer in spam increases by one at the end of each loop iteration, which means that the loop will execute five times before `spam < 5` is False.

In the `while` loop, the condition is always checked at the start of each iteration (that is, each time the loop is executed). If the condition is True, then the clause is executed, and afterward, the condition is checked again. The first time the condition is found to be False, the `while` clause is skipped.

## An Annoying `while` Loop

Here’s a small example program that will keep asking you to type, literally, your name.

```python
name = ''
while name != 'your name':
    print('Please type your name.')
    name = input()
print('Thank you!')
```

Execute this program in [Replit](https://repl.it). Once you understand how it works, use the debugger to walk through the code step by step.

First, the program sets the `name` variable to an empty string. This is so that the `name != 'your name'` condition will evaluate to True and the program execution will enter the `while` loop’s clause.

The code inside this clause asks the user to type their name, which is assigned to the `name` variable. Since this is the last line of the block, the execution moves back to the start of the `while` loop and reevaluates the condition. If the value in `name` is not equal to the string 'your name', then the condition is True, and the execution enters the `while` clause again.

But once the user types `your name`, the condition of the `while` loop will be `'your name' != 'your name'`, which evaluates to False. The condition is now False, and instead of the program execution reentering the `while` loop’s clause, Python skips past it and continues running the rest of the program.

![Flow Chart](/img/while-loops-3.png)

```
Please type your name.
Al
Please type your name.
Albert
Please type your name.
%#@#%*(^&!!!
Please type your name.
your name
Thank you!
```

If you never enter `your name`, then the `while` loop’s condition will never be False, and the program will just keep asking forever. Here, the `input()` call lets the user enter the right string to make the program move on. In other programs, the condition might never actually change, and that can be a problem. Let’s look at how you can break out of a `while` loop.

## Using `break` to Exit a Loop

There is a shortcut to getting the program execution to break out of a while loop’s clause early. If the execution reaches a break statement, it immediately exits the while loop’s clause. In code, a break statement simply contains the break keyword.

Pretty simple, right? Here’s a program that does the same thing as the previous program, but it uses a break statement to escape the loop.

```
while True:
    print('Please type your name.')
    name = input()
    if name == 'your name':
        break
print('Thank you!')
```

The first line creates an infinite loop; it is a `while` loop whose condition is always True. (The expression True, after all, always evaluates down to the value True.) After the program execution enters this loop, it will exit the loop only when a `break` statement is executed. (An infinite loop that never exits is a common programming bug.)

Just like before, this program asks the user to enter your name. Now, however, while the execution is still inside the `while` loop, an `if` statement checks whether name is equal to 'your name'. If this condition is True, the `break` statement is run, and the execution moves out of the loop to `print('Thank you!')`. Otherwise, the `if` statement’s clause that contains the `break` statement is skipped, which puts the execution at the end of the `while` loop. At this point, the program execution jumps back to the start of the `while` statement to recheck the condition. Since this condition is merely the True Boolean value, the execution enters the loop to ask the user to type `your name` again.

Run this program in [Replit](https://repl.it) to get a feel for how it's working and then use the debugger to walk through the code step by step.

![Flow Chart](/img/while-loops-4.png)

## Using `continue` in a Loop

Like break statements, continue statements are used inside loops. When the program execution reaches a continue statement, the program execution immediately jumps back to the start of the loop and reevaluates the loop’s condition. (This is also what happens when the execution reaches the end of the loop.)

Let’s use continue to write a program that asks for a name and password.

> Trapped in an inifite loop? Press Ctrl + c to stop the program.

```python
while True:
    print('Who are you?')
    name = input()
    if name != 'Joe':
        continue
    print('Hello, Joe. What is the password? (It is a fish.)')
    password = input()
    if password == 'swordfish':
        break
print('Access granted.')
```

If the user enters any name besides Joe, the `continue` statement causes the program execution to jump back to the start of the loop. When the program reevaluates the condition, the execution will always enter the loop, since the condition is simply the value True. Once the user makes it past that `if` statement, they are asked for a password. If the password entered is `swordfish`, then the `break` statement is run, and the execution jumps out of the `while` loop to print `Access granted`. Otherwise, the execution continues to the end of the `while` loop, where it then jumps back to the start of the loop.

![Flow Chart](/img/while-loops-5.png)

#### 'Truthy' and 'Falsey' Values

Conditions will consider some values in other data types equivalent to True and False. When used in conditions, 0, 0.0, and '' (the empty string) are considered False, while all other values are considered True. For example, look at the following program:

```python
name = ''
while not name:
    print('Enter your name:')
    name = input()

print('How many guests will you have?')
num_of_guests = int(input())
if num_of_guests:
    print('Be sure to have enough room for all your guests.')

print('Done')
```

If the user enters a blank string for `name`, then the `while` statement’s condition will be True, and the program continues to ask for a name. If the value for `num_of_guests` is not 0, then the condition is considered to be True, and the program will print a reminder for the user.

You could have entered `not name != ''` instead of not name, and `num_of_guests != 0` instead of `num_of_guests`, but using the truthy and falsey values can (sometimes) make your code easier to read.

## For Loops and the `range()` Function

The `while` loop keeps looping while its condition is True (which is the reason for its name), but what if you want to execute a block of code only a certain number of times? You can do this with a `for` loop statement and the `range()` function.

In code, a `for` statement looks something like `for i in range(5):` and includes the following:

- The `for` keyword
- A variable name
- The `in` keyword
- A call to the `range()` method with up to three integers passed to it
- A colon
- Starting on the next line, an indented block of code (called the for clause)

```
print('My name is')
for i in range(5):
    print('Jimmy Five Times (' + str(i) + ')')
```

The code in the `for` loop’s clause is run five times. The first time it is run, the variable `i` is set to 0. The `print()` call in the clause will print `Jimmy Five Times (0)`. After Python finishes an iteration through all the code inside the `for` loop’s clause, the execution goes back to the top of the loop, and the `for` statement increments `i` by one. This is why `range(5)` results in five iterations through the clause, with `i` being set to 0, then 1, then 2, then 3, and then 4. The variable `i` will go up to, but will not include, the integer passed to `range()`.

When you run this program, it should print `Jimmy Five Times` followed by the value of `i` five times before leaving the `for` loop.

```
My name is
Jimmy Five Times (0)
Jimmy Five Times (1)
Jimmy Five Times (2)
Jimmy Five Times (3)
Jimmy Five Times (4)
```

> NOTE: You can use `break` and `continue` statements inside `for` loops as well. The `continue` statement will `continue` to the next value of the `for` loop’s counter, as if the program execution had reached the end of the loop and returned to the start. In fact, you can use `continue` and `break` statements only inside `while` and `for` loops. If you try to use these statements elsewhere, Python will give you an error.

![Flow Chart](/img/while-loops-6.png)

As another for loop example, consider this story about the mathematician Carl Friedrich Gauss. When Gauss was a boy, a teacher wanted to give the class some busywork. The teacher told them to add up all the numbers from 0 to 100. Young Gauss came up with a clever trick to figure out the answer in a few seconds, but you can write a Python program with a for loop to do this calculation for you.

```python
total = 0
for num in range(101):
    total = total + num
print(total) 
```

The result should be 5,050. When the program first starts, the `total` variable is set to 0. The `for` loop then executes `total = total + num` 100 times. By the time the loop has finished all of its 100 iterations, every integer from 0 to 100 will have been added to `total`. At this point, `total` is printed to the screen. Even on the slowest computers, this program takes less than a second to complete.

### An Equivalent While Loop

You can actually use a `while` loop to do the same thing as a `for` loop; `for` loops are just more concise. Let’s rewrite our program to use a `while` loop equivalent of a `for` loop.

```python
print('My name is')
i = 0
while i < 5:
    print('Jimmy Five Times (' + str(i) + ')')
    i = i + 1
```

If you run this program, the output should look the same as the original program, which uses a `for` loop.

### The Starting, Stopping, and Stepping Arguments to `range()`

Some functions can be called with multiple arguments separated by a comma, and `range()` is one of them. This lets you change the integer passed to `range()` to follow any sequence of integers, including starting at a number other than zero.

```python
for i in range(12, 16):
    print(i)
```

The first argument will be where the `for` loop’s variable starts, and the second argument will be up to, but not including, the number to stop at.

```
12
13
14
15
```

The `range()` function can also be called with three arguments. The first two arguments will be the start and stop values, and the third will be the step argument. The step is the amount that the variable is increased by after each iteration.

```
for i in range(0, 10, 2):
    print(i)
```

So calling `range(0, 10, 2)` will count from zero to eight by intervals of two.

```
0
2
4
6
8
```

The `range()` function is flexible in the sequence of numbers it produces for `for` loops. For example, you can even use a negative number for the step argument to make the `for` loop count down instead of up.

```
for i in range(5, -1, -1):
    print(i)
```

This `for` loop would have the following output:

```
5
4
3
2
1
0
```

Running a `for` loop to print `i` with `range(5, -1, -1)` should print from five down to zero.

