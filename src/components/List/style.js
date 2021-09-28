import styled from 'styled-components'

export const Container = styled.li`
  & + li {
    border-top: 1px solid hsl(236, 9%, 61%);
  }

  p {
    color: hsl(236, 9%, 61%);
  }

  label {
    display: flex;
    align-items: center;
    height: 3rem;
    margin: 0 1rem;

    input[type='checkbox'] {
      appearance: none;
      border: 3px solid hsl(236, 9%, 61%);
      border-color: hsl(192, 100%, 67%) hsl(280, 87%, 65%);
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 1rem;
      margin-right: 1rem;
      position: relative;
    }

    a.Close {
      margin-right: 1rem;
      margin-left: 60%;
      cursor: pointer;
    }

    input[type='checkbox']:checked {
      background: linear-gradient(
        45deg,
        hsl(192, 100%, 67%) 0%,
        hsl(280, 87%, 65%) 100%
      );

      &::before {
        content: '🗸';
        position: absolute;
        border-radius: 50%;
        color: white;
        font-size: 1.9rem;
        bottom: -0.7rem;
        left: -0.2rem;
      }

      & + p {
        text-decoration: line-through;
      }
    }
  }
`
