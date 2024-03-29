
const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
const marked = require('marked')
const renderer = require('../marked-renderer')

const config = require('./config')
const social = require('../../content/social.json')
const landing = require('../../content/landing.json')
const events = require('../../content/events.json')
const footer = require('../../content/footer.json')
const leadForm = require('../../content/lead-form.json')
const paidLanding = require('../../content/paid-landing.json')

const { domain, baseurl, bucketUrl } = config

const paths = [
    '/',
    '/posts',
    '/p'
]

const posts = fs.readdirSync(path.join(__dirname, '..', '..', 'posts'))
    .filter(f => /\.md$/.test(f))
    .map(f => {
        const name = f.replace(/^(\d{4}-\d{2}-\d{2})-|\.md$/g, '')
        // This could be done with markdown-loader for HMR
        const markdown = fs.readFileSync(path.join(__dirname, '..', '..', 'posts', f), 'utf8')
        const matter = frontMatter(markdown)
        const html = marked(matter.body, { renderer })
        return Object.assign({
            name,
            markdown,
            html
        }, matter.attributes)
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter(post => post.published !== false)

posts.forEach(f => {
    paths.push('/posts/' + f.name)
})

const data = {
    domain,
    baseurl,
    bucketUrl,
    title: 'For New York',
    social,
    paths,
    posts,
    landing,
    events,
    footer,
    leadForm,
    paidLanding
}

module.exports = data

