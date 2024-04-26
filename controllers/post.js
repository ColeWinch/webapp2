const mongoose = require('mongoose');
const schema = mongoose.schema;
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.bodg.content;

    const post = new Post ({
        title: title,
        content: content
    });
    post
    .save()
    .then(postSaved => {
        res.status(201).json({
            message: 'Post created successfully',
            post: postSaved
        });
    })
    .catch(err => console.log('err', err));
}

exports.getPosts = (req, res, next) => {
    Post.find().then(foundPosts => {
        res.json({
            message: "All posts",
            posts: foundPosts
        });
    });
}