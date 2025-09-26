import React from 'react';
import { getTranslations } from 'next-intl/server';
import { H2, H3, Li, Ol, P } from '@/components/typography';
import { SubLi, SubOl } from '@/components/typography/Lists';

const EthicalManagementPage = async () => {
  const t = await getTranslations('ethicalManagement');
  return (
    <section className="max-w-[1440px] w-full mt-[72px] lg:mt-32 mb-20 lg:mb-[240px] px-5 lg:px-[200px] mx-auto whitespace-pre-line">
      <h1 className="text-headline-sm lg:text-headline-lg mb-14 lg:mb-[120px] font-bold">{t('title')}</h1>
      <P>{t('introduction')}</P>

      <H2 className="mt-16">{t('chapter1.title')}</H2>
      <H3>{t('chapter1.article1.title')}</H3>
      <P>{t('chapter1.article1.content')}</P>
      <H3>{t('chapter1.article2.title')}</H3>
      <Ol>
        <Li>{t('chapter1.article2.content1')}</Li>
        <Li>{t('chapter1.article2.content2')}</Li>
      </Ol>

      <H2 className="mt-16">{t('chapter2.title')}</H2>
      <H3>{t('chapter2.article1.title')}</H3>
      <Ol>
        <Li>{t('chapter2.article1.content')}</Li>
      </Ol>
      <H3>{t('chapter2.article2.title')}</H3>
      <Ol>
        <Li>{t('chapter2.article2.content')}</Li>
      </Ol>
      <H3>{t('chapter2.article3.title')}</H3>
      <Ol>
        <Li>{t('chapter2.article3.content')}</Li>
      </Ol>

      <H2 className="mt-16">{t('chapter3.title')}</H2>
      <H3>{t('chapter3.article1.title')}</H3>
      <Ol>
        <Li>{t('chapter3.article1.content1')}</Li>
        <Li>{t('chapter3.article1.content2')}</Li>
        <Li>{t('chapter3.article1.content3')}</Li>
      </Ol>

      <H2 className="mt-16">{t('chapter4.title')}</H2>
      <H3>{t('chapter4.article1.title')}</H3>
      <Ol>
        <Li>{t('chapter4.article1.content1')}</Li>
        <Li>{t('chapter4.article1.content2')}</Li>
      </Ol>
      <H3>{t('chapter4.article2.title')}</H3>
      <Ol>
        <Li>{t('chapter4.article2.content')}</Li>
      </Ol>
      <H3>{t('chapter4.article3.title')}</H3>
      <Ol>
        <Li>{t('chapter4.article3.content1')}</Li>
        <Li>{t('chapter4.article3.content2')}</Li>
        <Li>{t('chapter4.article3.content3')}</Li>
      </Ol>

      <H2 className="mt-16">{t('chapter5.title')}</H2>
      <H3>{t('chapter5.article1.title')}</H3>
      <Ol>
        <Li>{t('chapter5.article1.content')}</Li>
      </Ol>
      <H3>{t('chapter5.article2.title')}</H3>
      <Ol>
        <Li>{t('chapter5.article2.content1')}</Li>
        <Li>{t('chapter5.article2.content2')}</Li>
      </Ol>

      <H2 className="mt-16">{t('chapter6.title')}</H2>
      <H3>{t('chapter6.article1.title')}</H3>
      <Ol>
        <Li>{t('chapter6.article1.content')}</Li>
      </Ol>
      <H3>{t('chapter6.article2.title')}</H3>
      <Ol>
        <Li>{t('chapter6.article2.content1')}</Li>
        <Li>{t('chapter6.article2.content2')}</Li>
      </Ol>
      <H3>{t('chapter6.article3.title')}</H3>
      <Ol>
        <Li>{t('chapter6.article3.content1')}</Li>
        <Li>{t('chapter6.article3.content2')}</Li>
      </Ol>

      <H2 className="mt-16">{t('chapter7.title')}</H2>
      <H3>{t('chapter7.article1.title')}</H3>
      <Ol>
        <Li>{t('chapter7.article1.content1')}</Li>
        <Li>{t('chapter7.article1.content2')}</Li>
        <Li>{t('chapter7.article1.content3')}</Li>
        <Li>{t('chapter7.article1.content4')}</Li>
      </Ol>
      <H3>{t('chapter7.article2.title')}</H3>
      <Ol>
        <Li>{t('chapter7.article2.content1')}</Li>
        <Li>{t('chapter7.article2.content2')}</Li>
        <Li>{t('chapter7.article2.content3')}</Li>
      </Ol>
      <H3>{t('chapter7.article3.title')}</H3>
      <Ol>
        <Li>{t('chapter7.article3.content1')}</Li>
        <Li>{t('chapter7.article3.content2')}</Li>
      </Ol>
      <H3>{t('chapter7.article4.title')}</H3>
      <Ol>
        <Li>{t('chapter7.article4.content1')}</Li>
        <Li>{t('chapter7.article4.content2')}</Li>
      </Ol>
      <H3>{t('chapter7.article5.title')}</H3>
      <Ol>
        <Li>{t('chapter7.article5.content1')}</Li>
        <Li>{t('chapter7.article5.content2')}</Li>
      </Ol>
      <H3>{t('chapter7.article6.title')}</H3>
      <Ol>
        <Li>{t('chapter7.article6.content1')}</Li>
        <Li>{t('chapter7.article6.content2')}</Li>
      </Ol>
      <H3>{t('chapter7.article7.title')}</H3>
      <Ol>
        <Li>{t('chapter7.article7.content')}</Li>
      </Ol>
      <H3>{t('chapter7.article8.title')}</H3>
      <Ol>
        <Li>
          {t('chapter7.article8.content1')}
          <SubOl>
            <SubLi>{t('chapter7.article8.subcontent1')}</SubLi>
            <SubLi>{t('chapter7.article8.subcontent2')}</SubLi>
            <SubLi>{t('chapter7.article8.subcontent3')}</SubLi>
            <SubLi>{t('chapter7.article8.subcontent4')}</SubLi>
          </SubOl>
        </Li>
      </Ol>
      <H3>{t('chapter7.article9.title')}</H3>
      <Ol>
        <Li>{t('chapter7.article9.content')}</Li>
      </Ol>

      <H2 className="mt-16">{t('chapter8.title')}</H2>
      <H3>{t('chapter8.article1.title')}</H3>
      <Ol>
        <Li>
          {t('chapter8.article1.content1')}
          <SubOl>
            <SubLi>{t('chapter8.article1.subcontent1')}</SubLi>
            <SubLi>{t('chapter8.article1.subcontent2')}</SubLi>
            <SubLi>{t('chapter8.article1.subcontent3')}</SubLi>
          </SubOl>
        </Li>
      </Ol>
      <H3>{t('chapter8.article2.title')}</H3>
      <Ol>
        <Li>
          {t('chapter8.article2.content1')}
          <SubOl>
            <SubLi>{t('chapter8.article2.subcontent1')}</SubLi>
            <SubLi>{t('chapter8.article2.subcontent2')}</SubLi>
          </SubOl>
        </Li>
      </Ol>
      <H3>{t('chapter8.article3.title')}</H3>
      <Ol>
        <Li>{t('chapter8.article3.content')}</Li>
      </Ol>
    </section>
  );
};

export default EthicalManagementPage;
