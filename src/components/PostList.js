
import React from 'react'
import Link from './Link'
import PostCard from './PostCard'
import SocialPromo from './SocialPromo'

const PostList = ({ limit }, { data }) => {
  const posts = limit ? data.posts.slice(0, limit) : data.posts

  const postCards = posts.map((post, i) => (
      <div key={i}
          className='inline-block align-top col-12 md-col-6 px2 mb4'>
          <PostCard {...post} />
      </div>
  ))

  postCards.splice(2, 0, (
      <div key='social-promo' className='inline-block align-top col-12 md-col-6 px2 sm-px4 md-px2 lg-px4 mb4'>
          <SocialPromo />
      </div>
  ))

  return (
    <div className='mxn2'>
      {postCards}
    </div>
  )
}

PostList.contextTypes = {
  data: React.PropTypes.object
}

export default PostList

