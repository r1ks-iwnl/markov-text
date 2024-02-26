function prob(percent) {
	if (Math.random() * 100 < percent) {
		return true
	} else return false;
}

function markov(text) {
    let words = text.split(" ");
    let markovChain = new Map();
    let result = [];
    for(i = 0; i < words.length; i++ ) {
        if(words[i + 2] != undefined) {
            if(markovChain.has(`${words[i]} ${words[i+1]}`)) { //so keys don't get overwritten values
                const flatNewValue = [words[i+2], markovChain.get(`${words[i]} ${words[i+1]}`)].flat()
                markovChain.set(
                    `${words[i]} ${words[i+1]}`,
                    flatNewValue
                );
            }
            else markovChain.set(`${words[i]} ${words[i+1]}`, words[i+2]);
        }
    }
    result.push(Array.from(markovChain.keys())[0]); //add support for keys with multiple values
    for(i = 0; i < markovChain.size; i++) {
        if(prob(50)) {
            result.push(markovChain.get(Array.from(markovChain.keys())[i]));

        }
    }
    console.log(markovChain);
    console.log(result);
}
markov("a a a a b c d")
