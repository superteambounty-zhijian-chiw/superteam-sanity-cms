import { defineField, defineType } from 'sanity'

/**
 * Testimonial / Wall of Love entry. Stores only the tweet ID; the frontend
 * fetches and renders the tweet via react-tweet. Synced to Supabase testimonials (tweet_id).
 */
export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'tweetId',
      title: 'Tweet ID',
      type: 'string',
      description:
        'The numeric ID from the tweet URL (e.g. from twitter.com/user/status/1234567890, use 1234567890)',
      validation: (Rule) =>
        Rule.required().regex(/^\d+$/, 'Must be a numeric tweet ID'),
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
  ],
})
