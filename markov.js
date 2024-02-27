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
                const flatNewValue = [words[i+2], markovChain.get(`${words[i]} ${words[i+1]}`)].flat();
                markovChain.set(
                    `${words[i]} ${words[i+1]}`,
                    flatNewValue
                );
            }
            else markovChain.set(`${words[i]} ${words[i+1]}`, words[i+2]);
        }
    }
    result.push(Array.from(markovChain.keys())[0]);
    for(i = 0; i < markovChain.size; i++) {
        const valueLength = markovChain.get(Array.from(markovChain.keys())[i]).length;
        if(markovChain.get(Array.from(markovChain.keys())[i]).length > 1) {//pick a value for keys with multiple values
            result.push(markovChain.get(
                Array.from(markovChain.keys())[i])
                [Math.floor(valueLength * Math.random())]
            ); //could use some variables instead of all this
        }  
        else if(prob(50)) {
            result.push(markovChain.get(Array.from(markovChain.keys())[i]));
        } // i have no clue if the RNG is random enough
    }
    console.log(markovChain);
    console.log(result);
}
markov("a a a a b c d")
