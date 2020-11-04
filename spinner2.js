const positions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];

const spinner = function(startTime) {
  for (let i = 0; i < positions.length; i++) {
    setTimeout(() => {
      process.stdout.write(positions[i]);
    }, startTime);
    startTime += 200;
  }
}

spinner(100);