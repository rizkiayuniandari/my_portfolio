/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import { personal } from "@/app/data/portfolio";

const tech = ["NEXT.JS", "TYPESCRIPT", "REACT", "UI/UX", "REST API", "MQTT", "WEBSOCKET"];

export default function Hero() {
  const marquee = [...tech, ...tech];

  return (
    <>
      <div className="hero" id="home">
        <div className="blob" style={{ width: 260, height: 260, left: -80, top: 40, background: "var(--b3)" }} />
        <div className="blob" style={{ width: 200, height: 200, right: -60, bottom: 0, background: "var(--b1)", animationDelay: "2s" }} />

        <div className="rv">
          <p className="k">Front-End Developer · Web Developer · UI/UX </p>
          <h1>
            Interfaces <em>built with care</em>
          </h1>
          <p className="lead">
            Hi, I&apos;m {personal.name}. I build responsive web applications with Next.js, REST APIs, MQTT, and WebSocket.
          </p>
          <a className="btn" href="#projects">
            Projects
          </a>{" "}
          <a className="btn o" href={personal.cv} target="_blank" rel="noopener noreferrer">
            View CV
          </a>
        </div>

        <div className="art rv" style={{ "--d": ".15s" } as CSSProperties}>
          <div className="arch">
            <img src={personal.photo} alt={`Portrait of ${personal.name}`} />
          </div>

          <svg className="spin" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <circle cx="50" cy="50" r="48" fill="#6B4A3A" />
            <text fontSize="9.5" fill="#F8D5C2" letterSpacing="2">
              <textPath href="#c">FRONTEND DEV · UI/UX · WEB DEV ·</textPath>
            </text>
          </svg>

          <span className="fl glass" style={{ left: -20, bottom: 60 }}>
            Front-End Development
          </span>
          <span className="fl glass" style={{ right: -10, bottom: 10, animationDelay: "1.5s" }}>
            UI/UX
          </span>
          <span className="fl glass" style={{ right: -30, bottom: 110, animationDelay: "1.5s" }}>
            Web Development
          </span>
        </div>
      </div>

      <div className="strip glass rv">
        <div className="mq">
          {marquee.map((t, i) => (
            <span key={i}>{t} ✦</span>
          ))}
        </div>
      </div>
    </>
  );
}
