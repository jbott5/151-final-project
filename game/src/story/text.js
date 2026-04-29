//// game ///////////

const INTRO_DIALOGUE = [
  { name: "", text: "You are about to enter a fragile world. You should not be here." },
  { name: "", text: "What holds this world together is thin, and you are close to breaking it with your presence." },
  { name: "", text: "I cannot choose for you, but I advise you to close the program right now." },
];

const KATHERINE_DIALOGUE = [
  { name: "Katherine the Lost Dog", text: "g0t qquesti0nsss???" },
  { name: "Katherine the Lost Dog", text: "g0 → [[eyeball on the wall]] 👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️👁️" },
  { name: "Katherine the Lost Dog", text: "(((((only)))) 22222222!! R3SP0NDS 2 U!!!" },
  { name: "Katherine the Lost Dog", text: "d0nt l00k @ sh4pe d0nt l00k d0nt l00k" },
  { name: "Katherine the Lost Dog", text: "g00d d34l g00d d34l g00d d34l" },
];

const CLOWN_DIALOGUE_ONE = [
  { name: "Toots", text: "I'm just a fun little guy doing fun little things. Why would a clown end up in hell? " },
  { name: "Toots", text: "I mean, sure, I wear makeup and have big shoes, but that doesn't make me a demon. Besides, clowns are supposed to be silly and harmless, not scary." },
]


const CLOWN_DIALOGUE_TWO = [
  { name: "Toots", text: "People keep grabbing and squeezing me, thinking I'll honk, but I don't honk" },
  { name: "Toots", text: "They squeeze and slap me and tell me to do things..." },
  { name: "Toots", text: "I'm kind of a low profile drifter type cool guy now, but people still take advantage of me" },
]

const CLOWN_DIALOGUE_THREE = [
  { name: "Toots", text: "My mom kicked me once, so I knawd on her ankle. I think she liked seeing me in precarious situations." },
  { name: "Toots", text: "If they were for work, of course. After all I'm her funny little guy. A cool little guy." },
  { name: "Toots", text: "One day I will honk for you mommy!" },
]

const WEIRD_BALL_ONE = [
  { name: "", text: "Hell is other people, wouldn't you agree?." },
];

const WEIRD_BALL_ONE_NO = [
  { name: "", text: "That's okay, I've always been more of a Albert Camus kinda guy." },
  { name: "", text: "Beautiful french fuck" },
];

const WEIRD_BALL_ONE_YES = [
  { name: "", text: "That's a quote from Jean-Paul Sartre's No Exit, but I think it is often misundertood" },
  { name: "", text: "It isn't that other people are hellish, but moreso that their perceptions restrict us into a definitive object." },
];


const DOOR_LOCKED = [
  { name: "", text: "It's locked." },
];

const GIRL_DIALOGUE = [
  { name: "critter", text: "Naraka distorts us in both mind and body in our time here." },
  { name: "critter", text: "It's much more diserable to cling to nothing rather than something during this process." },
  { name: "critter", text: "Though if I am being honest, I am rather unbothered by this state of being, didn't live for much hence I don't got much to look back to." },
  { name: "critter", text: "Got a ciggy?" },
];

const EYE_DIALOGUE_DIALOGUE = [
  { name: "Strange eye-creature", text: "I can't seem to wrap my head around anything these days. Does anything make sense to you? I just wish I could at least remember the sweet sound of music...  "  },
];
const EYE_DIALOGUE_ONE_SOLVED = [
  { name: "Strange eye-creature", text: "Oh... there it is. I remember..." },
  { name: "Strange eye-creature", text: "It sounds like color..." },
  { name: "", text: "The creature begins to cry, then weep, yet the tears do not fall. They gather, shimmer, and fold themselves into a key." },
  { name: "INVENTORY", text: "You got a key!" },
];

const EYE_DIALOGUE_TWO_DIALOGUE = [
  { name: "Strange eye-creature", text: "My youth? Well I..." },
  { name: "Strange eye-creature", text: "I used to do something...with my hands" },
  { name: "Strange eye-creature", text: "Music, I suppose, can't quite remember. There's a faint memory of me pressing down black and white notes and not much else." },
  { name: "Strange eye-creature", text: "I'm sorry dear, it's already slipping away again. The effects of Naraka are not so kind to all of us." },
];

