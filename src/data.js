
const fs = require('fs')
const path = require('path')
const frontMatter = require('front-matter')
const marked = require('marked')

const baseurl = '/for-ny'

const paths = [
    '/',
    '/about',
    '/posts'
]

const posts = fs.readdirSync(path.join(__dirname, '..', 'posts'))
    .filter(f => /\.md$/.test(f))
    .map(f => {
        const name = f.replace(/\.md$/, '')
        // This could be done with markdown-loader for HMR
        const markdown = fs.readFileSync(path.join(__dirname, '..', 'posts', f), 'utf8')
        const matter = frontMatter(markdown)
        const html = marked(matter.body)
        return Object.assign({
            name,
            markdown,
            html
        }, matter.attributes)
    })

posts.forEach(f => {
    paths.push('/posts/' + f.name)
})

const data = {
    baseurl,
    title: 'For NYC',
    paths,
    posts
}

module.exports = data

