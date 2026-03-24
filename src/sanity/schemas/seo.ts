import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO Postavke',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Stranica (ID)',
      type: 'string',
      description: 'Na koju se stranicu ovo odnosi (npr. "home", "zagrebAirport", "zadarAirport").',
    }),
    defineField({
      name: 'language',
      title: 'Jezik',
      type: 'string',
      options: {
        list: [
          { title: 'Engleski (en)', value: 'en' },
          { title: 'Hrvatski (hr)', value: 'hr' },
          { title: 'Njemački (de)', value: 'de' },
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Naslov Stranice (Title)',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Opis (Description)',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'pageId',
      subtitle: 'language',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Stranica: ${title}`,
        subtitle: `Jezik: ${subtitle}`,
      };
    },
  },
});