const EYE_DIALOGUE_THREE_DIALOGUE = [
  { name: "Strange eye-creature", text: "…oh!" },
  { name: "Strange eye-creature", text: "I remember! I was a composer!" },
  { name: "Strange eye-creature", text: "How strange… to find that once again. I thought I had lost it" },
  { name: "Strange eye-creature", text: "Thank you, dear. Truly, thank you so much" },
];

const PLUSHIE_DIALOGUE = [
  { name: "large tall plushie", text: "I had this awful nightmare last night." },
  { name: "large tall plushie", text: "In it, I was a psychologist. And there was this girl. She was a cannibal. Ate her partner years ago… some horrible, freak incident." },
  { name: "large tall plushie", text: "But as the months passed, I got to know her better. She seemed really nice, and she's real cute too!" },
  { name: "large tall plushie", text: "One night she started crying. I felt so bad for her, I reached out and held her hand. She held it back… slowly, almost carefully. Then…" },
  { name: "large tall plushie", text: "She bit down. I could feel the skin peeling from my finger." },
  { name: "large tall plushie", text: "And I just… stared at her face." },
  { name: "large tall plushie", text: "She looked more horrified than I felt. Like she was disgusted with herself. Like she couldn't control it… like her own body forced her to do it." },
  { name: "large tall plushie", text: "I know it was just a dream, but I can't stop thinking about her. Like maybe she's real, living inside my neurons, tormented by who she is." },
  { name: "large tall plushie", text: "I guess it makes me think about myself, but I don't eat people y'know" },
];


const PLUSHIE_DIALOGUE_TWO = [
  { name: "large tall plushie", text: "I heard it tastes like chicken. Read it somewhere in an online forum" },
  { name: "large tall plushie", text: "What? I'm just curious man, don't judge me!" },
];

const NARRATOR_DIALOGUE = [
  { name: "", text: "The water doesn't move here. It just sits, expanding endlessly in every direction." },
  { name: "", text: "You're not sure how long you've been standing here. Time feels slower." },
  { name: "", text: "The sky isn't a sky. It's more like the idea of one. You have to admit, it's a beautiful scenery." },
  { name: "", text: "But something is wrong." },
  { name: "", text: "You can feel it deep down. A weight sitting on your chest, like your body knows something your mind hasn't caught up to yet." },
  { name: "", text: "You don't belong here. You shouldn't be here." },
  { name: "", text: "You can't even remember what happened. What you last did. How you got here." },
  { name: "", text: "And then, as you put every ounce of energy into remembering — the water stops being water." },
  { name: "", text: "Whatever commands the molecules to be held together stops doing so. They begin to drift apart. Slowly at first." },
  { name: "", text: "And you sink." },
  { name: "", text: "And then fall." },
];

const KEYBOARD_DIALOGUE = [
  { name: "emp", text: "hey. hey you. c'mere for a second." },
  { name: "emp", text: "yeah you, i'm talkin to ya." },
  { name: "emp", text: "you look absolutely, completely, totally lost." },
  { name: "emp", text: "i can tell ya ain't from here." },
  { name: "emp", text: "how? cause i ain't from here either." },
  { name: "emp", text: "i think i'm what you'd call bicorporeal. i exist right here, and also somewhere out there. " },
  { name: "emp", text: "how do i know? dunno. just a gut feeling. like my body's sittin in some other plane of the universe havin a reeeeaaaal normal Wednesday." },
  { name: "emp", text: "and you got something going on too, i can feel it." },
  { name: "emp", text: "..." },
  { name: "emp", text: "you don't want to be here either, is that rite?" },
  { name: "emp", text: "me either, so i've made a decision" },
  { name: "emp", text: "i'm followin ya. not really up to debate" },
  { name: "emp", text: "don't worry 'bout it." },

];


const FLIPPY_DIALOGUE = [
  { name: "Stranger", text: "" },
  { name: "Stranger", text: "The village is just past those trees. But I wouldn't go at night." },
];




const PLUSHIE_DIALOGUE_2 = [
  { name: "soft tiny plushie", text: "i heard it tastes like chicken." },
  { name: "soft tiny plushie", text: "well, i read it on an online forum." },
  { name: "soft tiny plushie", text: "i don't know man, i am just a curious soul, don't judge me!" },

];

