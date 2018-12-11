// 46.4693479, 30.7317897

const geocoder = require('offline-geocoder')({ database: 'db.sqlite' });
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function geocode(input) {

  const [lat = 0, lng = 0] = input.split(',');

	return geocoder.reverse(lat, lng)
	  .then((result) => result)
	  .catch((error) => error);
}

rl.setPrompt('Lat, Lng> ');
rl.prompt();

rl.on('line', async (line) => {
  const result = await geocode(line.trim());
  console.log('Results: ', result);
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});

