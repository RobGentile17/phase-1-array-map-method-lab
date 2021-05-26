const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map( line => {
    const split = line.split(' ');
    const capitalizedLetter =
      split.map( split => split.charAt(0).toUpperCase() + split.slice(1) );
    const response = capitalizedLetter.join(' ');
    return response;
  });
}
