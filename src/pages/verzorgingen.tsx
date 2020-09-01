import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType } from '../types';

import { Layout, SEO, Verzorgingen } from '../components';

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
            <Main>
              <SEO seo={seo}></SEO>
              <div className="titleWrap">
                <h1>Verzorgingen</h1>

                <ul>
                  <li>Manicure</li>
                  <li>Gelnagels</li>
                  <li>Lakken</li>
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
    h1 {
      padding-bottom: 24px;

      padding-left: 1rem;
      font-size: 1.4rem;
    }
    ul {
      list-style: none;
      text-align: right;
      font-size: 1.2rem;
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
