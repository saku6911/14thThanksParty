import React from 'react';
import type { FC } from "react";
import * as css from "./styles.module.scss";
import Img from "next/image";

export const Failed: FC = () => {
  return (
    <main className={css.main}>
        <div className={css.wrap}>
      <h1 className={css.title}>Incorrect...</h1>
      <Img
	 src="/images/Failed.webp"
	alt="不正解の図"
    width={300}
    height={400}
    className={css.img}
	/>
      <p className={css.text}>不正解です....</p>
      <p className={css.text}>諦めずに頑張って！</p>
      </div>
    </main>
  );
};

