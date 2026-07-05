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
        <Container>
            <Progress>{current + 1} / {questionList.length}</Progress>
                <QuestionCard>
                    <QuestionText>{question?.question}</QuestionText>
                    <AnswerList>
                        {question?.answers.map((answer) => (
                            <AnswerButton
                                key={answer}
                                onClick={() => selectAnswer(answer)}
                            >
                                {answer}
                            </AnswerButton>
                        ))}
                    </AnswerList>
                </QuestionCard>
        </Container>
  );

}

export default Quiz;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 600px;
  max-width: 90%;
  margin: 20px;
`;

const Progress = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #75b5f5;
`;

const QuestionCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const QuestionText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #535353;
  text-align: center;
`;

const AnswerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const AnswerButton = styled.button`
  width: 90%;
  padding: 16px;
  font-size: 17px;
  border: 2px solid #ddd;
  background-color: white;
  color: #535353;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #75b5f5;
    background-color: #f0f8ff;
  }
`;