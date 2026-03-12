import { defineField, defineType } from 'sanity'

/**
 * Event document used to manage upcoming and past events.
 * This schema is the authoring source that mirrors into the Supabase `events` table.
 */
export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Public event name shown on the site',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
      description: 'URL-safe identifier; used for linking or debugging',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description for the event card and details',
    }),
    defineField({
      name: 'startAt',
      title: 'Start time',
      type: 'datetime',
      description: 'Event start date and time (ISO)',
    }),
    defineField({
      name: 'endAt',
      title: 'End time',
      type: 'datetime',
      description: 'Event end date and time (ISO)',
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      description: 'IANA timezone name, e.g. Asia/Kuala_Lumpur',
    }),
    defineField({
      name: 'url',
      title: 'Registration / details URL',
      type: 'url',
      description: 'Link to Luma event page or external registration',
    }),
    defineField({
      name: 'location',
      title: 'Location label',
      type: 'string',
      description: 'Display location, e.g. Online or city / venue name',
    }),
    defineField({
      name: 'geoAddress',
      title: 'Address (optional)',
      type: 'string',
      description: 'Optional address or geo text for display only',
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight in past events',
      type: 'boolean',
      initialValue: false,
      description: 'When true, show in highlighted past events section',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional image shown on event cards',
    }),
    defineField({
      name: 'order',
      title: 'Manual sort order',
      type: 'number',
      description: 'Optional override for ordering (lower appears first)',
    }),
  ],
  orderings: [
    {
      title: 'Start date (newest first)',
      name: 'startAtDesc',
      by: [{ field: 'startAt', direction: 'desc' }],
    },
    {
      title: 'Start date (oldest first)',
      name: 'startAtAsc',
      by: [{ field: 'startAt', direction: 'asc' }],
    },
    {
      title: 'Manual order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})

