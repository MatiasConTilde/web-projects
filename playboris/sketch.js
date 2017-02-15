var input, button;

function setup() {
  noCanvas();

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(run);
}

function run() {
  var listLength = input.value()*8+1;

  var allNumbers = [];
  for (var i = 0; i < listLength; i++)
    allNumbers.push(i+1);
  createP(allNumbers);

  while (allNumbers.length > 2) {
    var divisibleSums = [];
    for (n in allNumbers) {
      for (m in allNumbers) {
        if (m > n && (n + m) % 8 == 0) {
          divisibleSums.push(n);
          divisibleSums.push(m);
        }
      }
    }
    createP(divisibleSums);

    var timesOfNumber = {};
    for (n in allNumbers)
      timesOfNumber[n] = count(divisibleSums, n);
    createP(timesOfNumber);

    // Amelie
    var minValue = ((listLength-1)/8)+1;
    for (i in timesOfNumber) {
      var n = timesOfNumber[i];
      minValue = Math.min(minValue, n);
    }
    for (i in timesOfNumber) {
      var n = timesOfNumber[i];
      if (n === minValue) {
        allNumbers.splice(i, 1);
        createP(i);
        break;
      }
    }
    createP(allNumbers);
    if (allNumbers.length <= 2) break;

    // Boris
    var maxValue = 0;
    for (i in timesOfNumber) {
      var n = timesOfNumber[i];
      maxValue = Math.max(maxValue, n);
    }
    for (i in timesOfNumber) {
      var n = timesOfNumber[i];
      if (n === maxValue) {
        allNumbers.splice(i, 1);
        createP(i);
        break;
      }
    }
    createP(allNumbers);
  }

  createP(listLength, allNumbers.reduce((a,b)=>a+b,0), allNumbers.reduce((a,b)=>a+b,0) % 8 == 0);
}

function count(arr, n) {
  var count = 0;
  for (var m in arr)
    if (n === m)
      count++;
  return count;
}
