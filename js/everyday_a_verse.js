var quoteCollection = [
	["And so they say, Lord, for everything a reason.", "Carina Round"],
	["Run away, run away. One day we won't feel this pain anymore.", "Amy Lee"],
	["I only wished to become something beautiful. Through my music, through my silent devotion.", "Tuomas Holopainen"],
	["Now and again we try to just stay alive, maybe we'll turn it all around, 'cause it's not too late, it's never too late.", "Adam Gontier"],
	["I'm sorry if you can't stand the naked truth, all you see is how you want it to be. So you keep on living your life", "Martijn Spierenburg, Sharon den Adel & Robert Westerholt"],

	["I know you're scared and don't understand. This is my life, this is who I am. What I do know is come Judgement Day, before the Lord can you say the same?", "Maria Brink"],
	["Massive disregard shows what to expect: scars on top of scars, racing toward a future we don't have", "Mark Jansen"],
	["So many people are full of hate while love and light are in their reach. So many people will harm themselves, but life can be so beautiful", "Mark Jansen"],
	["There's no relief, I see you in my sleep and everybody's rushing me, but I can feel you touching me. There's no release, I feel you in my dreams telling me I'm fine", "Lana Del Rey"],
	["No light, no light, in your bright blue eyes. I never knew daylight could be so violent.", "Florence Welch"],

	["I saw our memories die, thought our dreams had lost their meaning. But dreams still in my heart are painting colours in the dark", "Tarja Turunen"],
	["Man, the noblest beast of all: our fate is to lead. Some might say we’ve been misled.", "Østen Bergøy"],
	["It's OK to cry out when it's driving you insane. But somehow, someday I'll have to face the pain.", "Ivan Moody"],
	["And now all your love is wasted then who the hell was I? 'Cause now I'm breaking at the britches and at the end of all your lines.", "Bon Iver"],
	["Sometimes I tremble like a little child that faces the morning with a broken smile. Sometimes I crumble when the shades unfurl, sometimes I feel that I could rule the world.", "Roy Khan"],

	["Fulfil your dreams; life is not what is seems. We have captured time, so time made us all hostages without mercy.", "Mark Jansen"],
	["We are magnets pulling from different poles with no control, we'll never be apart. I will always find youl ike it's written in the stars.", "Darren Korb"],
	["For the heart I'll never have, for the child forever gone. The music flows, because it longs for the heart I once had.", "Tuomas Holopainen"],
	["Redeem me into childhood, show me myself without the shell. Like the advent of May I'll be there when you say, time to never hold our love.", "Tuomas Holopainen"],
	["Leaning over your fourtieth masterpiece, you must have loved the colour of these violins.", "René Rutten & Frank Boeijen"],

	["Can't find the road to lead us out of this, a million miles from where we found the bridge. Can't keep pretending everything's going to be alright with the whole world falling around me.", "Amy Lee"],
	["Sempre em busca do próprio gozo e todo zelo ficou pra trás. Nunca cede e nem esquece o que aprendeu com seus ancestrais.", "Pitty"],
	["I know it's hard to keep an open heart when even friends seem out to harm you. But if you could heal a broken heart wouldn't time be out to charm you?", "Axl Rose"],
	["Maybe without me you'll return to all the beauty I once knew, but if I stay I know we will both be drowned by you holding onto me.", "Eicca Toppinen"],
	["There's nothing wrong with loving who you are, she said, 'cause he made you perfect, babe. So hold your head up girl and you'll go far. Listen to me when I say.", "Lady Gaga"],

	["Maybe the reason why all the doors are closed, so you could open one that leads you to the perfect road. Like a lightning bolt, your heart will glow and when it's time you know.", "Katy Perry"],
	["I will not hide my face, I will not fall from grace, I'll walk into the fire, baby. All my life I was afraid to die, and now I come alive inside these flames.", "Maria Brink"],
	["Lágrimas e chuva molham o vidro da janela mas ninguém me vê. O mundo é muito injusto, eu dou plantão nos meus problemas que eu quero esquecer.", "Paula Toller"],
	["Thy life is a river to bear rapture and sorrow, to listne, to suffer, to entrust unto tomorrow.", "Nobuo Uematsu"],
	["What's the point of life and what's the meaning if we all die in the end? Does it make sense to learn or do we forget everything? ", "Mark Jansen"],
];

$(document).ready(function(){
	var randomLyric = Math.floor(Math.random() * quoteCollection.length);

	var text = quoteCollection[randomLyric][0];
	var author = quoteCollection[randomLyric][1];

	document.getElementById("text").innerHTML = '"' + text + '"';
	document.getElementById("author").innerHTML = author;

	document.getElementById("date").innerHTML = returnDate();
});
