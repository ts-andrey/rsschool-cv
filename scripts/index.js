const content = document.querySelectorAll('.content li');

const insertContentPlace = document.querySelector('main .wrapper');
let insertCodePlace;

let codeSamples;

const contentAboutRender = `
<section class="about">
	<h3>About myself</h3>
	<p>
		I am a graduate of Gomel State Technical University and my specialty is electiral engeneering. But in a
		long time I was intrested in Information Technologies and I finally found my passion in Front-End field
		where I got to know JavaScript language, this meeting changed my life.
	</p>
	<p>
		Now I like to spend my time in creation of new applications, thanks to that I often can find intresting
		solutions that I didn't know about earlier. Sometimes I rework my old projects to keep them up to date and
		hone my skills. I also like to spend some time in CodeWars - this is a great reasorce for practice and
		inspiration.
	</p>
	<p>
		My constant goal is endless improvement in order to become the best developer I can become and then
		overcome my limits to become even better. Along this path, I hone my existing skills and master new ones -
		this opens up a lot of new opportunities for improving my code, UI and UX.
	</p>
</section>
<section class="code-examples">
	<h3>My code examples</h3>
<pre>// Find next prime
function nextPrime(n){
 const isPrime = num => {
 for (let i = 2; i*i &lt;= num; i++)
  { if (num % i === 0) return false }
  return num > 1;
 };
 for (let i = n + 1; ; i++) {
  const result = isPrime(i);
  if (result) return i;
 }
} </pre>
</section>
<section class="experience">
	<h3>My projects</h3>
	<ul class="experience-list">
		<li>
			<a href="https://rolling-scopes-school.github.io/ts-andrey-JSFEPRESCHOOL/museum/" target="_blank"
				>Museum</a
			>
		</li>
		<li>
			<a href="https://rolling-scopes-school.github.io/ts-andrey-JSFEPRESCHOOL/drum-kit/" target="_blank"
				>Drum Kit</a
			>
		</li>
		<li>
			<a
				href="https://rolling-scopes-school.github.io/ts-andrey-JSFEPRESCHOOL/custom-video-player/"
				target="_blank"
				>Custom Video Player</a
			>
		</li>
	</ul>
</section>
<section class="education">
	<h3>Education</h3>
	<ul>
		<li>
			<h4>JavaScript/Front-end (in process)</h4>
			<a href="https://rs.school/js/" target="_blank"
				>The Rolling Scopes School <time datetime="2022">2022</time></a
			>
		</li>
		<li>
			<h4>JavaScript/Front-end (basics)</h4>
			<a href="https://rs.school/js-stage0/" target="_blank"
				>The Rolling Scopes School <time datetime="2021-09">2021</time></a
			>
		</li>
		<li>
			<h4>Master of science in electiral engeneering</h4>
			<a href="https://en.gstu.by/faculties/power-engineering-faculty" target="_blank"
				>Sukhoi State Technical University Of Gomel <time datetime="2016-01">2014-2016</time></a
			>
		</li>
		<li>
			<h4>Bachelor of science in electiral engeneering</h4>
			<a href="https://en.gstu.by/faculties/power-engineering-faculty" target="_blank"
				>Sukhoi State Technical University Of Gomel <time datetime="2014-07">2009-2014</time></a
			>
		</li>
	</ul>
</section>
`;
const contentCodeRender = `
<section class="code-examples">
<h3>My code examples</h3>
<ul class="code-samples">
	<li class="nextPrime active">Find next prime</li>
	<li class="hexConversion">RGB To Hex Conversion</li>
	<li class="elementEqualsIndex">Element equals its index</li>
	<li class="rotateMatrix">Rotate Matrix</li>
	<li class="doArithmetic">Function that does arithmetic</li>
	<li class="creditCardMask">Credit Card Mask</li>
	<li class="whosOnline">Who's Online?</li>
	<li class="euclideanDistance">Euclidean distance in n dimensions</li>
	<li class="more"><a href="https://www.codewars.com/users/ts-andrey-rss" target="_blank">>my codewars account&lt;</a></li>
</ul>
<pre><code class="insert-code">// Find next prime
function nextPrime(n){
 const isPrime = num => {
  for (let i = 2; i*i &lt;= num; i++)
   { if (num % i === 0) return false }
  return num > 1;
 };
 for (let i = n + 1; ; i++) {
  const result = isPrime(i);
  if (result) return i;
 }
}
</code></pre>
</section>
`;

