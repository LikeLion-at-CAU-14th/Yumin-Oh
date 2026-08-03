import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = "https://week12-api-rcwo.onrender.com";

const Quiz = () => {
    const [questionList, setQuestionList] = useState([]);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${BASE_URL}/api/questions`);
            setQuestionList(response.data);
        };
        fetchData();
    }, []);

    const selectAnswer = async(answer) => {
        const question = questionList[current];
        const updated = { ...answers, [question.id]: answer };
        setAnswers(updated);

        if(current < questionList.length - 1) {
            setCurrent(current + 1);
        } else {
            await submitAnswers(updated);
        }

    }

    const submitAnswers = async(finalAnswers) => {
        const submitData = questionList.map((question) => {
            return { id: question.id, answer: finalAnswers[question.id]};
        });

        const response = await axios.post(`${BASE_URL}/api/answers`, { answers: submitData });

        const correctAnswers = response.data.results.filter((result) => {
            return result.correct;
        });

        const score = correctAnswers.length;
        navigate(`/score?score=${score}`);
    };

    const question = questionList[current];
    return (
        <div className="flex flex-col items-center g-6 w-[600px] max-w-[90%]m-5">
            <div className="text-xl font-bold text-[#75b5f5]">{current + 1} / {questionList.length}</div>
                <div className="w-full bg-white px-[30px] py-10 rounded-2xl shadow-[2px_2px_10px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-[30px]">
                    <div className="text-2xl font-semibold text-[#535353] text-center">{question?.question}</div>
                    <div className="flex flex-col gap-3 w-full">
                        {question?.answers.map((answer) => (
                            <button className="w-[90%] p-4 text-[17px] border-2 border-[#ddd] bg-white text-[#535353] rounded-xl cursor-pointer transition-all duration-200 hover:border-[#75b5f5] hover:bg-[#f0f8ff] mx-auto"
                                key={answer}
                                onClick={() => selectAnswer(answer)}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>
                </div>
        </div>
  );

}

export default Quiz;
