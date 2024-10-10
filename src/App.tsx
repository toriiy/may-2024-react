import './App.css';
import Users from "./components/users/Users";
import {IUser} from "./models/IUser";
import {useState} from "react";
import {IPost} from "./models/IPost";
import Post from "./components/post/Post";
import {getPostsOfUser} from "./services/api.service";


function App() {

    const [posts, setPosts] = useState<IPost[]>([])

    const showPosts = (user: IUser) => {
        getPostsOfUser(user)
            .then((response) => {
                let allPosts: IPost[] = response.posts;
                let postsOfCurrentUser: IPost[] = [];

                allPosts.forEach((post) => {
                    if (user.id === post.userId) {
                        postsOfCurrentUser.push(post)
                    }
                })
                setPosts(postsOfCurrentUser)
            })
    }

    return (
        <div>
            <hr/>
            <h1>Posts of current user:</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <hr/>
            <Users showPosts={showPosts}/>
        </div>
    );
}

export default App;
