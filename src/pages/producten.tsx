import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType } from '../types';

import { Layout, SEO, Products } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const ProductenPage = ({ translations, pics, seo }: ProductenPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="verzorgingen">
            <Main>
              <SEO seo={seo}></SEO>
              <div className="titleWrap">
                <h1>Producten</h1>
              </div>
              <Products></Products>
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
    margin-bottom: -10rem;
    display: flex;
    justify-content: space-between;
    width: 50%;
    transform: translateX(100%);
    align-items: flex-end;
    h1 {
      margin-bottom: -4rem;

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
type ProductenPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};
export default ProductenPage;
