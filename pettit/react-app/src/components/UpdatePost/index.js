import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllPosts, updateAPost } from "../../store/posts";

const UpdatePost = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const postId = useParams();
    console.log("postId", postId)
    const userId = useSelector(state => state?.session?.user);
    // const post = useSelector(state => state?.post.list)[postId.postId];
    const post = useSelector(state => state?.post.list.filter(post => post.id === +postId.postId)[0]);
    console.log("POST", post)

    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [image, setImage] = useState(post.image);
    const [showPostForm, setShowPostForm] = useState(true)
    const [showImgForm, setShowImgForm] = useState(false)
    const [errors, setErrors] = useState([])
    const [imgErrors, setImgErrors] = useState([])

    useEffect(() => {
        const err = []
        if (body.length > 250 || body.length < 5) {
            err.push("Your body cannot be longer than 250 characters or shorter than 5 characters.")
        }
        if (title.length > 50 || title.length < 3) {
            err.push("Your post must have a title and cannot be longer than 50 characters.")
        }

        setErrors(err)

    }, [title, body])

    useEffect(() => {
        const err = []
        if (image.length > 100) {
            err.push('Please use .png, .jpg, or .jpeg file type')
        }
        setImgErrors(err)

    }, [image])


    const handleEditSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: postId.postId,
            "userId": userId.id,
            "title": title,
            "body": body,
            "image": image,
            "updated_at": new Date()
        }
        console.log("!!!!!!!!!", newPost)
        dispatch(getAllPosts())
        dispatch(updateAPost(newPost));
        history.push('/posts/main')
    }

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    const handleImgTab = (e) => {
        e.preventDefault();
        setShowPostForm(false);
        setShowImgForm(true)
    }

    const handlePostTab = (e) => {
        e.preventDefault();
        if (showImgForm === true) {
            setShowImgForm(false);
        }
        setShowPostForm(true)
    }

    return (
        <div className="edit-page">
            <div className="form-wrapper">
                <div className="post-container">
                    <div className="create-post-title">
                        <h3>Create a post</h3>
                        <button onClick={handleImgTab}>Images</button>
                        <button onClick={handlePostTab}>Post</button>
                    </div>
                    {showPostForm && (
                        <form onSubmit={handleEditSubmit}>
                            <ul className="errors">
                                {errors.length > 0 && errors.map(error => {
                                    return <li className="li" key={error}>
                                        <div>
                                            {error}
                                        </div>
                                    </li>
                                })}
                            </ul>
                            <div className="title-div">
                                <div className="title-label">
                                    {/* <label>Title:</label> */}
                                </div>
                                <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder={"Title"}
                                />
                            </div>
                            <div className="body-div">
                                <div className="body-label">
                                    <label>Body:</label>
                                </div>
                                <textarea
                                    type="text"
                                    name="body"
                                    value={body}
                                    onChange={e => setBody(e.target.value)}
                                />
                            </div>
                            <div className="btn-div">
                                {/* <button onClick={handleCancel}>Cancel</button> */}
                                <button disabled={errors.length > 0 ? true : false} id="post-btn">Post Edit</button>
                            </div>
                        </form>
                    )}
                    {showImgForm && (
                        <form onSubmit={handleEditSubmit}>
                            <ul className="errors">
                                {imgErrors.length > 0 && imgErrors.map(error => {
                                    return <li className="li" key={error}>
                                        <div>
                                            {error}
                                        </div>
                                    </li>

                                })}
                            </ul>
                            <div className="title-div">
                                <div className="title-label">
                                    {/* <label>Title:</label> */}
                                </div>
                                <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder={"Title"}
                                />
                            </div>
                            <div className="edit-image">
                                <img className="img-tage" src={image} alt="edited" />
                            </div>
                            <div className="image-div">
                                <div className="image-label">
                                    <label>Post an image:</label>
                                </div>
                                <input
                                    type="text"
                                    name="image"
                                    value={image}
                                    onChange={e => setImage(e.target.value)}
                                />
                            </div>
                            <div className="btn-div">
                                {/* <button onClick={handleCancel}>Cancel</button> */}
                                <button disabled={errors.length > 0 ? true : false}id="post-btn">Post Edit</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <div className="right-container">
                <div className="communities">

                </div>

                <div className="create"></div>
            </div>
        </div>
    )
};

export default UpdatePost;