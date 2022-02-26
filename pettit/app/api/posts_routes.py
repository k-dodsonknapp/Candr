from crypt import methods
from urllib import request
from flask import Blueprint, jsonify, request
from app.models import Post, Comment, db
from datetime import datetime


post_routes = Blueprint('posts', __name__)

@post_routes.route('/main')
def get_all_posts():
    """
    This route will return all of the posts in the database. 
    """
    posts = Post.query.all()

    return {'posts': [post.to_dict() for post in posts]}



@post_routes.route('/new', methods=["POST"])
def create_post():
    data = request.json

    userId = data["userId"]
    title = data["title"]
    body = data["body"]
    image = data["image"]

    """
        This route passes in userId, title, body, image for posts
    """

    new_post = Post(
        userId=userId,
        title=title,
        body=body,
        image=image,  
    )
    db.session.add(new_post)
    db.session.commit()

    return new_post.to_dict()


@post_routes.route('/<int:id>/edit', methods=["PUT"])
def edit_post(id):
    data = request.json

    """
    data = {
        "id": <int>, 
        "userId": <int>,
        "title": "A post title",
        "body": "A post body",
        "image": "An image is required",
    }
    """

    post = Post.query.get(id) # need the id from one post

    post.title = data["title"]
    post.body = data["body"]
    post.image = data["image"]
    post.updated_at = data['updated_at']
    db.session.commit()

    return post.to_dict()


@post_routes.route("/delete", methods=["DELETE"])
def delete_post():
    data = request.json
    id = data["id"]

    post = Post.query.get((id))
    post_comments = Comment.query.filter(Comment.postId == id).all()
    for comment in post_comments:
        db.session.delete(comment)

    db.session.delete(post)
    db.session.commit()
    return post.to_dict()
