export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;

  // Function jasle count badhauchha ra button ko text update garchha
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  // Button click event listener thapne
  element.addEventListener('click', () => setCounter(counter + 1));

  // Initial state set garne
  setCounter(0);
}
