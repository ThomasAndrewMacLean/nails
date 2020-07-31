import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType } from '../types';

import { Layout, SEO } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const AboutPage = ({ translations, pics, seo }: AboutPageProps) => {
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
          <Layout page="about">
            <Main>
              <SEO seo={seo}></SEO>
              <h1>About</h1>

              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/thomas-maclean/afspraak?hide_event_type_details=1"
                style={{ minWidth: '320px', height: '630px' }}
              ></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ipsa voluptatem, nam odio quam maiores perferendis neque illum
                mollitia eveniet, pariatur iure dignissimos distinctio debitis
                ab, consequatur quaerat quod fugiat?
              </p>
              {/* <div style={{ height: '800px' }}>
                <iframe
                  src="https://calendly.com/thomas-maclean/afspraak"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </div> */}
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main`
  background: var(--background-dark);
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
type AboutPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};
export default AboutPage;
