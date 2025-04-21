/*
Ideas: Joke Generator
store the joke and the punchline in seperate containers
select one random joke and one random punchline
main functionality requirements:
the JavaScript functioning correctly
able to produce a message each time
extra:
work on a UI for users to interact with
works with a button push */

const jokes=['Why did the chicken cross the road?', 'What is black and white and red all over?', 
    'What did the fish say when he ran into a wall?', 'What do you call a fish with no eyes?'];
const punchLines=['to get to the other side', 'A newspaper', 'Dam', 'a fsh'];

let a=jokes[Math.floor(Math.random()*jokes.length)];
let b=punchLines[Math.floor(Math.random()*jokes.length)];
console.log(a+' '+b);