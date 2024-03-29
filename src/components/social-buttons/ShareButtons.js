
import React from 'react'

class ShareButtons extends React.Component {
    constructor(props) {
        super()
        this.createDiv = this.createDiv.bind(this)
        this.initButtons = this.initButtons.bind(this)
    }

    componentDidMount() {
        this.createDiv()
        this.initButtons()
    }

    componentDidUpdate() {
        if (!this.props.isNav) {
            this.createDiv()
            this.initButtons()
        }
    }

    initButtons() {
        if (typeof addthis !== 'undefined') {
            addthis.layers.refresh()
        }
    }

    createDiv () {
        var wrap = this.refs.root
        while(wrap.firstChild) wrap.removeChild(wrap.firstChild)

        const div = document.createElement('div')
        div.className = 'addthis_sharing_toolbox'

        const tweet = this.props.text || 'For New York: ' + this.props.title
        const js = `
            var addthis_share = addthis_share || {}
            addthis_share = {
                passthrough : {
                    twitter: {
                        text: "${tweet} #ForNewYork"
                    }
                }
            }
        `
        const scriptTag = document.createElement('script')
        scriptTag.text = js

        this.refs.root.appendChild(div)
        this.refs.root.appendChild(scriptTag)
    }

    render() {
        return (
            <div ref='root' />
        )
    }
}

ShareButtons.propTypes = {
    url: React.PropTypes.string,
    text: React.PropTypes.string
}

export default ShareButtons
