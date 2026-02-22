📘 JavaScript DOM Assignment - README


1️⃣ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
🔹 getElementById()
1.Selects a single element by its id.
2.Id name must be unque

🔹 getElementsByClassName()
1.Selects elements by their class name.
2.return HTMLcollection
🔹 querySelector()
1.Selects the first matching element.
2.Uses CSS selector syntax.
🔹 querySelectorAll()
1.Selects all matching elements.
2.Return a Nodelist

2️⃣ How do you create and insert a new element into the DOM?
Step 1: Create element(const div = document.createElement("div");)
Step 2: Add content(div.innerText = "Anika")
Step 3: Insert into DOM(document.body.appendChild(div);)

3️⃣ What is Event Bubbling? And how does it work?

🔹 Event Bubbling
Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements.

4️⃣ What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means adding an event listener to a parent element instead of adding listeners to multiple child elements.

It uses event bubbling to detect which child triggered the event.

✅ Why is it useful?

1.Improves performance

2.Works for dynamically added elements

3.Reduces duplicate event listeners
5️⃣ What is the difference between preventDefault() and stopPropagation()?
🔹 preventDefault()
Stops the default browser behavior.

🔹 stopPropagation()
Stops the event from bubbling to parent elements.
