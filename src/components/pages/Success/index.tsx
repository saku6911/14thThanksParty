import React from 'react';
import type { FC } from "react";
import * as css from "./styles.module.scss";
import Img from "next/image";

export const Success: FC = () => {
  return (
    <main className={css.main}>
        <div className={css.wrap}>
      <h1 className={css.title}><span>CONGRATULATIONS!</span></h1>
      <Img
	 src="/images/Success.webp"
	alt="正解の図"
    width={300}
    height={300}
    className={css.img}
	/>
      <p className={css.text}>正解です！おめでとうございます！</p>
      <p className={css.text}>キーホルダーは本社の執務室にある一番右の本棚、下段の棚（扉付き）一段目、パンデミックの左隣にあります！</p>
      </div>
    </main>
  );
};

