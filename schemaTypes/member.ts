import { defineField, defineType } from 'sanity'

/**
 * Team member / community member for spotlight and members directory.
 */
export const memberType = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title',
      title: 'Title / Role',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'skillTags',
      title: 'Skill Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'e.g. Core Team, Rust, Frontend, Design, Content, Growth',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter / X URL',
      type: 'url',
      description: 'Example: https://x.com/username',
      validation: (rule) => rule.uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'solanaAchievements',
      title: 'Solana Achievements',
      type: 'text',
      description: 'Hackathon wins, projects, grants, bounties, etc.',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show in landing page spotlight',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Sort order (lower = earlier)',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Name', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],
})
