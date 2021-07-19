#### I am Andrei Tsakunou 

my email: andrey.tsakunov@gmail.com,  
telegram: @andrey_tsakunov \

My constant goal is endless improvement in order to become the best JS developer I can become and then overcome my limits to become even better. Along this path, I hone my existing skills and master new ones - this opens up a lot of new opportunities for improving my code and UX / UI.  

skills: JavaScript, CSS3, HTML5, Git, Markdown, VSCode.

```
// my code from codewars:

// this function should return the first pair of the two prime numbers spaced with a step between them
const step = (step, start, end) => {
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
    return num > 1;
  };

  let aNumPair;
  let bNumPair;
  for (i = 0; i <= end - start - step; i++) {
    aNumPair = start + i;
    bNumPair = aNumPair + step;
    if (isPrime(aNumPair) && isPrime(bNumPair)) return [aNumPair, bNumPair];
  };
  return null;
}; 

// this function should reverse every other word in the string
const reverse = (str) => {
  while (str.includes('  ')) {
   str = str.replace(/  +/g, '');
  }
  let tempArr = str.split(' ');
  let finalString = '';
  tempArr.forEach((el, index) => {
    index % 2 === 1 && index !== 0
      ? (finalString += el.split('').reverse().join('') + ' ')
      : (finalString += el.split('').join('') + ' ');
  });
  return finalString.trim();
};
```  

degree: Master of Science (Electrical Engineering) - Sukhoi State Technical University of Gomel, 2016.  

English: B1+,  
Russian: native