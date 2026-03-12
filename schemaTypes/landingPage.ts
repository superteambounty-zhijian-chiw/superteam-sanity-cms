import { defineField, defineType } from 'sanity'

/**
 * Singleton document for the main landing page content.
 * Hero, mission pillars, stats, CTAs, footer and Luma link.
 */
export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
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
      name: 'missionPillars',
      title: 'Mission Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
      description: 'Six pillars: builder support, events, grants, jobs/bounties, education, ecosystem',
    }),
    defineField({
      name: 'stats',
      title: 'Impact Stats',
      type: 'object',
      fields: [
        { name: 'members', type: 'number', title: 'Members' },
        { name: 'events', type: 'number', title: 'Events' },
        { name: 'projects', type: 'number', title: 'Projects' },
        { name: 'bounties', type: 'number', title: 'Bounties' },
        { name: 'reach', type: 'number', title: 'Reach' },
      ],
    }),
    defineField({
      name: 'viewAllEventsUrl',
      title: 'View All Events URL',
      type: 'url',
      description: 'Luma calendar or events page URL',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'twitter', type: 'url', title: 'Twitter / X' },
        { name: 'discord', type: 'url', title: 'Discord' },
        { name: 'telegram', type: 'url', title: 'Telegram' },
        { name: 'superteamGlobal', type: 'url', title: 'Superteam Global' },
      ],
    }),
  ],
})
