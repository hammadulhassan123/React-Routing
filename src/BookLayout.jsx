import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export default function BookLayout () {

  const [searchParams, setSearchParams]= useSearchParams ({n:3})
  const number = searchParams.get("n")
  return (
    <>
    <Link to="/books/1">Book1</Link>
    <br />
    <Link to="/books/2">Book2</Link>
    <br />
    <Link to={`/books/${number}`}>Book {number}</Link>
    <br />
    <Link to="/books/new">New Books</Link>
    <br />
    <Outlet context={{hello: "World"}}/>
    {/* The val inside context can be accessed by any single component*/}
    <input
      type="number"
      value={number}
      onChange={ e => setSearchParams({ n: e.target.value})}
    />
    </>
  )
}