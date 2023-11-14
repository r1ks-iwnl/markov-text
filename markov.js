function markov(text) {
    let words = text.split(" ");
    let markovChain = new Map();// TODO: get a key to have more than 1 possible value
    let result = new Map();
    for(i = 0; i < words.length; i++ ) {
        if(words[i + 2] != undefined) {
            markovChain.set(`${words[i]} ${words[i+1]}`, words[i+2]);
        }
    }
    for(i = 1; i <= markovChain.size; i++) {
        
    }
    console.log(markovChain);
    console.log(Array.from(markovChain.keys())[0]);
}
markov("a a a b c")
