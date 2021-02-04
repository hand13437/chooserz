/* dynamic sticky header */
const header = document.querySelector('header');
window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = header.getBoundingClientRect().height;
    if(scrollHeight>navHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
})

/* menu */
    const navicon = document.querySelector('.navIcon'); //select the hamburger icon
    const navlinks = document.querySelector('.navLinks');  //select the menu item links 
    navicon.addEventListener('click', function(){
        let value = navlinks.classList.contains('navCollapse'); 
        if (value){
            navlinks.classList.remove('navCollapse');
            navlinks.classList.add('navLinks');
           
        } else {
            navlinks.classList.add('navCollapse');
            navlinks.classList.remove('navLinks');
  
        }
    })
/* true false */
/* true false variables */
const tfcontent = ['true','false'];
const tfbtn = document.querySelector('.tfbtn');
const truefalse = document.querySelector('.tf');

/* true false functions */
tfbtn.addEventListener('click',trueFalse);
function trueFalse(){
    let tfrandom = Math.floor(Math.random()*tfcontent.length);
    let tfout = tfcontent[tfrandom];
truefalse.innerHTML=tfout;
}

/* truth dare */
/* truth dare variables */
const tdcontent = ['truth','dare'];
const truthdare = document.querySelector('.truthdare');
const tdbtn = document.querySelector('.tdbtn');

/* truth dare functions */
tdbtn.addEventListener('click',truthDare);
function truthDare(){
    let tdrandom = Math.floor(Math.random()*tdcontent.length);
    let tdout = tdcontent[tdrandom];
    truthdare.innerHTML = tdout;
}

/* yes no */
/* yes no variables */
const yncontent = ['yes','no'];
const yesno = document.querySelector('.yesno');
const ynbtn = document.querySelector('.ynbtn');

/* yes no functions */
ynbtn.addEventListener('click',yesNo);
function yesNo(){
    let ynrandom = Math.floor(Math.random()*yncontent.length);
    let ynout = yncontent[ynrandom];
yesno.innerHTML=ynout;
}

/* eating decision */
/* eating decision variables */
const array = [];
const input1 = document.querySelector('.input1');
const inbtn = document.querySelector('.inbtn');

/* eating decision functions */
function clearInput() {
    let clear = document.getElementById("stuff").value = "";
    return clear; }

function arrayGet(){
    let values = document.getElementById('stuff').value;
    array.push(values);
    clearInput();
    return false;
}

inbtn.addEventListener('click',inputFunc);
function inputFunc(){
    let inrandom = Math.floor(Math.random()*array.length);
    let inout = array[inrandom];
    input1.innerHTML=inout;
}
/* truthdare questions below */
/*taken from ponly.com/truth-or-dare/, https://sports.yahoo.com/best-truth-dare-questions-definitive-152900911.html, https://truthordare-game.com/truth-dare-questions.html*/
//remember to play SAFE. don't do anything extreme that will cause any kind of harm!
/* truth question */
/* truth question variables */
const truthcontent = ['When was the last time you lied?', 'When was the last time you cried?', 'What is your biggest fear?', 
'What is something you are glad your mum does not know about you?', 'What is the worst thing you have ever done?', 
'What is a secret you have never told anyone?', 'Do you have a hidden talent?', 'Who was your first celebrity crush?', 
'What is the most embarrassing thing you have ever done?', 'What is your biggest insecurity?', 'What is the biggest mistake you have ever made?', 
'What is the most disgusting thing you have ever done?', 'Who would you like to kiss in this room?', 'What is your worst habit?', 'Have you ever peed in the shower?', 
'What is the strangest dream you have had?', 'Have you ever been caught doing something you should not have?', 'What is the worst date you have been on?', 'Who is your crush right now?', 
'Are you in a relationship right now?', 'What is your biggest regret?', 'What is the biggest misconception about you?', 'What is the most trouble you have been in?',
'What is the first thing you would do if you were to wake up as the opposite sex?','Have you ever let someone else get in trouble for something that you did?','What happened on your most awkward date?', 
'Have you ever peed on the side of the road?', 'What item do you own that is the most embarrassing?','What is one thing that you hope your parents never find out about?',
'What is the most embarrassing nickname that someone has given you?','What’s an embarrassing story about you that you have never told anyone?','When was the last time you peed the bed?',
 'What was the scariest dream that you have ever had?','Who do you think is the best looking person here?','If you had to kiss one of the players, who would it be?',
 'What is something childish that you still do?','What is your deepest and darkest fear?','Where is one place that you had such a bad experience with that you will never visit again?', 
 'What is the weirdest thing that your parents have caught you doing?', 'What animal would you like to switch places with for a week? What would you do during that week?',
 'Who would be the most fun out of the group to be stuck in an elevator with?','If you could switch lives with any celebrity for a day, who would it be?',
 'Have you ever faked a sickness to stay home from school?','What is the dumbest thing you ever said or done, around someone you liked?','Have you ever cried during a movie? If so, which one?',
 'When was the last time you did something nice for someone else?','What is something you`ve always wanted to try but have been too scared of?',
 'If you were a king of your own kingdom, what would be your first order?','If you could trade places with anybody in the world, would you do it? If yes, who would it be?',
 'If you had a superpower what would it be? Why?','If a genie came out of a lamp, what would your 3 wishes be?','Have you ever thought about changing your name? If yes, to what?',
 'Which cartoon character do you resemble the most?','What`s the maximum amount you think you can survive without your cell phone?','Who do you find most attractive in this room?',
 'If your phone or keys fall in the toilets, would you put your hand in it to get it back?','Have you ever had a crush on someone that your best friend has dated?'];
