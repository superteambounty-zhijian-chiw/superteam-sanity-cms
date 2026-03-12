import { defineField, defineType } from 'sanity'

/**
 * Stats document for Impact / Key metrics section.
 * Synced to Supabase `landing_stats` via webhook.
 * Key metrics: Members, Events hosted, Projects built, Bounties completed, Community reach.
 */
export const statsType = defineType({
  name: 'stats',
  title: 'Stats / Impact',
  type: 'document',
  fields: [
    defineField({
      name: 'members',
      title: 'Members',
      type: 'number',
      description: 'Total members count',
    }),
    defineField({
      name: 'events',
      title: 'Events hosted',
      type: 'number',
      description: 'Number of events hosted',
    }),
    defineField({
      name: 'projects',
      title: 'Projects built',
      type: 'number',
      description: 'Number of projects built',
    }),
    defineField({
      name: 'bounties',
      title: 'Bounties completed',
      type: 'number',
      description: 'Number of bounties completed',
    }),
    defineField({
      name: 'reach',
      title: 'Community reach',
      type: 'number',
      description: 'Community reach metric',
    }),
  ],
})
