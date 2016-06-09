
const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
// const yaml = require('js-yaml')
const marked = require('marked')
const renderer = require('../marked-renderer')

const config = require('./config')
const metadata = require('./metadata.json')
// const landing = require('./landing.json')
const events = require('./events.json')
const footer = require('./footer.json')
const leadForm = require('./lead-form.json')

const landing = frontMatter(fs.readFileSync(path.join(__dirname, '../../content/landing.md'), 'utf8')).attributes
console.log('landing data', landing)

const { domain, baseurl } = config

const paths = [
    '/',
    '/posts'
]

const posts = fs.readdirSync(path.join(__dirname, '..', '..', 'posts'))
    .filter(f => /\.md$/.test(f))
    .map(f => {
        const name = f.replace(/\.md$/, '')
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
    .sort((a, b) => a.date < b.date)

posts.forEach(f => {
    paths.push('/posts/' + f.name)
})

const data = {
    domain,
    baseurl,
    title: 'For New York',
    metadata,
    paths,
    posts,
    landing,
    events,
    footer,
    leadForm
}

module.exports = data

