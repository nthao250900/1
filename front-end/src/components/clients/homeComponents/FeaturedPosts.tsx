import React from "react";
import { FeaturedPostsStyle } from "../styleComponents/FeaturedPostsStyle";
import Container from "../Container";
import { Link, NavLink } from "react-router-dom";
import TopSession from "./TopSession";
const dataFeaturedPosts = [
  {
    link: [{ text: "Practice Advice", url: "#" }],
    heading: undefined,
    title: "Featured Posts",
    description: undefined,
    content: [
      {
        image: "post-1.png",
        link: [
          {
            url: "#",
            text: "English Department",
          },
        ],
        heading: undefined,
        title: "Graphic Design",
        description:
          "We focus on ergonomics and meeting you where you work. It's sonly a keystroke away.",
        oldPrice: "16.48",
        newPrice: "6.48",
        colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
        textButton: "Learn More",
        url: "",
      },
      {
        image: "post-2.png",
        link: [
          {
            url: "#",
            text: "English Department",
          },
        ],
        heading: undefined,
        title: "Graphic Design",
        description:
          "We focus on ergonomics and meeting you where you work. It's sonly a keystroke away.",
        oldPrice: "16.48",
        newPrice: "6.48",
        colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
        textButton: "Learn More",
        url: "",
      },
    ],
  },
];

const FeaturedPosts = () => {
  return (
    <FeaturedPostsStyle>
      <Container>
        <TopSession
          link={dataFeaturedPosts?.[0]?.link}
          heading={dataFeaturedPosts?.[0]?.heading}
          title={dataFeaturedPosts?.[0]?.title}
          description={dataFeaturedPosts?.[0]?.description}
        />
        <div className='content'>
          <div className='cards'>
            {dataFeaturedPosts?.[0]?.content?.map(
              (
                item: {
                  image: string;
                  link:
                    | {
                        url: string;
                        text: string;
                      }[]
                    | undefined;
                  heading: string | undefined;
                  title: string | undefined;
                  description: string | undefined;
                  oldPrice: string;
                  newPrice: string;
                  colors: string[];
                  textButton: string;
                  url: string;
                },
                key: number
              ) => (
                <div className='item' key={key}>
                  <div className='item__image'>
                    <img src={`/images/${item.image}`} alt={item.title} />
                  </div>
                  <div className='item__content'>
                    <div className='link'>
                      <Link
                        to={`${item?.link?.[0]?.url}`}
                        className='link__tag'
                      >
                        {item?.link?.[0]?.text}
                      </Link>
                    </div>
                    <div className='heading'>
                      <h3>{item?.heading}</h3>
                    </div>
                    <div className='title'>
                      <h2>{item?.title}</h2>
                    </div>
                    <div className='description'>
                      <p>{item?.description}</p>
                    </div>
                    <div className='price'>
                      <del className='price__old'>{item?.oldPrice}</del>
                      <p className='price__new'>{item?.newPrice}</p>
                    </div>
                    <div className='colors'>
                      <ul>
                        {item?.colors?.map(
                          (color: string, colorIndex: number) => (
                            <li
                              style={{
                                backgroundColor: color,
                              }}
                              key={colorIndex}
                            />
                          )
                        )}
                      </ul>
                    </div>
                    <div className='button'>
                      <a href={item.url}>{item.textButton}</a>
                      <i className='fa-solid fa-angle-right'></i>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </FeaturedPostsStyle>
  );
};

export default FeaturedPosts;
