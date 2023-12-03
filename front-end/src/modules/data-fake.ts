import { TypeDataTabs } from "types/Types";

export const dataNavbar = [
  {
    title: "Home",
    path: "/",
    id: 1,
    subMenu: null,
  },
  {
    title: "Shop",
    path: "/shop",
    id: 2,
    subMenu: null,
    // [
    //   {
    //     title: "Shop 1",
    //     path: "/shop",
    //     id: 20,
    //     subMenu: null,
    //   },
    //   {
    //     title: "Shop 2",
    //     path: "",
    //     id: 21,
    //     subMenu: null,
    //   },
    // ],
  },
  {
    title: "About",
    path: "/about",
    id: 3,
    subMenu: null,
  },
  {
    title: "Blog",
    path: "/blog",
    id: 4,
    subMenu: null,
  },
  {
    title: "Contact",
    path: "/contact",
    id: 5,
    subMenu: null,
  },
];

// tabs content
export const DataContentTabs_Description = [
  {
    className: "card",
    content: [
      {
        type: "image",

        src: "/images/description-1.jpg",
      },
      {
        type: "list",
        content: [
          {
            type: "text",
            title: "the quick fox jumps over",
            text: `<h6>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
<br></br>
Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
<br></br>
Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </h6>`,
          },
        ],
      },
      {
        type: "list",
        content: [
          {
            type: "collapse",
            title: "The quick fox jumps over1",
            collapse: [
              {
                key: 1,
                label: "The quick fox jumps over the lazy dog",
                children: `
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.1
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                `,
              },
              {
                key: 2,
                label: "The quick fox jumps over the lazy dog",
                children: `
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.1
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                `,
              },
              {
                key: 3,
                label: "The quick fox jumps over the lazy dog",
                children: `
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.1
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                `,
              },
            ],
          },
          {
            type: "collapse",
            title: "The quick fox jumps over2",
            collapse: [
              {
                key: 1,
                label: "The quick fox jumps over the lazy dog",
                children: `
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.1
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                `,
              },
              {
                key: 2,
                label: "The quick fox jumps over the lazy dog",
                children: `
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.1
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                `,
              },
              {
                key: 3,
                label: "The quick fox jumps over the lazy dog",
                children: `
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.1
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                    <p className='text-collapse'>
                      Duis occaecat do ut veniam pariatur.2
                    </p>
                `,
              },
            ],
          },
        ],
      },
    ],
  },
];
export const DataContentTabs_Information = [
  {
    className: "text__editor",
    content: [
      {
        type: "list",
        content: [
          {
            type: "text",
            text: `
            <p>FORM DÁNG: Slim fit</p><p>THIẾT KẾ:</p><p>- Áo sơ mi dài tay phom Slim Fit ôm nhẹ vừa vặn mà vẫn thoải mái vận động</p><p>- Áo thiết kế đơn giản, tà lượn không túi, gam màu trắng đơn giản nhưng tinh tế, ấn tượng khi in họa tiết chữ cái tự hào thương hiệu, mang đến phong cách thời thượng và lịch lãm cho các quý ông.</p><p><br></p><p>CHẤT LIỆU:</p><p>- 50% Bamboo, 50% Polyester</p><p><br></p><p>MÀU SẮC: Trắng in chữ</p><p><br></p><p>SIZE: 38/39/40/41/42/43</p>
    
            `,
          },
        ],
      },
    ],
  },
];
