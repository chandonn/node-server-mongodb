const blogService = require("../services/BlogService")

exports.getAllBlogs = async (_, res) => {
  try {
    const blogs = await blogService.getAllBlogs()
    res.status(200).json({ data: blogs, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body)
    res.status(200).json({ data: blog, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.findBlogById = async (req, res) => {
  try {
    const blog = await blogService.findBlogById(req.params.id)
    res.status(200).json({ data: blog, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateBlog = async (req, res) => {
  try {
    await blogService.updateBlog(req.params.id, req.body)
    const blog = req.body
    res.status(200).json({ data: blog, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.deleteBlog = async (req, res) => {
  try {
    await blogService.deleteBlog(req.params.id)
    res.status(200).json({ data: {}, status: "success" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
