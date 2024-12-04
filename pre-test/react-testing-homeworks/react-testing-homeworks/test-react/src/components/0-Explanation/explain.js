// explain the difference between getBy, findBy, queryBy:

// 1. getBy
// Behavior: Synchronous.
// Usage: Used to assert that an element exists in the DOM immediately.
// Error Handling: Throws an error if no matching element is found.
// Use Case: When you are certain the element should already be present in the DOM (e.g., it is rendered by default).
// Example:
// const element = getByText('Submit');
//This will throw an error if an element with the text "Submit" is not found.

//---------------------------------
// 2. findBy
// Behavior: Asynchronous.
// Usage: Used to wait for an element to appear in the DOM.
// Error Handling: Throws an error if the element does not appear within the default timeout.
// Use Case: When an element is expected to appear after some time, such as after an API call or an animation.
// Example:
// const element = await findByText('Loading Complete');
// This will wait for the element with the text "Loading Complete" to appear.

// ------------------------------------------

// 3. queryBy
// Behavior: Synchronous.
// Usage: Used to check if an element exists without throwing an error if it doesn't.
// Error Handling: Returns null if no matching element is found instead of throwing an error.
// Use Case: When it’s okay for an element to be absent, such as in conditional rendering scenarios.
// Example:
// const element = queryByText('Error Message');
// expect(element).toBeNull();
// This will not throw an error if the "Error Message" element is not present, and you can assert its absence.
