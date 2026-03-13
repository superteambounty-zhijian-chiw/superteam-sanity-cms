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
            name: 'twitterUrl',
            title: 'Twitter / X URL',
            type: 'url',
        }),
        defineField({
            name: 'discordUrl',
            title: 'Discord URL',
            type: 'url',
        }),
        defineField({
            name: 'telegramUrl',
            title: 'Telegram URL',
            type: 'url',
        }),
        defineField({
            name: 'superteamGlobalUrl',
            title: 'Superteam Global URL',
            type: 'url',
        }),
    ],
})
