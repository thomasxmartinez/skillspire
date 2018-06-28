import React, { Component } from 'react'
import Link from './Link.js'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends Component {
  render() {
    // 1
    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return <div>Loading</div>
    }
  
    // 2
    if (this.props.feedQuery && this.props.feedQuery.error) {
      return <div>Error</div>
    }
  
    // 3
    const linksToRender = this.props.feedQuery.feed.links
  
    return (
      <div>
        {linksToRender.map((link, index) => (
          <Link key={link.id} updateStoreAfterVote={this._updateCacheAfterVote} index={index} link={link}/>
        ))}
      </div>
    )
    _updateCacheAfterVote = (store, createVote, linkId) => {
      // 1
      const data = store.readQuery({ query: FEED_QUERY })
    
      // 2
      const votedLink = data.feed.links.find(link => link.id === linkId)
      votedLink.votes = createVote.link.votes
    
      // 3
      store.writeQuery({ query: FEED_QUERY, data })
    }
// 1
const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

// 3
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (LinkList)
