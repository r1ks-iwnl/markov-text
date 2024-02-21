function prob(percent) {
	if (Math.random() * 100 < percent) {
		return true
	} else return false;
}

function markov(text) {
    let words = text.split(" ");
    let markovChain = new Map();// TODO: get a key to have more than 1 possible value
    let result = [];
    for(i = 0; i < words.length; i++ ) {
        if(words[i + 2] != undefined) {
            markovChain.set(`${words[i]} ${words[i+1]}`, words[i+2]);
        }
    }
    result.push(Array.from(markovChain.keys())[0]);
    for(i = 0; i < markovChain.size; i++) {
        if(prob(50)) {
            result.push(markovChain.get(Array.from(markovChain.keys())[i]));

        }
    }
    console.log(markovChain);
    console.log(result);
}
markov("a a b c")
