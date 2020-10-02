import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType } from '../types';

import { Layout, SEO, Verzorgingen, T } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const VerzorgingenPage = ({
  translations,
  pics,
  seo,
}: VerzorgingenPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="verzorgingen">
            <Main className="verzorgingen">
              <SEO seo={seo}></SEO>
              <div className="titleWrap">
                <div className="wrap">
                  <h1>
                    <T translationKey="verzorgingenTitle" />
                  </h1>
                  <h4>
                    <T translationKey="verzorgingenSubTitle" />
                  </h4>
                </div>
                <ul>
                  <li>
                    <a href="#manicure">
                      <T translationKey="manicureTitle" />
                    </a>
                  </li>
                  <li>
                    <a href="#gelnagels">
                      <T translationKey="gelnagelsTitle" />
                    </a>
                  </li>
                  <li>
                    <a href="#lakken">
                      <T translationKey="lakkenTitle" />
                    </a>
                  </li>
                  <li>
                    <a href="#gellak">
                      <T translationKey="gellakTitle" />
                    </a>
                  </li>
                </ul>
              </div>
              <Verzorgingen></Verzorgingen>
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main`
  margin-top: 8rem;

  .titleWrap {
    margin-bottom: -16rem;
    display: flex;
    justify-content: space-between;
    width: 50%;
    transform: translateX(100%);
    align-items: flex-end;
    @media (max-width: 1000px) {
      transform: translateX(0);
    }

    h1 {
      padding-bottom: 10px;

      padding-left: 1rem;
      font-size: 1.4rem;
    }
    h4 {
      margin-bottom: 2rem;

      padding-left: 1rem;
      font-size: 1rem;
    }
    ul {
      list-style: none;
      text-align: right;
      font-size: 1.2rem;
      a {
        color: inherit;
        text-decoration: none;
      }
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
type VerzorgingenPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};
export default VerzorgingenPage;
