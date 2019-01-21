import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div class="container" role="presentation">
          <div class="content">
            <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
            <div class="main" role="presentation">
              <div class="wrapper" role="presentation">
                <p>Hi __NAME__,</p>
                <p>Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.</p>
                <div class="btn btn-primary">
                  <a href="http://htmlemail.io" target="_blank" rel="noopener noreferrer">Call To Action</a>
                </div>
                <p>This is a really simple email template. Its sole purpose is to get the recipient to click the button with no distractions.</p>
                <p>Good luck! Hope it works.</p>
                <br/>
                <p>Xaolonist's Team,</p>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Layout>
    )
  }
}
