import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const BookDetail = () => {
    const params = useParams();
    const id = params.id;

    const [books, setBooks] = useState([]);

    useEffect(() => {
            const fetchBooks = async () => {
                const response = await axios.get("/databases/books.json");
                setBooks(response.data);
            }
            fetchBooks();
    }, [])

    const book = books.find((b) => b.id === parseInt(id));

    const [likes, setLikes] = useState(0);

    const updateLikes = () => {
        setLikes(likes + 1);
    };

    useEffect(() => {
        setLikes(0);
    }, [id])

    if (!book) {
        return <div>찾는 책이 없습니다.</div>;
    }


  return (
    <div>
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <h3 className="text-lg font-semibold mt-2">{book.author}</h3>
        <p className="mt-4">{book.description}</p>
        <button onClick={updateLikes} className="bg-[#75b5f5] text-white border-none rounded-[25px] px-[15px] py-[5px] ext-baste cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-[#9ecfff] active:bg-[#3d9dfd] mt-4">
            <span className="mr-2 text-xl">👍</span> {likes}
        </button>
        
    </div>
  )
}

export default BookDetail;
