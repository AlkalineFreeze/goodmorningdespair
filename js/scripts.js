var subjects = ['Satan', 'Johnny', 'Edward Mordrake', 'Soiled Jesus', 'All the assholes', 'A gallon of blood', 'Fetid meats', 'Brain worms', 'A cunt fairy', 'Nietzsche', 'Hyper-intelligent gas', 'Exploding infants', 'Blackness', 'Numbers', 'Descartes', 'Glorious drugs', 'Fake euphoria', 'Fire', 'Spiders', 'An ancient god', 'Reason', 'The concept of death', 'The Roman empire', 'Fuckers', 'Some fucker', 'A giant squid', 'False hope', 'A false prophet', 'The hoard', 'The meek', 'Introverts', 'Creeping dread', 'The rejected', 'Denial', 'The sins of the father', 'Endless pain', 'Raving insanity', 'The ancient and abominable mass', 'The nameless ones', 'A grotesque eye', 'Plato', 'Logic', 'Justice', 'The souls of the damned', 'The hyper-aware', 'Giant rodents', 'An endless parade of drones', 'Headless soldiers', 'Culture', 'Fools', 'Foolish notions', 'The scent of decay', 'A bleak reality', 'The great beyond', 'A unified alien intelligence', 'Parasites', 'Humanity', 'Darkness', 'The latest trend', 'The adversary', 'That which must never be spoken', 'The super-ego', 'The collective unconcious', 'The cosmic egg', 'The faithful', 'The mindless struggle'];
var verbs = ['will devour', 'destroyed', 'will engulf', 'could never imagine', 'conquered', 'mangled', 'defenestrated', 'incurred the wrath of', 'grasped', 'desperately craved', 'choked the life out of', 'fucked', 'repeatedly licked', 'could not fathom', 'did not want', 'rejected', 'punctured', 'embraced', 'ignited', 'ruined', 'flicked spiders at', 'celebrated', 'sliced up', 'left a trail of blood across', 'pulverized', 'tweeked the nipple of', 'found fault with', 'dealt a fatal blow to', 'ended', 'fattened', 'infested', 'infected', 'slowly oozed', 'lurked just below', 'will soon crush', 'grew tired of', 'tore apart', 'plundered', 'ate', 'flapped ineffectually at', 'collected', 'could not fulfill', 'never escaped from', 'will never be free of', 'groped blindly at', 'domesticated', 'enslaved', 'plagiarized', 'redefined', 'whittled away at', 'killed', 'gleefully regurgitated', 'abandoned', 'refused to consider', 'will decide the fate of', 'vehemently contradicted', 'drilled a hole in', 'vomited out', 'struggled to comprehend', 'did not forsee', 'snuffed out', 'gave rise to', 'could not justify', 'will rain down fire upon', 'will always crave', 'created', 'will outlive', 'will not tolerate', 'will feast upon', 'pillaged', 'rained fire and ash down upon', 'grew weary of'];
var objects = ['the Earth', 'everything', 'a baby', 'the body of Christ', 'all the blood', 'a murder of crows', 'hope', 'timidity', 'all the morons', 'dreams', 'capitalism', 'silence', 'the depths of despair', 'a judgemental nun', 'the void', 'the jabbering masses', 'fashion', 'the plague', 'a stormy sea', 'the abyss', 'morality', 'dogma', 'the eternal night', 'ignorance', 'all of human suffering', 'parties on the weekend', 'a comfortable life', 'complacency', 'the tedious sleepwalkers', 'flesh sacks', 'poison', 'materialism', 'the hedonistic rats', 'an unexamined life', 'faith', "children's tears", 'fear itself', 'all that could have been', 'fascists', 'the government', 'polite society', 'all the fuckers', 'that fucking fucker', 'one lonely cunt', 'the pain of existance', 'heroism', 'a gnawing sense of loss', 'monkeys', 'the restless ghost of Lovecraft', 'an engorged ego', 'the fourth dimension', 'the slaves', 'the masters', 'conformity', 'blasphemy', 'the wisdom of a hermit', 'abstract entities', 'sodomy', 'the ultimate sacrifice', 'the living', 'the machines', 'parasites', 'everyone', 'the singularity', 'the dead', 'the concept of money', 'nothing and everything', 'the cave', 'an unquenchable fire'];

var addSubject = function(str) {
	subjects.push(str);
}

var addAction = function(str) {
	verbs.push(str);
}

var addObject = function(str) {
	objects.push(str);
}

$(document).ready(function() {
	console.log("%cHi and welcome!", "color: red; font-size: large; font-family: cursive;");
	console.log("The despair engine generates random bits of wisdom using predefined subjects, actions, and objects.");
	console.log("You can add subjects, actions, and objects, but when you refresh the page your changes will vanish.");
	console.log("To add Snakes as a subject, type: addSubject('Snakes') and be sure to put 'Snakes' in quotes.");
	console.log("Similarly, add actions with addAction('will whatever') and objects with addObject('teeth or whatever')");
	console.log("Questions, comments, or feel like discussing philosophy, numbers, or any interesting thing? Email me at alkalinefreeze at gmail.");

	var getRandom = function(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	var speakWisdom = function() {
		var newMessage = getRandom(subjects) + ' ' + getRandom(verbs) + ' ' + getRandom(objects);
		$('.message').text(newMessage);
	}

	speakWisdom();

	$('.generate').on('click', function() {
		speakWisdom();
	});

});
