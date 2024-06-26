import React, { useState } from 'react';
import { useRouter } from 'next/router';
import type { FC } from "react";
import * as css from "./styles.module.scss";

type Question = {
  question: string;
  correctAnswer: string;
};

const quizQuestion: Question = {
  question: "クロスワードから導き出した答えを入力せよ。（半角数字4文字）",
  correctAnswer: "9970",
};

export const Home: FC = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d{0,4}$/.test(input)) {
      setUserAnswer(input);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer === quizQuestion.correctAnswer) {
      router.push('/success');
    } else {
      router.push('/failed');
    }
  };

  return (
    <main className={css.main}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h1>{quizQuestion.question}</h1>
        <input
          className={css.input}
          type="text"
          value={userAnswer}
          onChange={handleInputChange}
          maxLength={4}
          pattern="\d{4}"
          required
        />
        <button type="submit" disabled={userAnswer.length !== 4} className={css.button}>
          送信
        </button>
      </form>
    </main>
  );
};

export default Home;