const truth = document.querySelector('.truth');
const truthbtn = document.querySelector('.truthbtn');

/* truth question functions */
truthbtn.addEventListener('click',Truth);
function Truth(){
    let truthrandom = Math.floor(Math.random()*truthcontent.length);
    let truthout = truthcontent[truthrandom];
    truth.innerHTML = truthout;
}

/* dare question */
/* dare question variables */
const darecontent = ['Show the most embarrassing photo on your phone','Show the last five people you texted and what the messages said',
 'Let the rest of the group DM someone from your Instagram account', 'Eat a raw piece of garlic','Let the rest of the group create a dating profile for you', 
 'Do 100 squats', 'Keep three ice cubes in your mouth until they melt', 'Give a foot massage to the person on your right', 
 'Put 10 different available liquids into a cup and drink it', 'Yell out the first word that comes to your mind', 'Like the first 15 posts on your Facebook/Instagram newsfeed', 
 'Eat a spoonful of mustard', 'Keep your eyes closed until it is your go again', 'Send a text to the last person in your contacts', 'Call a random person in your contacts', 
 'Let the rest of the group send a text/call to a person in your contacts', 'Empty out your wallet/purse and show everyone what is inside', 
 'Write your name with your butt', 'Pretend to be the person to your right for 10 minutes', 'Eat a snack without using your hands',
 'Say two honest things about everyone else in the group','Dance for a minute', 'Try and make the group laugh as quickly as possible', 
 'Tell everyone an embarrassing story about yourself', 'Try to lick your elbow', 
'Post the oldest selfie on your phone on Instagram Stories', 'Let the rest of the group pick a photo to post on your social media',
 'Let the rest of the group take charge of your Instagram for an hour', 'Tell the saddest story you know', 'Howl like a wolf for two minutes',
 'Dance without music for two minutes','Let someone else tickle you and try not to laugh',
'Let the group choose a song and lip-sync to the song while putting on a show for all of the players','Sing!', 'Dress up as the opposite sex and allow a picture to be taken of you',
 'Let someone in the group write something on your body with a permanent marker', 'Let someone in the group give you a new hairstyle', 'Talk with an accent for the rest of the game',
'Break a raw egg over your head', 'Get your face wet and put it in flour', 'Act out your favorite movie from your childhood and have the group guess what it is',
'Give everyone in the group a crazy nickname based on the clothes they are wearing','Make up a song with everyone’s name in it and serenade each member of the group',
'Use your best salesmanship and try to sell a piece of garbage to another player','Think of and recite a poem based on something the group chooses',
'Let someone in the group give you a full face of makeup','Go outside and yell "Happy New Year!"','Moonwalk for the rest of the day',
'Talk and act like a cowboy or cowgirl for the rest of the game', 'Act out a favorite scene from a movie', 'Dance like a crazy on your favorite song', 
'Imitate your favorite cartoon/TV character','Exchange tops/shirts with the person on your right','Tell us about your last dream',
'Being blindfolded, touch somebody and try to recognize him/her','Invite somebody to dance to a lame song','Say the alphabet backward in 10 seconds',
'Drink a salty glass of milk','Look someone in the eyes and tell him he is very charming','Sing `Old MacDonald Had a Farm` with a strong southern accent',
'Do the worm dance', 'Take a pic of all the players without them knowing','Call a random phone number and talk to that person for as long as you can', 'Sing a song as if you were sick'];
const dare = document.querySelector('.dare');
const darebtn = document.querySelector('.darebtn');

