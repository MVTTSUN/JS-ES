// 1
const arr = [1, 5, 7, 9];

const getMin = (array) => Math.min(...array);

console.log(getMin(arr));

// 2
const createCounter = () => {
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
  };
};

const counter = createCounter();

console.log(counter.increment());
console.log(counter.decrement());

// 3
const findElementByClass = (element, targetClass) => {
  if (element.classList.contains(targetClass)) {
    return element;
  }

  for (let child of element.children) {
    const foundElement = findElementByClass(child, targetClass);
    if (foundElement) {
      return foundElement;
    }
  }

  return null;
};

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "class");

console.log(targetElement);
