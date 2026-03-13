import { defineField, defineType } from 'sanity'

/**
 * Global social links for the website.
 * This is intended to be a single document.
 */
export const socialLinkType = defineType({
    name: 'socialLink',
    title: 'Social Links',
    type: 'document',
    fields: [
        defineField({
            name: 'twitter_url',
            title: 'Twitter URL',
            type: 'url',
        }),
        defineField({
            name: 'discord_url',
            title: 'Discord URL',
            type: 'url',
        }),
        defineField({
            name: 'telegram_url',
            title: 'Telegram URL',
            type: 'url',
        }),
        defineField({
            name: 'superteam_global_url',
            title: 'Superteam Global URL',
            type: 'url',
        }),
    ],
})