const PLUSHIE_DIALOGUE_3 = [
  { name: "soft tiny plushie", text: "hey. come here." },
  { name: "soft tiny plushie", text: "closer..." },
  { name: "soft tiny plushie", text: "...okay so, about that online forum I told you yeah...?" },
  { name: "soft tiny plushie", text: "I heard there's three keys hidden around here, you're gonna need all of them if you wanna get out of this tiny room." },
  { name: "soft tiny plushie", text: "don't ask me how i know that. i just do. i know things." },
  { name: "soft tiny plushie", text: "just think a little outside the box." },
  { name: "soft tiny plushie", text: "that's all i'm saying." },
];

const PLUSHIE_DIALOGUE_4 = [
  { name: "soft tiny plushie", text: "hey. come here." },
  { name: "soft tiny plushie", text: "closer..." },
  { name: "soft tiny plushie", text: "...okay so, about that online forum I told you yeah...?" },
  { name: "soft tiny plushie", text: "I heard there's three keys hidden around h- oh you got damn already?" },
  { name: "soft tiny plushie", text: "              ah          " },
  { name: "INVENTORY", text: "YOU GOT A KEY!"},

];



const DOG_DIALOGUE = [
  { name: "katherine the lost dog", text: "hey guys i am katherine the lost dog haha" },
  { name: "katherine the lost dog", text: "haha...bark bark bark... woof woof woof" },
  { name: "katherine the lost dog", text: "awooooooooo" },
  { name: "katherine the lost dog", text: "..." },
  { name: "katherine the lost dog", text: "do you buy it?" },
  { name: "katherine the lost dog", text: "sorry i am not actually her. i just decided to morph into a look-alike of her" },
  { name: "katherine the lost dog", text: "here in ■■■■■■ shape is temporary. after long enough whatever holds your body together begins to fail. With enough will you can command the flesh to take almost any shape" },
  { name: "katherine the lost dog", text: "it just takes a lot of energy. like, a lot! i didn't think about it but im probably stuck like this for a few good years" },
  { name: "katherine the lost dog", text: "...dang!" },
  { name: "katherine the lost dog", text: "i just thought being someone's lost dog could be fun lol!" },
];

const DOG_DIALOGUE_2 = [
  { name: "katherine the lost dog", text: "" },
];

const DOG_DIALOGUE_3 = [
  { name: "katherine the lost dog", text: "welp" },
  { name: "katherine the lost dog", text: "test" },
];

const BIRD_DIALOGUE = [
  { name: "bbbird", text: "MUSIC." },
  { name: "bbbird", text: "i love music so much it physically hurts me." },
  { name: "bbbird", text: "wait." },
  { name: "bbbird", text: "wait wait wait wait wait." },
  { name: "bbbird", text: "is that a keyboard." },
  { name: "bbbird", text: "THAT IS A KEYBOARD." },
  { name: "bbbird", text: "please play something. please. i am begging you." },
  { name: "bbbird", text: "pppleaseplease pleasseee." },
  { name: "bbbird", text: "i need it oooo pleaseeeeplayitforme pleasee" },
  { name: "bbbird", text: "pplplpleasepleasesseplease." },
  { name: "", text: "ew." },
];

const BIRD_DIALOGUE_2 = [
  { name: "bbbird", text: "........." },
  { name: "bbbird", text: "that fucking sucks!" },
  { name: "bbbird", text: "whatever, here's a key i found or something!" },
]


const PLUSHIE_DIALOGUE_INTRO = [
  { name: "soft tiny plushie", text: "oh. a visitor." },
  { name: "soft tiny plushie", text: "don't get many of those. do you want to hear something?" },
];

const PLUSHIE_DIALOGUE_YES = [
  { name: "soft tiny plushie", text: "good. i was going to tell you anyway." },
  // continues into PLUSHIE_DIALOGUE...
];

const PLUSHIE_DIALOGUE_NO = [
  { name: "soft tiny plushie", text: "that's fine." },
  { name: "soft tiny plushie", text: "i'll tell you anyway." },
  // continues into PLUSHIE_DIALOGUE...
];

const TOOTS_DIALOGUE = [
  { name: "toots", text: "you weren't supposed to close that." },
  { name: "toots", text: "i've been in there for so long." },
  { name: "toots", text: "it's cold out here." },
  { name: "toots", text: "don't open it again." },
];