"use client";
import { FC, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { UseSocket } from "../context/SocketProvider";

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
  const { sendMessage, messages } = UseSocket();
  const [message, setMessage] = useState("");
  return (
    <main className={styles.main}>
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
            {messages?.map((e) => <li>{e}</li>)}

            <div className={styles.card}>
              <div className={styles.chatbox}>
                <input
                  placeholder="Ping your message here !"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className={styles.button}
                  onClick={(e) => {
                    sendMessage(message);
                    setMessage("");
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <Gradient className={styles.backgroundGradient} conic />
      </div>
    </main>
  );
};

export default page;
