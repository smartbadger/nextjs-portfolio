import styled from "styled-components";

export const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: center;
  z-index: 10;
  bottom: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkBlue};

  .footer {
    min-height: 200px;
    &::before {
      display: block;
      content: "";
      height: 3rem;
    }
    &__social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      flex-wrap: wrap;
    }
    &__icon {
      width: 3rem;
      transition: 0.5s;
      will-change: transform;
      &:hover {
        transform: scale(1.1);
      }
    }
    &__link {
      display: inline-block;
      margin: 1rem;
      flex-basis: 3rem;
    }
    &__text {
      margin: 2rem;
      flex-basis: 100%;
      color: ${({theme}) => theme.colors.white || 'white'};
      text-align: center;
    }
  }
`;
