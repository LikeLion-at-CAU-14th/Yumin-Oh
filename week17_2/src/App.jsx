import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookList from './pages/BookList';
import Home from './pages/Home';
import { BookDetail } from './pages/BookDetail';
import Quiz from './pages/Quiz';
import Score from './pages/Score';


const App = () => {
  return (
    <div className="flex w-full min-h-[95vh] flex-col justify-center items-center gap-[30px]">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />}>
          <Route path=':id' element={<BookDetail />} />
        </Route>
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/score' element={<Score />} />
      </Routes>
      
    </div>
  )
}

export default App;
