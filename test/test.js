const Blog = require("../models/Blog")
const app = require("../app")
const chai = require("chai")
const chaiHttp = require("chai-http")

chai.should()
chai.use(chaiHttp)

const baseBlog = {
  title: "A good blog title",
  body: "Nice body hey",
  image: "https://images.unsplash.com/photo-1489211914964-32c31f87e86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
}

describe("Testing blogs", () => {
  beforeEach(done => {
    Blog.deleteMany({}, e => done())
  })

  describe("/GET", () => {
    it("should list all blogs", (done) => {
      chai.request(app).get("/api/blogs").end((err, res) => {
        res.should.have.status(200)
        res.body.data.should.be.a("array")
        res.body.data.length.should.be.eql(0)
        done()
      })
    })
  })

  describe("/POST", () => {
    it("should create a new post", (done) => {
      chai.request(app).post("/api/blogs").send(baseBlog).end((err, res) => {
        res.should.have.status(200)
        res.body.data.should.be.a("object")
        res.body.status.should.be.eql("success")
        done()
      })
    })
  })

  describe("/GET/:id", () => {
    it("should get a blog post by id", (done) => {
      const newBlog = new Blog(baseBlog)
      newBlog.save((err, blog) => {
        chai.request(app).get("/api/blogs/" + blog.id).end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.a("object")
          res.body.status.should.be.eql("success")
          done()
        })
      })
    })
  })

  describe("/PUT/:id", () => {
    it("should update a blog post", (done) => {
      const newBlog = new Blog(baseBlog)
      const updatedBlog = {
        title: "A new blog title updated",
        body: "Nice body hey, after updating",
        image: "https://images.unsplash.com/photo-1489211914964-32c31f87e86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
      }
      newBlog.save((err, blog) => {
        chai.request(app).put("/api/blogs/" + blog.id).send(updatedBlog).end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.a("object")
          res.body.status.should.be.eql("success")
        })
      })
      done()
    })
  })

  describe("/DELETE/:id", () => {
    it("should delete a post by its id", (done) => {
      const newBlog = new Blog(baseBlog)
      newBlog.save((err, blog) => {
        chai.request(app).delete("/api/blogs/" + blog.id).end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.a("object")
          res.body.status.should.be.eql("success")
        })
      })
      done()
    })
  })
})
