import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = "https://week12-api-rcwo.onrender.com";

const Score = () => {
    const [searchParams] = useSearchParams();
    const score = searchParams.get("score");

    const [result, setResult] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchResult = async() => {
            const response = await axios.get(`${BASE_URL}/api/result?score=${score}`);
            setResult(response.data);
        }
        fetchResult();
    }, [score])


   return (
        <div className="flex flex-col items-center gap-5 bg-white p-[50px] rounded-2xl shadow-[2px_2px_10px_rgba(0,0,0,0.1)] m-5">
            <div className="text-[32px] text-[#535353] font-bold">결과!</div>
            <div className="text-[48px] font-extrabold text-[#75b5f5]">{result?.score} / 5</div>
            <div className="text-[22px] text-[#555] text-center">{result?.message}</div>
            <div className="flex gap-3 mt-[10px]">
                <button
                    onClick={() => navigate("/quiz")}
                    className="px-6 py-[10px] text-base font-semibold text-[#4a4a4a] bg-[#e2f5fb] border-none rounded-[20px] cursor-pointer"
                >
                    재도전
                </button>
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-[10px] text-base font-semibold text-[#4a4a4a] bg-[#e2f5fb] border-none rounded-[20px] cursor-pointer"
                >
                    홈으로
                </button>
            </div>
        </div>
    );
}


export default Score

