1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:getElementById('id') → ekta unique element return kore ja specific ID diye select kora hoy. Single element.
getElementsByClassName('class') → ekta HTMLCollection return kore ja oi class er sob element ke select kore. Live collection.
querySelector('selector') → first matching element return kore, CSS selector use kore. querySelectorAll('selector') → NodeList return kore ja sob matching element ke select kore. Static collection.

2.How do you create and insert a new element into the DOM?

ans:let div = document.createElement('div')// new element create kora
div.innerText = "Hello World"// content add kora
document.body.appendChild(div)// DOM e insert kora

3.What is Event Bubbling and how does it work?

ans: Event Bubbling mane holo, event inner element theke outer element er dikhe propagate kore. Example: button click → button → parent div → body → html. Default behavior mostly bubbling hoy.

4.What is Event Delegation in JavaScript? Why is it useful:

ans:Event Delegation mane holo, parent element er upor ekta listener use kore child elements er events handle kora. Useful because: Beshi memory use hoy na (sob child e listener lagate hoy na) Dynamically add kora elements er jonnoo kaj kore.

5.Difference between preventDefault() and stopPropagation():

ans:preventDefault() → default browser behavior ke prevent kore. Example: link click e page reload bondho kora. stopPropagation() → event bubbling / capturing ke stop kore, parent element e event jabe na.