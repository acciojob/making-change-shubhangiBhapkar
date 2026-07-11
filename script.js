const makeChange = (c) => {
  // your name here
let amount = c;
const q = Math.floor(amount / 25);
  amount %= 25;

  const d = Math.floor(amount / 10);
  amount %= 10;

  const n = Math.floor(amount / 5);
  amount %= 5;

  const p = amount;
	let str = `{"q:"${q}, "d:"${d}, "n:"${n}, "p:"${p}}`;
  return str;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
