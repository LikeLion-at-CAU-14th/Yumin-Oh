import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios';

export const BookList = () => {
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    }

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get("/databases/books.json");
            setBooks(response.data);
        }
        fetchBooks();
    }, [])


  return (
    <div className="flex justify-start items-center gap-5 w-full h-[80vh] m-5">
        <div className="flex flex-col justify-start bg-white p-[50px] h-4/5 rounded-r-[10px] shadow-[2px_2px_5px_rgba(0,0,0,0.1)]">
            <div onClick={goHome} className="text-[40px] text-[#535353] font-bold cursor-pointer">🏠</div>
            <div className="text-4xl text-[#535353] font-bold">Book List</div>
            <ul>
                {books.map((book) => (
                    <Link key={book.id} to={`/books/${book.id}`}>
                        <li>{book.title}</li>
                    </Link>
                ))}

            </ul>
        </div>
        <div className="flex flex-col justify-start items-center p-[50px] h-full rounded-r-[10px] mt-[100px]">
            <Outlet />
        </div>
    </div>
  )
}

export default BookList;

