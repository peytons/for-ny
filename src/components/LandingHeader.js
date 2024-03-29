
import React from 'react'
import { Container, Button } from 'rebass'
import Scroll from 'react-scroll'
import Heading from './Heading'
import Logo from './Logo'

const LandingHeader = (props, { rebass, data }) => {
    const sx = {
        root: {
            paddingTop: 64
        }
    }

    const {
        landing: {
            heading,
            text,
            headerButton
        }
    } = data

    return (
        <Scroll.Element
            name='top'
            id='top'>
            <header className='min-height-100 table col-12 px3 py4 bg-mint'
                style={sx.root}>
                <div className='table-cell align-middle center'>
                    <Logo mega className='mb3' />
                    <Container style={{ maxWidth: 768 }}>
                        <p className='bold line-height-2 h3 md-h2 mb3'
                            dangerouslySetInnerHTML={{
                                __html: text
                            }} />
                        <div className='xs-hide'>
                            <Button
                                is={Scroll.Link}
                                smooth={true}
                                duration={200}
                                offset={-64}
                                to='stories'
                                mt={2}
                                color='mint'
                                backgroundColor='black'
                                children={headerButton} />
                        </div>
                    </Container>
                </div>
            </header>
        </Scroll.Element>
    )
}

LandingHeader.contextTypes = {
    rebass: React.PropTypes.object,
    data: React.PropTypes.object
}

export default LandingHeader

