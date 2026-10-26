import Image from "next/image";
import styles from "./page.module.css";
fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts`);

export default function Home() {
  return (
    <main>
      <h1>HALLØJ HALLI HALLO</h1>
      <p>Det bliver sjovt det her</p>
    </main>
  );
}
