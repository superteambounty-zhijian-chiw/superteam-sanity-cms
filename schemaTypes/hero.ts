import { defineField, defineType } from 'sanity'

/**
 * Singleton document for the hero section content.
 */
export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Main headline on the hero section',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      description: 'Supporting text below the headline',
    }),
    defineField({
      name: 'heroPrimaryCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
      description: 'e.g. "Join Community"',
    }),
    defineField({
      name: 'heroPrimaryCtaLink',
      title: 'Primary CTA Link',
      type: 'url',
      description: 'URL for the primary button',
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string',
      description: 'e.g. "Explore Opportunities"',
    }),
    defineField({
      name: 'heroSecondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'url',
    }),
    defineField({
      name: 'heroBackground',
      title: 'Hero Background',
      type: 'object',
      description: 'Drop an image OR a video file for the hero background.',
      fields: [
        defineField({
          name: 'image',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'video',
          title: 'Background Video',
          type: 'file',
          options: { accept: 'video/*' },
        }),
      ],
    }),
  ],
})
