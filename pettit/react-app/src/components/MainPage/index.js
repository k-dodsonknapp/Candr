import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllComments } from "../../store/comments";
import { deleteAPost, getAllPosts } from "../../store/posts";
import './post.css'

const MainPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const posts = useSelector(state => Object.values(state.post))
    const user = useSelector(state => state.session)

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch])

    const handleDelete = (postId) => async(e) => {
        console.log("########", postId)
        e.preventDefault();
        const id = { "id": +postId}
        dispatch(deleteAPost(id))
        dispatch(getAllPosts())
        dispatch(getAllComments(id.id))
    }

    const handleEdit = (postId) => async(e) => {
        e.preventDefault();
        history.push(`/posts/${postId}/edit`)
    }

    return (
        <div className="page">
            <div className="main-feed-container" >
                {posts?.map(post => (
                    <div className="post" key={post.id}>
                        <div className="left-post">
                            <button>
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/cloud-platform/up-arrow-9.png" alt="upvote"/>
                            </button>
                            <button>
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/cloud-platform/down-arrow-10.png" alt="downvote"/>
                            </button>
                        </div>
                        <div className="right-post">
                            <div>
                                {post.title}
                            </div>
                            <a href={`/posts/${post.id}`}>
                                <div>
                                    <div>
                                        <img className='img-tage' src={`${post.image}`} alt="post"/>
                                    </div>
                                </div>
                            </a>
                            {post.userId === user.user.id && (
                                <div className="button-div">
                                    <div className="edit-btn">
                                         <i onClick={handleEdit(post?.id)} className="fa-solid fa-pen-to-square"></i>
                                    </div>
                                    <div className="delete-btn">
                                         <i onClick={handleDelete(post?.id)} className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            )}
                            {post.userId !== user.user.id && (
                                <div>

                                </div>
                            )}
                        </div>
                    </div>
                )).reverse()}
            </div>
            <div className="right-container">
                <div className="communities">

                </div>

                <div className="create"></div>
            </div>
        </div >
    )
}

export default MainPage