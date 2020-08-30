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

const Index2Page = ({ translations, pics, seo }: Index2PageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="index2">
            <Main>
              <SEO seo={seo}></SEO>
              <div className="grid-container">
                <div className="Wie">wie</div>
                <div className="Foto">foto</div>
                <div className="Slogan">slogan</div>
                <div className="afspraak">afspraak</div>
              </div>
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main`
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1.4fr 0.6fr;
    gap: 1px 1px;
    grid-template-areas: 'Wie Foto Foto Slogan' 'Wie Foto Foto Slogan' 'Wie afspraak afspraak Slogan';
  }

  .Wie {
    grid-area: Wie;
  }

  .Foto {
    grid-area: Foto;
  }

  .Slogan {
    grid-area: Slogan;
  }

  .afspraak {
    grid-area: afspraak;
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
type Index2PageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};
export default Index2Page;
