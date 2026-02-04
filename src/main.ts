import { setupCounter } from './counter.ts'

// HTML ma vako button lai select garne
const counterButton = document.querySelector<HTMLButtonElement>('#counter')!;

// Function call garne
setupCounter(counterButton);