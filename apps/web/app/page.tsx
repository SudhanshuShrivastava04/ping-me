"use client";
import { FC } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";

interface pageProps {}

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

const page: FC<pageProps> = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <Image
                alt="Turborepo"
                height={614}
                src="circles.svg"
                width={614}
                style={{ pointerEvents: "none" }}
              />
            </div>
            <div className={styles.logoGradientContainer}>
              <Gradient className={styles.logoGradient} conic small />
            </div>

            <div className={styles.grid}>
              <Card className={styles.card} title="" href="null">
                <input />
                <button className={styles.button}>Send</button>
              </Card>
            </div>
          </div>
          <Gradient className={styles.backgroundGradient} conic />
          <h1 className="">Ping Me</h1>
        </div>
      </div>
    </main>
  );
};

export default page;
