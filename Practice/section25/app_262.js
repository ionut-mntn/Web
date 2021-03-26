const tweetForm = document.querySelector('#tweetForm')
const tweetContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function (e) {

    // submit event!! nu neaparat la click pe buton; poate chiar si la enter

    e.preventDefault(); // anuleaza default behavior-ul !!

    // DE RETINUT form.elements !!

    alert("SUBMITTED");
    console.log("SUBMITTED");
    // e.target = null;
    // e.preventDefault();
    // vrem sa nu se mai faca request ul cand se da submit la form !!
    // daca scoatem atributul action al form-ului din html, aia nu o sa ne mai trimita la o noua pagina, dar va face un refresh al paginii curente
    // e.preventDefault();
    // suprascriem the default behavior of 
    // getAttribute, setAttribute
    const usernameInput = document.querySelectorAll('input')[0];
    const tweetInput = document.querySelectorAll('input')[1];
    console.log(usernameInput, tweetInput); // astea is efectiv elementele/tag-urile de input !!
    console.log(usernameInput.value, tweetInput.value);
    //this.
    //tweetForm.
    // acelasi lucru astea
    // putem accesa prin nume(varianta noastra) SAU prin 
    const username = tweetForm.elements.username.value // 'username' e unul din name-urile pe care le-am setat noi in html
    const tweet = tweetForm.elements.tweet.value // 'tweet' e unul din name-urile pe care le-am setat noi in html
    // console.dir(tweetForm)
    //console.log(tweetForm.elements)


    // const newTweet = document.createElement('li');
    // const boldTag = document.createElement('b')
    // boldTag.append(username); // appenduieste inside of the element, chiar la final
    // newTweet.append(boldTag);

    // newTweet.append(`-${tweet}`)
    // tweetContainer.append(newTweet);
    // console.log(newTweet);
    addTweet(username, tweet);

    tweetForm.elements.username.value = '';
    tweetForm.elements.tweet.value = '';

})
// function addTweet2 = () => console.log('ceva')
// addTweet2();

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const boldTag = document.createElement('b')
    boldTag.append(username); // appenduieste inside of the element, chiar la final
    newTweet.append(boldTag);

    newTweet.append(`-${tweet}`)
    tweetContainer.append(newTweet);
    console.log(newTweet);
}