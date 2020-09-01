import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType } from '../types';

import { Layout, SEO } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const PrijzenPage = ({ translations, pics, seo }: PrijzenPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="prijzen">
            <Main>
              <SEO seo={seo}></SEO>
              <h1>Prijzen</h1>
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main`
  margin-top:4rem;
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
type PrijzenPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};
export default PrijzenPage;

