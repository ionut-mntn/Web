fakeRequestCallback('books.com/page1',
    function (response) {
        console.log("it worked!!!");
        console.log(response);

    },
    function (err) {

    })