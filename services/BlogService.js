const blogModel = require("../models/Blog")

exports.getAllBlogs = async () => {
  const result = await blogModel.find()
  return result
}

exports.createBlog = async (blog) => {
  const result = await blogModel.create(blog)
  return result
}

exports.findBlogById = async (id) => {
  const blog = await blogModel.findById(id)
  return blog
}

exports.updateBlog = async (id, blog) => {
  const updated = await blogModel.findByIdAndUpdate(id, blog)
  return updated
}

exports.deleteBlog = async (id) => {
  const deleted = await blogModel.findByIdAndDelete(id)
  return deleted
}
