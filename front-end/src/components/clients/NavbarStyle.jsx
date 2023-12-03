import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const StyleNavbar = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Colors.secondaryColor1};
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${Colors.white};
    padding: 0 24px;
    p {
      margin: 0;
      padding: 0;
    }
    &__left {
      display: flex;
      align-items: center;
      gap: 10px;
      width: calc(100% / 3);
      .item {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 14px 10px;
      }
    }
    &__center {
      width: calc(100% / 3);
      text-align: center;
    }
    &__right {
      width: calc(100% / 3);
      ul {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 5px;
        margin-bottom: 0 !important;
        i {
          padding: 5px;
        }
      }
    }
  }
  .navbar {
    width: 100%;
    background-color: ${Colors.white};
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    gap: 40px;
    .logo {
      width: 20%;
      font-size: 24px;
      text-align: center;
      letter-spacing: 0.1px;
      line-height: 32px;
      font-weight: 600;
      h1 {
        padding: 0 !important;
        margin: 0 !important;
      }
    }
    .menu {
      width: calc(60% - 40px);
      display: flex;
      justify-content: start;
      .nav {
        padding: 0;
        margin: 0;
        list-style: none;
        color: ${Colors.dark};
        gap: 15px;
        justify-content: flex-start !important;
        align-items: center;
        display: flex !important;

        &__item {
          /* &:hover { */
          position: relative;
          z-index: 99;

          a {
            display: block;
            position: relative;
            z-index: 1;
            text-decoration: none;
            font-size: 16px;
            color: ${Colors.dark};
            margin: 0;
            text-transform: uppercase;
            &::after {
              position: absolute;
              content: "";
              width: 0;
              bottom: 0;
              left: 0;
              height: 1px;
              background: #23a6f0;
              transition: all 0.5s;
            }
            &:hover {
              text-decoration: none !important;
            }
          }
          .transition {
            transition: 0.3s ease-out;
            &:hover {
              text-decoration: none !important;
            }
          }
          &:hover,
          &.active {
            a {
              color: #23a6f0;
            }
            > a:after {
              width: 100%;
            }
          }
        }
        .menu__line {
          position: static !important;

          &:hover .sub {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          .sub {
            display: block;
            position: absolute;
            top: 90px;
            background-color: ${Colors.lightGray1};
            visibility: hidden;
            opacity: 0;
            transition: all 0.5s ease;
            transform: translateY(-20px);
            border-radius: 5px;
            &__ctt {
              padding: 5px 0px;
              background: ${Colors.mainColor};
            }
            &__item {
              width: 100%;
              &-list {
                width: 100%;
                padding: 0px;
                margin: 0;
                list-style: none;
                text-transform: uppercase;
                li {
                  position: relative;
                  z-index: 99;
                  float: none !important;
                  padding: 0 !important;
                  display: list-item;
                  text-transform: uppercase;
                  text-align: -webkit-match-parent;
                  & > a {
                    display: block;
                    position: relative;
                    z-index: 1;
                    padding: 10px 20px;
                    font-weight: 500;
                    color: ${Colors.dark};
                    text-transform: none !important;
                    font-size: 13px !important;
                    text-transform: uppercase !important;
                    transition: all 0.4s ease;
                    &:hover {
                      color: #23a6f0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .user {
      display: flex;
      align-items: center;
      width: 20%;
      &__item {
        padding-left: 15px;
        color: #23a6f0;
        .information {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          cursor: pointer;
        }
        &.cart,
        &.wishlist {
          display: flex;
          align-items: center;
          gap: 5px;
          justify-content: center;
          transition: all 0.4s ease;
          &:hover {
            color: ${Colors.textColor};
          }
          .badge {
            margin-bottom: 4px;
          }
        }
        &.search {
          cursor: pointer;
          transition: all 0.4s ease;
          &:hover {
            color: ${Colors.textColor};
          }
        }
        &.sign-in {
          font-size: 14px;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0.2px;
          a {
            transition: all 0.4s ease;
            &:hover {
              color: ${Colors.textColor};
            }
          }
          i {
            margin-right: 5px;
          }
        }
      }
    }
    .mobile {
      display: none;
    }
  }
  @media ${MaxScreenDevice.laptop} {
    .header {
      &__left {
        .item {
          &.phone,
          &.email {
            p {
              display: none;
            }
          }
        }
      }
    }
    .navbar {
      .user {
        width: 40%;
      }
    }
  }
  /* Mobile M */

  @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.tablet_800}) {
    .header {
      display: none;
    }
    .navbar {
      padding: 12px 10px;
      .logo {
        font-size: 20px;
        width: 50%;
        text-align: start;
      }
      .menu,
      .user {
        display: none;
      }
      .mobile {
        display: flex;
        align-items: center;
        gap: 24px;
        i {
          font-size: 20px;
          cursor: pointer;
          &:hover {
            color: ${Colors.primaryTextColor};
          }
        }
      }
    }
  }
`;
