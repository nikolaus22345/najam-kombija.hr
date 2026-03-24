import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Objava',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL link)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Glavna Slika',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum Objave',
      type: 'datetime',
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
      initialValue: 'hr',
    }),
    defineField({
      name: 'excerpt',
      title: 'Kratki Sažetak',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Sadržaj Objavljenog Teksta',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'language',
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        subtitle: `Jezik: ${subtitle}`,
        media,
      };
    },
  },
});
