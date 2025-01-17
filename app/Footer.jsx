"use client";
import { Footer } from "flowbite-react";

export default function Foot() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-6">
      <Footer container={true}>
        <Footer.Copyright href="/" by="Movie App" year={currentYear} />
        <Footer.LinkGroup>
          <Footer.Link
            href="https://developers.themoviedb.org/3/getting-started/introduction"
            className="mr-6"
          >
            API
          </Footer.Link>
          <Footer.Link href="https://kevinthomas.vercel.app/" className="mr-6">
            Portfolio
          </Footer.Link>
          <Footer.Link href="https://github.com/KevinThomasNY">
            Github
          </Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}
