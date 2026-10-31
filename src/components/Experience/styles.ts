import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .education-title{
    margin-top: 6rem;
  }

  .timeline{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .job{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      color: #FFF;

      header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .company{
        margin-top: 0.4rem;
        color: var(--green);
      }

      .period{
        flex-shrink: 0;
        font-size: 1.4rem;
        opacity: 0.6;
      }

      ul{
        padding-left: 2rem;
      }

      li{
        list-style: disc;
        letter-spacing: 0.12rem;
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 740px){
    .timeline .job header{
      flex-direction: column;
      gap: 0.8rem;
    }
  }
`
