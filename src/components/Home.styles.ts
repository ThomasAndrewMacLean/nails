import styled from 'styled-components';

export const HomeWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 0rem;
  .grid-container {
    margin-bottom: 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.2fr 1fr 1fr;
    gap: 50px;
    grid-template-areas: 'wie wie verzorging verzorging' 'wie wie verzorging verzorging' 'producten producten producten slogan' 'producten producten producten prijslijst';
  }

  .verzorging {
    grid-area: verzorging;

    img {
      width: 100%;
      display: block;
    }
    button {
      display: block;
      width: 100%;
      border-radius: 0;
      background: var(--background-dark);
      color: white;
      text-align: right;
      padding: 1rem 0;
      padding-right: 4rem;
    }
  }

  .wie {
    grid-area: wie;
    line-height: 2rem;
    margin-top: -9px;
    text-align: right;

    button {
      display: block;
      width: 75%;
      border-radius: 0;
      background: var(--background-highlight);
      color: white;
      padding: 1rem 0;
      float: right;
    }
  }

  .afspraak {
    grid-area: afspraak;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      display: block;
      width: 100%;
      border-radius: 0;
      background: var(--background-highlight);
      color: white;
      padding: 1rem 0;
    }
  }

  .slogan {
    grid-area: slogan;
    color: var(--background-dark);
    font-size: 2rem;
    display: flex;
    text-align: right;
    line-height: 3rem;
    align-items: flex-end;
    flex-direction: column;
    strong {
      color: var(--background-highlight);
      text-transform: uppercase;
    }
  }

  .producten {
    margin-top: 3rem;
    grid-area: producten;
    img {
      width: 100%;
      display: block;
    }
    button {
      display: block;
      width: 100%;
      border-radius: 0;
      background: var(--background-light);
      color: var(--background-dark);
      text-align: right;
      padding: 1rem 0;
      padding-right: 4rem;
    }
  }

  .prijslijst {
    grid-area: prijslijst;

    button {
      display: block;
      width: 100%;
      border-radius: 0;
      /* background: var(--background-light); */
      color: var(--background-dark);
      //padding: 1rem 0;
    }
  }
`;