/* dare question functions */
darebtn.addEventListener('click',Dare);
function Dare(){
    let darerandom = Math.floor(Math.random()*darecontent.length);
    let dareout = darecontent[darerandom];
    dare.innerHTML = dareout;
}
/* Game -- include game explanation*/
/* https://www.collegefashionista.com/fun-games-to-play/ */
/* game variables */
const game = ['concentration','truth or dare','369','wink','mafia','card game - spoons',
'card game - B.S','card game - Crazy Eights', 'card game - Snap','card game - blackjack',
'card game - One Card',"UNO",'card game - Speed','card game - Camp','Charades','Pictionary',
'Tic-Tac-Toe Tournament','Who am I?','Mark Simpson','Jeopardy','Single Sentence Game','Telephone',
'Heads Up','Would You Rather?','Never have I Ever','James Bond (gong gong chil bang!)','Play a Board Game!'];
const wgbtn = document.querySelector('.wgbtn');
const wg = document.querySelector('.wg');

/* game functions */
wgbtn.addEventListener('click',whatGame);
function whatGame(){
    let wgrandom = Math.floor(Math.random()*game.length);
    let wgout = game[wgrandom];
wg.innerHTML=wgout;
}

/* Travel*/
/* travel variables */
const travelcont = [
    {
        place:'Seoul, South Korea',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat pellentesque velit, a ultrices lacus. Proin venenatis, mi nec convallis ornare, nisi elit malesuada velit, eget mattis ex ex in magna. Proin diam nisl, ultricies sit amet nibh luctus, malesuada tincidunt nisi.'
    }, {
        place:'Iceland',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat pellentesque velit, a ultrices lacus. Proin venenatis, mi nec convallis ornare, nisi elit malesuada velit, eget mattis ex ex in magna.'
    }, {
        place:'Alberta, Canada',
        desc:'Lorem ipsum dolor sit amet. Proin diam nisl, ultricies sit amet nibh luctus, malesuada tincidunt nisi.'
    },
    {
        place:'Los Angeles, California USA',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat pellentesque velit, a ultrices lacus. Proin venenatis, mi nec convallis ornare. Proin diam nisl, ultricies sit amet nibh luctus, malesuada tincidunt nisi.'
    }, {
        place:'Helsinki, Finland',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A ultrices lacus. Proin venenatis, mi nec convallis ornare, nisi elit malesuada velit, eget mattis ex ex in magna. Proin diam nisl, ultricies sit amet nibh luctus, malesuada tincidunt nisi.'
    }, {
        place:'Quebec, Canada',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies sit amet nibh luctus, malesuada tincidunt nisi.'
    }, {
        place:'New York, New York USA',
        desc:'Lorem ipsum dolor sit amet. Cras volutpat pellentesque velit, a ultrices lacus. Proin venenatis, mi nec convallis ornare, nisi elit malesuada velit, eget mattis ex ex in magna. Proin diam nisl, ultricies sit amet nibh luctus, malesuada tincidunt nisi.'
    }
];
const trbtn = document.querySelector('.trbtn');
const travel = document.querySelector('.travel');
const place = document.querySelector('.place');
const desc = document.querySelector('.description');

/* travel functions */
trbtn.addEventListener('click',getTravel);
function getTravel(){
    let trrandom = Math.floor(Math.random()*travelcont.length);
   place.innerHTML = travelcont[trrandom].place;
    desc.innerHTML = travelcont[trrandom].desc;
}