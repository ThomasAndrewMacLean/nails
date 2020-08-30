import styled from 'styled-components';

export const HomeWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 8rem;
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 50px;
    grid-template-areas: 'wie verzorging verzorging verzorging' 'wie verzorging verzorging verzorging' 'afspraak afspraak slogan slogan' 'producten producten producten prijslijst' 'producten producten producten prijslijst';
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
      padding: 1rem 0;
    }
  }

  .wie {
    grid-area: wie;
    line-height: 1.6rem;
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
    background: var(--background-light);
    grid-area: slogan;
    color: var(--background-dark);
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      color: var(--background-highlight);
      text-transform: uppercase;
    }
  }

  .producten {
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
      padding: 1rem 0;
    }
  }

  .prijslijst {
    grid-area: prijslijst;

    button {
      display: block;
      width: 100%;
      border-radius: 0;
      background: var(--background-highlight);
      color: white;
      padding: 1rem 0;
    }
  }
`;
