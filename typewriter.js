const sentence = "hello there from lighthouse labs";

let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, 50 * i); // <= 1s delay to make it noticeable. Can dial it down later.
  i++;
}
setTimeout(() => process.stdout.write('\n'), 50 * sentence.length);