const contentProjectsRender = `
<section class="experience">
	<h3>My projects</h3>
	<ul class="projects">
		<li>
			<a href="https://rolling-scopes-school.github.io/ts-andrey-JSFEPRESCHOOL/museum/" target="_blank">
				<h4>Museum</h4>
				<div class="image"><img src="./assets/img/museum.jpg" alt="museum project" /></div>
				<p>
					Museum project was created from a specific design model in Figma. This project was done with help of
					PerfectPixel extension to make everything looks exactly like in the model.
				</p>
			</a>
		</li>
		<li>
			<a href="https://rolling-scopes-school.github.io/ts-andrey-JSFEPRESCHOOL/drum-kit/" target="_blank">
				<h4>Drum Kit</h4>
				<div class="image"><img src="./assets/img/drum-kit.jpg" alt="drum kit project" /></div>
				<p>
					Drum Kit application was created with pleasure. Because in this application every user able to feel
					himself as a musician. This little application is able to open in every person passion to music
					creation.
				</p>
			</a>
		</li>
		<li>
			<a
				href="https://rolling-scopes-school.github.io/ts-andrey-JSFEPRESCHOOL/custom-video-player/"
				target="_blank"
			>
				<h4>Custom Video Player</h4>
				<div class="image"><img src="./assets/img/custom-player.jpg" alt="video player project" /></div>
				<p>
					This Video Player application has it's own feature. You can view each video only one time, after
					which this video will disappear. It could be useful in a lot of situations.
				</p>
			</a>
		</li>
	</ul>
	<div class="achievments">
		<p>
			All of this was created in the Rolling Scopes School's course
			<a href="https://rs.school/js-stage0/" target="_blank">JavaScript/Front-end (basics)</a>
		</p>
		<p>
			My Drum Kit and Custom Video Player projects found their way to
			<a href="https://irinainina.github.io/rs-projects/" target="_blank"
				>the best works of 2021q3 selection</a
			>
		</p>
	</div>
</section>
`;

