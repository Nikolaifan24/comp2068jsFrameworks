// app.js
const express = require('express');
const app = express();

// /lab2?method=add&x=16&y=4
app.get('/lab2', (req, res) => {
  const method = req.query.method;
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);

  // Basic validation
  if (isNaN(x) || isNaN(y)) {
    return res.send('Error: x and y must be numbers.');
  }

  let result;
  let operator;

  // Determine math operation
  switch (method) {
    case 'add':
      result = x + y;
      operator = '+';
      break;
    case 'subtract':
      result = x - y;
      operator = '-';
      break;
    case 'multiply':
      result = x * y;
      operator = '*';
      break;
    case 'divide':
      if (y === 0) return res.send('Error: Cannot divide by zero.');
      result = x / y;
      operator = '/';
      break;
    default:
      return res.send('Error: Invalid method. Use add, subtract, multiply, or divide.');
  }

  // Display the result
  res.send(`${x} ${operator} ${y} = ${result}`);
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
