import styles from "./index.module.css";

export const canvas = document.createElement("canvas");
canvas.className = styles.canvas;

export const ctx = canvas.getContext("2d");
