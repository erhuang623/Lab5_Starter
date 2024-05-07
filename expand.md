# Expand

1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)
   
    It's important so you don't lose your tags and so you can selectively choose what element you want with certain attributes. e.g. if you wanted to only style one of two buttons you could pick one with an id of buttonTwo.

2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?

    A data attribute is an attribute starting with data-. It's to store data that doesn't have visual representation. We can access them either by findint the tag with id or whatever querySelector then calling x.dataset.x where both x's are the object in JS and the value. Or in CSS, content: attr(data-x). When it coems to microdata, we can add more semantic and meaning to our tags.

3. What is a DOM fragment? Why are they powerful?
    
    A DOM fragment is a small part of the DOM that represents a portions  structure. It can function without being part of the main DOM. It helps access certain parts faster.

4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?

    It's a lightweight version of the real DOM and in sync with the original DOM. Some benefits are improving performance by optimizing manupilation. We lose more resources on memory usage. Also simpler applications don't really need it.


5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?
   class is a reserved keyworkd in JavaScript. It's used to define behavior in OOP so there would be a conflict. QuerySelector is a more specific way to find elements.


6. What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?

    The difference is how they handle events. The advantages of eventListener is that you can use multiple for the same element and type. The downside is that it is trickier to use. For onClick, it's simpler and concise. Easier to understand for simple HTML. It's downsides are limited functionality and possibly less readability.