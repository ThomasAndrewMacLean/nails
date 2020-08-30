import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType } from '../types';

import { Layout2, SEO, Image, Button } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const LandingPage = ({ translations, pics, seo }: LandingPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout2 page="landing">
            <Main>
              <SEO seo={seo}></SEO>

              <Image imageKey="verzorging"></Image>

              <div className="wrap">
                <div className="slogan">
                  <p>remember</p>
                  <p>be proud</p>
                  <span>nails</span>
                  <p>repeat</p>
                </div>
                <div>
                  <Button href="afspraak">Maak een afspraak</Button>
                </div>
              </div>
            </Main>
          </Layout2>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main`
  .wrap {
    display: flex;
    padding-top: 8rem;
    justify-content: space-around;
  }
  height: calc(100vh - 504px);
  a {
    background: var(--background-highlight);
    padding: 1rem 3rem;
    color: white;
    font-size: 1.5rem;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: brightness(0.7);
    object-fit: cover;
  }
  .slogan {
    color: white;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: baseline;

    flex-direction: column;
    span {
      text-shadow: 0 0 99px white;
      color: var(--background-highlight);
      text-transform: uppercase;
    }
  }
`;

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return {
    props: {
      translations: data.translations.filter((x) => x.id),
      pics: data.pics.filter((x) => x.id),
      seo: data.seo.filter((x) => x.id),
    },
  };
};
type LandingPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};
export default LandingPage;
