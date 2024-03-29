
import React from 'react'
import moment from 'moment'
import Heading from './Heading'
import Text from './Text'

class EventCard extends React.Component {

    constructor(props) {
        super()
    }

    crossOutPastEvent(id) {
        const canvas = document.getElementById(id)
        const context = canvas.getContext('2d')
        context.beginPath()
        context.moveTo(0, 0)
        context.lineTo(canvas.width, canvas.height)
        context.moveTo(canvas.width, 0)
        context.lineTo(0, canvas.height)
        context.lineWidth = 4
        context.stroke()
    }

    componentDidMount() {
        if (this.props.isPastEvent) {
            this.crossOutPastEvent('event' + this.props.date)
        }
    }

    render() {
        return (
            <div className='md-flex mb3' style={{ alignItems: 'flex-start' }}>
                <Heading
                    className='mr2 mb1 center'
                    style={{
                        position: 'relative',
                        border: '3px solid',
                        flex: '1 0 128px'
                    }}>

                    <Text caps>{!isNaN(this.props.month) ? moment(this.props.month, 'MM').format('MMM') : ''}</Text>
                    <span style={{ letterSpacing: 0 }}>{!isNaN(this.props.day) ? this.props.day : 'TBD'}</span>

                    {this.props.isPastEvent && (
                        <canvas
                            id={'event' + this.props.date}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%'
                            }}
                        ></canvas>
                    )}
                </Heading>
                <div className='flex-auto mr3'>
                    <Text caps bold>{this.props.title}</Text>
                    {this.props.location && (
                        <Text bold>{this.props.location}</Text>
                    )}
                    {this.props.blurb && <Text style={{ lineHeight: 1.25 }} className='mt1'>{this.props.blurb}</Text>}
                </div>
                <div className='right-align' style={{ flex: '1 0 128px' }}>
                    {(this.props.link && !this.props.isPastEvent) && (
                        <a href={this.props.link}
                            style={{ fontSize: '24px' }}
                            className='h3 bold color-inherit caps'>
                            RSVP
                        </a>
                    )}
                </div>
            </div>
        )
    }
}

export default EventCard

