let timers = process.argv.slice(2);

for (const timer of timers) {
  if (!isNaN(timer) && timer > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('.');
    }, timer * 1000);
  }
}