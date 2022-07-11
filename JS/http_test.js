var API_URL = 'https://jsonplaceholder.typicode.com/posts';

var newPost = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };


//   GET
fetch(API_URL).then(res => {
    console.log(res.json());
})

// POST
fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(newPost)
});

// PUT
fetch(API_URL, {
    method: 'PUT',
    body: JSON.stringify(newPost)
});

// DELETE
fetch(API_URL, {
    method: 'DELETE'
});