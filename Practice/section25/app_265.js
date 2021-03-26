
// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove(); // sterg li-ul !!
//     })
// } // observam ca <li>-urile care existau deja sunt sterse cand apasam click pe ele
// // dar cele care apar dupa nu mai sunt, deoarece acestea nu au un eventListener asociat cu ele!





const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    // e.target.nodeName === 'LI' && e.target.remove(); // nuj ce e asta
    // console.log(e);
    // console.log(e.target)
    // console.dir(e.target)

    // e.target.remove(); // cu varianta asta mi s-ar elimina orice element din <ul> pe care as apasa eu 
    e.target.nodeName === 'LI' && e.target.remove(); // asa si verific sa fie <li> !!

    // ce este target? pe ce am apasat efectiv, chiar daca asta e un event pt parinte(in cazul unui <li>)
})

// delegation -> adaugam niste eventListeners pt elemente care nu exista inca pe pagina !






// tweetsContainer.addEventListener('click', function (e) {
//     console.log('CLICK ON UL!')
// })
