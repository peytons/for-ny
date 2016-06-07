
import React from 'react'
import Heading from './Heading'
import Text from './Text'
import ShareButtons from './ShareButtons'
import Circle from './Circle'

const SocialPromo = (props, { data }) => {
    const {
        landing: {
            socialPromo
        }
    } = data

    const sx = {
        root: {
            display: 'table',
        },
        circle: {
            width: '100%',
            height: 0,
            paddingBottom: '100%',
            borderRadius: 99999,
        },
        inner: {
            display: 'table-cell',
            verticalAlign: 'middle',
            height: '100%',
            backgroundColor: 'pink',
        }
    }

    return (
        <section
            style={sx.root}
            className='center'>
            <Circle className='bg-yellow'>
                <Heading
                    size={3}
                    className='mb2'
                    children={socialPromo.heading} />
                <ShareButtons
                    url={data.domain + data.baseurl}
                    title='For New York'
                    tweetText={socialPromo.tweetText}
                />
                <Text className='mt2'>
                    #ForNewYork
                </Text>
            </Circle>
        </section>
    )
}

SocialPromo.contextTypes = {
    data: React.PropTypes.object
}

export default SocialPromo

