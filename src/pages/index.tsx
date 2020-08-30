import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import {
  Home,
  T,
  Layout,
  Button,
  SEO,
  FullWidthContainer,
} from '../components';
import { InnerContainer } from '../styles/container';
import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import { TranslationsType, ImagesType, SEOType } from '../types';

const IndexPage = ({ translations, pics, seo }: IndexPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="home">
            <Main>
              <SEO seo={seo}></SEO>
              {/* <FullWidthContainer
                style={{
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  marginBottom: '8rem',
                  marginTop: '6rem',
                  padding: '4rem',
                }}
                backgroundColor="var(--background-light)"
                textColor="var(--text-grey)"
              >
                <InnerContainer>
                  <T translationKey="introText" />

                  <Button style={{ marginTop: '2rem' }} href="#maak-afspraak">
                    maak afspraak
                  </Button>
                </InnerContainer>
              </FullWidthContainer> */}
              <Home></Home>
              {/* <HeroImage></HeroImage> */}

              {/* <Products></Products> */}
              {/* <Image style={{ width: '100%' }} imageKey="hero-image"></Image> */}

              {/* <Afspraak></Afspraak> */}
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main``;

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

type IndexPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};

export default IndexPage;
