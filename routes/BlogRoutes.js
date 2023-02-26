const express = require("express")
const {
  getAllBlogs,
  createBlog,
  findBlogById,
  updateBlog,
  deleteBlog
} = require("../controllers/BlogController")

const router = express.Router()

router.route("/").get(getAllBlogs).post(createBlog)
router.route("/:id").get(findBlogById).put(updateBlog).delete(deleteBlog)

module.exports = router
