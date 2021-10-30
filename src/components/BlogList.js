const  = () => {
    return (  
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <p>{blog.author}</p>
    );
}
 
export default ;