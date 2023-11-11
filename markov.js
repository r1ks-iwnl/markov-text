function markov(text) {
    let words = text.split(" ");
    let markovChain = new Map();// TODO: get a key to have more than 1 possible value
    for(i = 0; i < words.length; i++ ) {
        if(words[i + 2] != undefined) {
            markovChain.set(`${words[i]} ${words[i+1]}`, words[i+2]);
        }
    }
    console.log(markovChain)
    //console.log(Array.from(markovChain.keys())[1])
}
markov("a a a b c")