const codeSampleNextPrime = `// Find next prime
function nextPrime(n){
 const isPrime = num => {
  for (let i = 2; i*i &lt;= num; i++)
   { if (num % i === 0) return false }
  return num > 1;
 };
 for (let i = n + 1; ; i++) {
  const result = isPrime(i);
  if (result) return i;
 }
}`;
const codeSampleHexConversion = `// RGB To Hex Conversion
const hexValues = {
 0: 0,
 1: 1,
 2: 2,
 3: 3,
 4: 4,
 5: 5,
 6: 6,
 7: 7,
 8: 8,
 9: 9,
 10: 'A',
 11: 'B',
 12: 'C',
 13: 'D',
 14: 'E',
 15: 'F',
};
const normalizer = num => {
 let result = num;
 if (result &lt;= 0) result = 0;
 if (result &gt;= 15) result = 15;
 return result;
};
const converter = num => {
 let whole = Math.floor(num / 16);
 whole = normalizer(whole);
 let remainder = num - whole * 16;
 remainder = normalizer(remainder);
 return '$_{hexValues[whole]}$_{hexValues[remainder]}';
};
const rgb = (r, g, b) => {
 return '$_{converter(r)}$_{converter(g)}$_{converter(b)}';
};`;
const codeSampleElementEqualsIndex = `// Element equals its index
const indexEqualsValue = (array) => {
const range1 = Math.floor(array.length / 4);
const range2 = range1 * 2;
const range3 = range1 * 3;

if (array[range2] &gt;= range2) {
 if (array[range1] &gt;= range1) {
  for (let i = 0; i &lt;= range1; i++){
   if (array[i] === i) return i;
  }
 } else if (array[range1] < range1) {
  for (let i = range1; i &lt;= range2; i++){
   if (array[i] === i) return i;
  }
 }
 } else if (array[range2] < range2) {
  if (array[range3] &gt;= range3) {
   for (let i = range2; i &lt;= range3; i++){
    if (array[i] === i) return i;
   }
  } else if (array[range3] < range3) {
   for (let i = range3; i < array.length; i++){
    if (array[i] === i) return i;
  }
 }
} else {
 for (let i = 0; i &lt;= array.length; i++) {
  if (array[i] === i) return i;
 }
}
return -1;
};`;
const codeSampleRotateMatrix = `// Rotate Matrix
const rotateMatrix = (array) => {
 const resultArray = [];
 for (let j = array[0].length - 1; j >= 0; j--) {
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
   tempArray.push(array[i][j]);
  }
  resultArray.push(tempArray);
 }
 return resultArray;
};`;
const codeSampleDoArithmetic = `// Make a function that does arithmetic!
const arithmetic = (a, b, operator) => {
 switch (operator) {
  case 'add': return a + b;
  case 'subtract': return a - b;
  case 'multiply': return a * b;
  case 'divide': return a / b;
 }
};`;
const codeSampleCreditCardMask = `// Credit Card Mask
const maskify = (str) => {
 if (str.length > 4) {
  let first = str.substring(0, str.length - 4);
  let second = str.substring(str.length - 4);
  first = first.replace(/[a-zA-Z\-0-9]/g, '#');
  return first + second;
 } else return str;
};`;
const codeSampleWhosOnline = `// Who's Online?
 const whosOnline=(friends)=>{
 const resultObj={online:[],offline:[],away:[]};
 for (let i = 0; i < friends.length; i++){
  friends[i].status === 'offline'
   ? resultObj['offline'].push(friends[i].username)
   : friends[i].lastActivity &lt;= 10
    ? resultObj['online'].push(friends[i].username)
    : resultObj['away'].push(friends[i].username);
 }
 if (resultObj['offline'].length === 0)
  delete resultObj['offline'];
 if (resultObj['online'].length === 0)
  delete resultObj['online'];
 if (resultObj['away'].length === 0)
  delete resultObj['away'];
 return resultObj;
};`;
const codeSampleEuclideanDistance = `// Euclidean distance in n dimensions
const euclideanDistance = (coord1, coord2) => {
 let result = 0;
 
 for (let i = coord1.length - 1; i >= 0; i--){
  result += Math.pow(coord1[i] - coord2[i], 2)
 }
 return +(Math.sqrt(result)).toFixed(2);
};`;

function renderCodeHandler() {
  codeSamples.forEach(el => {
    el.classList.remove('active');
  });
  this.classList.add('active');

  if (this.classList.contains('nextPrime')) {
    insertCodePlace.textContent = codeSampleNextPrime;
  } else if (this.classList.contains('hexConversion')) {
    insertCodePlace.textContent = codeSampleHexConversion;
  } else if (this.classList.contains('elementEqualsIndex')) {
    insertCodePlace.textContent = codeSampleElementEqualsIndex;
  } else if (this.classList.contains('rotateMatrix')) {
    insertCodePlace.textContent = codeSampleRotateMatrix;
  } else if (this.classList.contains('doArithmetic')) {
    insertCodePlace.textContent = codeSampleDoArithmetic;
  } else if (this.classList.contains('creditCardMask')) {
    insertCodePlace.textContent = codeSampleCreditCardMask;
  } else if (this.classList.contains('whosOnline')) {
    insertCodePlace.textContent = codeSampleWhosOnline;
  } else if (this.classList.contains('euclideanDistance')) {
    insertCodePlace.textContent = codeSampleEuclideanDistance;
  }
}

function renderContentHandler() {
  content.forEach(el => {
    el.classList.remove('active');
  });
  this.classList.add('active');
  if (this.classList.contains('about')) {
    insertContentPlace.innerHTML = contentAboutRender;
  } else if (this.classList.contains('code-examples')) {
    insertContentPlace.innerHTML = contentCodeRender;
    insertCodePlace = document.querySelector('.insert-code');
    codeSamples = document.querySelectorAll('.code-samples li');
    codeSamples.forEach(el => {
      el.addEventListener('click', renderCodeHandler);
    });
  } else if (this.classList.contains('my-projects')) {
    insertContentPlace.innerHTML = contentProjectsRender;
  }
}

content.forEach(el => {
  el.addEventListener('click', renderContentHandler);
});
