const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.log('subbmitted!');
    // console.lof(this);
    // console.log(form);
    // console.dir(this);
    console.dir(form); //The Console method dir() displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.
    // console.log(form.elements.q.value);
    // console.log(form.elements.query.value);
    const searchTerm = form.elements.query.value;
    // const res = axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`) // la acest pas am facut functia o functie async;
    // const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`) // la acest pas am facut functia o functie async;

    // const config = { params: { q: searchTerm } }
    const config = { params: { q: searchTerm, isFunny: 'colt' } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config) // la acest pas am facut functia o functie async;

    // console.log(res.data);
    // console.log(res.data[0].show.image.medium);

    // const img = document.createElement('IMG');
    // // img.src = res.data[0].show.image.medium;
    // document.body.append(img);
    makeImages(res.data);
    form.elements.query.value = ''
});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            console.log(result);
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);

        }
    }
}