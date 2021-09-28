import styled from 'styled-components'
import { BiCheck } from 'react-icons/bi'

export const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: -10rem;

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      color: var(--background-light);
      letter-spacing: 0.7rem;
    }
  }

  input {
    margin-top: 1.2rem;
    padding-left: 2rem;

    color: hsl(236, 9%, 61%);
    font-size: 1rem;

    width: 100%;
    height: 3rem;

    border-radius: 0.5rem;
    outline: none;
    border: 0;
  }
`

export const Task = styled.main`
  width: 40%;
  margin: 0 auto;
  margin-top: 2rem;

  ul {
    list-style: none;
    width: 100%;
    background-color: var(--background-light);
    border-radius: 0.5rem;

    li {
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
    }

    li.funcionalidades {
      display: flex;
      height: 3rem;
      align-items: center;
      justify-content: space-between;
      margin-left: 1rem;
      margin-right: 1rem;
      color: hsl(236, 9%, 61%);

      a:hover {
        color: hsl(220, 98%, 61%);
        border: 1px solid hsl(220, 98%, 61%);
        border-radius: 1rem;
        padding: 0.5rem;
      }
    }
  }
`
