
import React from 'react'

import LeadForm from './LeadForm'
import LandingNav from './LandingNav'
import LandingHeader from './LandingHeader'
import LandingIntro from './LandingIntro'
import LandingPosts from './LandingPosts'
import SocialPromo from './SocialPromo'
import LandingAbout from './LandingAbout'
import Footer from './Footer'

const Index = (props, { data }) => {
  return (
    <div>
      <LandingNav />
      <LandingHeader />
      <LandingIntro />
      <LandingPosts />
      <SocialPromo />
      <pre>EventList FPO</pre>
      <LandingAbout />
      <LeadForm />
      <Footer />
    </div>
  )
}

Index.contextTypes = {
  data: React.PropTypes.object
}

export default Index

