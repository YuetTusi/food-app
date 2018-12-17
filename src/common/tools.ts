function generateKey(): string {
  let rnd = parseInt(Math.random() * 10000000 + "");
  return `K_${rnd}`;
}
export { generateKey };
