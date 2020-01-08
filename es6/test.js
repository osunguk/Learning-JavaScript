
const sentence = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Elephants', verb: 'are', object: 'large' },
];

function say({ subject, verb, object }) {
  console.log(`${subject} ${verb} ${object}`);
}

for (const s of sentence) {
  say(s);
}
