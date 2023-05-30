const blogCards = document.querySelector('.blogCards');

let posts;
fetch("https://dummyjson.com/posts")
    .then(res => res.json())
    .then(json => {
        posts = json.posts;
        console.log(posts);
        listPosts();
    });

let listPosts = () => {
    for (let i = 3; i < 7; i++) {
        blogCards.innerHTML += `<div class="blogCard">
        <div class="blogCardContent">
            <h3>tags</h3>
            <h2>${posts[i].title}</h2>
            <p>${posts[i].body}</p>
        </div>
        <div class="blogCardDate">
            <h4>21 January 2018 by guido</h4>
        </div>
    </div>`
    }
}     