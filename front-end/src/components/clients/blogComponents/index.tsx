import React from "react";
import { BlogStyled } from "./styles/BlogStyle";
import Container from "../Container";
import CardBlog from "../CardBlog";

const BlogComponents = () => {
  return (
    <BlogStyled>
      <Container>
        <div className='cards'>
          {Array.from({ length: 6 }).map((item: any, key: number) => (
            <CardBlog
              newBlog={false}
              image='/images/blog.jpg'
              title="Koudetat à la Maison #1 (L'intégrale)"
              description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
              date='22 April 2021'
              totalComment={10}
              tags={[
                { text: "Google", href: "google.com.vn" },
                { text: "Trending", href: "/" },
                { text: "New", href: "/" },
              ]}
              href='/'
              key={key}
            />
          ))}
        </div>
      </Container>
    </BlogStyled>
  );
};

export default BlogComponents;
