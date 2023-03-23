import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Press Start 2P";
  width: 100vw;
  height: 5rem;
  z-index: 5;
  position: fixed;
  top: 0;
  /* degrade del nav  */
  background: linear-gradient(to bottom, #040207, rgba(15, 20, 36, 0));
  .icon {
    visibility: hidden;
    position: absolute;
    color: white;
  }
  .divOpciones {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 15px;
    /* position: relative; */
    .opciones {
      margin: 0;
      color: white;
      font-size: 0.5rem;
      cursor: pointer;
      transition: color 0.3s linear 0.2s;
      text-decoration: none;
      &:hover {
        color: #bbef55;
      }
    }
  }
  .divImg {
    position: relative;
    height: 100%;
    & img {
      z-index: -1;
      height: 100%;
      opacity: 1;
      cursor: pointer;
    }
  }
  .divRelleno {
    position: relative;
    color: white;
    visibility: hidden;
    display: flex;
    width: 270px;
    /* margin-right: 15px; */
  }
  @media screen and (max-width: 1000px) {
    flex-direction: row-reverse;
    background: linear-gradient(
        to top,
        rgba(13, 17, 31, 0.9) 50%,
        rgba(18, 26, 46, 0.9) ,
        rgba(23, 33, 62, 0.9) ,
        rgba(29, 41, 79, 0.9) ,
        rgba(36, 49, 96, 0.9)
      ),
      radial-gradient(circle, #040207, rgba(15, 20, 36, 0) 70%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .icon {
      color: white;
      visibility: visible;
      position: absolute;
      right: 5%;
      font-size: 2.5rem;
      transition: color 0.2s linear 0.2s;
      &:hover {
        /* color: #bbef55; */
        color: #A7B841;
        ~ .divOpciones {
          visibility: visible;
        }
      }
    }
    .active {
      /* color: #bbef55; */
      color: #A7B841;
    }
    .divOpciones {
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      transition: visibility 0.4s linear 0.2s;
      visibility: hidden;
      top: 100%;
      padding: 1rem 2.5rem 1rem 2.5rem;
      border-radius: 0 0 10px 10px;
      right: 0%;
      z-index: 6;
      background-image: linear-gradient(
        to top,
        rgba(36, 49, 96, 0.9),
        rgba(29, 41, 79, 0.9),
        rgba(23, 33, 62, 0.9),
        rgba(18, 26, 46, 0.9),
        rgba(13, 17, 31, 0.9)
      );
      .opciones{
        &:hover{
          color: #A7B841;
        }
      }
      &:hover {
        visibility: visible;
      }
    }
    .divImg {
      height: 80%;
      position: absolute;
      left: 4%;
    }
  }
`;
