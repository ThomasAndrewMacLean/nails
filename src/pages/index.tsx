import React, { useEffect } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import {
  T,
  Products,
  Afspraak,
  Layout,
  Button,
  SEO,
  FullWidthContainer,
  InnerContainer,
  HeroImage,
} from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import { TranslationsType, ImagesType, SEOType } from '../types';

const IndexPage = ({ translations, pics, seo }: IndexPageProps) => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head!.appendChild(script);
  }, []);
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="home">
            <Main>
              <SEO seo={seo}></SEO>
              <FullWidthContainer
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
                  <p>
                    <T translationKey="introTekst" />
                  </p>
                  <Button style={{ marginTop: '2rem' }} href="#maak-afspraak">
                    maak afspraak
                  </Button>
                </InnerContainer>
              </FullWidthContainer>

              <HeroImage></HeroImage>

              <Products></Products>
              {/* <Image style={{ width: '100%' }} imageKey="hero-image"></Image> */}

              <Afspraak></Afspraak>
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
