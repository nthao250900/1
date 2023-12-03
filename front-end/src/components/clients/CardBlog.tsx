import React from "react";
import { CardBlogStyled } from "./styles/CardBlogStyle";
import { Link } from "react-router-dom";

type Props = {
  newBlog: boolean;
  image: string;
  title: string;
  description: string;
  date: string;
  totalComment: number;
  tags: {
    text: string;
    href: string;
  }[];
  href: string;
  key: number | string;
};

const CardBlog = ({
  newBlog,
  image,
  title,
  description,
  date,
  totalComment,
  tags,
  href,
  key,
}: Props) => {
  const [activeTags, setActiveTags] = React.useState<number>(0);
  return (
    <CardBlogStyled>
      <div className='item' key={key}>
        <div className='new'>
          <p>new</p>
        </div>
        <div className='image'>
          <img src={image} alt={title} />
        </div>
        <div className='content'>
          <div className='tags'>
            <ul>
              {tags?.map(
                (
                  tag: {
                    text: string;
                    href: string;
                  },
                  keyTag: number
                ) => (
                  <li
                    key={keyTag}
                    onClick={() => setActiveTags(keyTag)}
                    className={keyTag === activeTags ? "active" : ""}
                  >
                    <Link to={tag.href}>{tag.text}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className='title'>
            <h4>{title}</h4>
          </div>
          <div className='description'>
            <p>{description}</p>
          </div>
          <div className='date_comment'>
            <div className='date_comment__item'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
              >
                <path
                  d='M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66668C2.54278 5.37113 5.20379 2.71011 8.49934 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 4.00001C5.93612 4.03376 3.86642 6.10346 3.83268 8.66668C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66668C13.1323 6.10346 11.0626 4.03376 8.49934 4.00001ZM11.8327 9.33334H7.83268V5.33334H9.16601V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97068 4.47201L2.02734 3.52734L4.02134 1.52734L4.96468 2.47201L2.97201 4.47201H2.97068Z'
                  fill='#23A6F0'
                />
              </svg>
              <p>{date}</p>
            </div>
            <div className='date_comment__item'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
              >
                <g clip-path='url(#clip0_3601_571)'>
                  <path
                    d='M16.3333 13.8333H2V0.833293C2 0.741626 1.925 0.666626 1.83333 0.666626H0.666667C0.575 0.666626 0.5 0.741626 0.5 0.833293V15.1666C0.5 15.2583 0.575 15.3333 0.666667 15.3333H16.3333C16.425 15.3333 16.5 15.2583 16.5 15.1666V14C16.5 13.9083 16.425 13.8333 16.3333 13.8333ZM3.5 12.5H14.6667C14.7583 12.5 14.8333 12.425 14.8333 12.3333V3.24996C14.8333 3.09996 14.6521 3.02704 14.5479 3.13121L10.1667 7.51246L7.55417 4.92913C7.52284 4.89811 7.48054 4.88071 7.43646 4.88071C7.39238 4.88071 7.35007 4.89811 7.31875 4.92913L3.38125 8.87913C3.36596 8.89445 3.35385 8.91264 3.34562 8.93267C3.3374 8.95269 3.33322 8.97415 3.33333 8.99579V12.3333C3.33333 12.425 3.40833 12.5 3.5 12.5Z'
                    fill='#23856D'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3601_571'>
                    <rect
                      width='16'
                      height='14.6667'
                      fill='white'
                      transform='translate(0.5 0.666626)'
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>{totalComment} comments</p>
            </div>
          </div>
          <div className='button'>
            <Link to={href} className='link'>
              Learn More{" "}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='10'
                height='16'
                viewBox='0 0 10 16'
                fill='none'
              >
                <g clip-path='url(#clip0_3601_576)'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z'
                    fill='#23A6F0'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3601_576'>
                    <rect
                      width='9'
                      height='16'
                      fill='white'
                      transform='translate(0.5)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </CardBlogStyled>
  );
};

export default CardBlog;
