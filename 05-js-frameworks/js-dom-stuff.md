# JavaScript and the DOM

Manipulating the DOM is important. It's the key to being able to 
create rich, innovative, and engaging frontends. 

In the browser the frontend is divided between: 

- HTML - Document structure
- CSS - Appearance/Presentation
- JavaScript - Logic and interaction

JavaScript in the browser has the ability to manipulate the DOM, 
and set and define styles on elements. Whole pages complete with 
style and logic can be created with JavaScript. 

## Selecting Elements

To manipulate elements in the DOM you'll need a reference to
those elements. The DOM is a tree structure where elements 
has a parent and children. 

JavaScript provides many methods for traversing the DOM and 
finding elements. 

Get a reference to a DOM element with: 

```
document.getElementById()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()
document.getElementsByTagName()
...
```

Really all you ever need to use is: 

`document.querySelector()`

or 

`document.querySelectorAll()`

or 

`document.getElementById()`

Why these three? 

`getElementById()` finds a single element by it's id name. 
You'll want to do this for named elements. It's quick easy 
and accurate. 

`querySelector()` finds an element using a CSS selector. 
Use this for finding anything that doesn't have an id
(though you can use it for elements with an id also!)

Note: `querySelector()` returns the first element matching
the selector! 

In cases where you want to return a collection of elements 
use: `querySelectorAll()`.

- Notes - 

Some of these methods return "array like" objects. These
are similar to arrays but act differently and provide 
different methods in some cases. 

Some of the collections returned are "live" collections.
These are collections that update automatically when the 
DOM changes. 

Two examples:

`Node.childNodes` - returns a live collection of child nodes
`Element.getElementsByTagName()` - method returns a live 
HTMLCollection of elements with the given tag name

## Creating elements

In some cases you may want to create an element dynamically. 
That is create elements from nothing. This is easily 
accomplished but, keep in mind creating an element doesn't 
mean you'll see it int he borwser! Elements are not visible 
until they are children of another element that is a child 
of the body. 

`document.createElement()`

Use `createElement()` to create an element. Include the 
tag name as an argument: `createElement("div")`. 

`Node.appendChild()`

Add the element as a child of another element with 
`Node.appendChild(child)` where Node is the parent node and 
child is the new child node you are adding to the DOM. 

# Event Listeners



# JavaScript Module Pattern 

## Scope Review 

## Self Executing functions 

## Public and Private in JavaScript



