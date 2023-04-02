import { Link,Route,Routes,NavLink, useLocation } from 'react-router-dom'
import Home from "./pages/Home"
// import BookList from './pages/BookList'
// import Book from './pages/Book'
// import NewBook from './pages/NewBook'
// import BookLayout from './BookLayout'
import NotFound from './pages/NotFound'
import BookRoutes from './BookRoutes'
import "./style.css"

function App() {
 const location = useLocation()
  return (
    <>
    {/* <Routes location="/books" >
        <Route path="/books" element={<h1>Extra Content</h1>} />
    </Routes> */}
      <nav>
        <ul>
          <li>
            {/* we can apply style as a NavLink property by making a function or inside a function but by default isActive is applied we can make style.css to apply it */}
            <NavLink 
            // style={({isActive})=>{ return isActive ? {color: "red"} : {}} } 
            to="/" state="Hi">Home</NavLink>
          </li>
          <li>
            <NavLink end to="/books">Books</NavLink>
            {/* end = doesnot allows the isActive to Books children */}
          </li>
        </ul>
      </nav>
        {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  NESTED ROUTE  if remove the parent route path then the element will be considered as the parent path*/}
        <Route path='/books/*' element={<BookRoutes />}/>
            {/* <Route index element={<BookList />}/>
            <Route path=":id" element={<Book />}/>
            <Route path="new" element={<NewBook/>}/>
        </Route> */}
        
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook/>}/> */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <h1>Hello</h1>
    </>)
}
export default App
