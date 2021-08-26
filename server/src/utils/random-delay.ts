export function randomDelay(maxDelay = 1000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, Math.random() * maxDelay);
  });
}
