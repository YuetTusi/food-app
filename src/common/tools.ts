function generateKey(): string {
  let rnd = parseInt(Math.random() * 1000000 + "");
  return `K_${rnd}`;
}
export { generateKey };
