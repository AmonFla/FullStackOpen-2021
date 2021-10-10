import { useState, useEffect} from 'react';
import './App.css';
import Blog from './components/Blog'
import servBlog from './service/blogs'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    servBlog.getAll().then(blogs=>setBlogs(blogs))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog List</h1>         
      </header>
      <body className="App-body">
        {blogs.map(blog => 
          <Blog key={blog.id} blog={blog} />
        )}
      </body>
    </div>
  );
}

export default App;
