import React from 'react'
import Header from './components/Header'
import StyledTextArea from './components/StyledTextArea'
import { Document } from 'react-pdf/dist/entry.webpack'
import blobStream from 'blob-stream'
import { inject, observer } from 'mobx-react'
import OfferStore from './stores/offer'
import AuthStore from './stores/auth'
import UserStore from './stores/user'
const PDFDocument = require('../static/pdfkit.standalone')

@inject('offer', 'auth', 'user')
@observer
export default class CreateOffer extends React.Component<{
  offer: OfferStore
  user: UserStore
  auth: AuthStore
}> {
  state = {
    text: '',
    pdfBlobUrl: '',
  }

  render() {
    return (
      <>
        <Header />
        <div
          style={{
            padding: 10,
            margin: 'auto',
            maxWidth: 800,
          }}
        >
          Create Offer
          <StyledTextArea
            style={{
              minHeight: 300,
            }}
            onChange={(e: any) => {
              this.setState({ text: e.target.value })
              const doc = new PDFDocument()
              const stream = doc.pipe(blobStream())
              doc.text(e.target.value)
              doc.end()
              stream.on('finish', () => {
                const pdfBlobUrl = stream.toBlobURL('application/pdf')
                this.setState({ pdfBlobUrl })
              })
            }}
          />
          <iframe
            style={{ width: '100%', height: 300 }}
            src={this.state.pdfBlobUrl}
          />
          <button
            type="button"
            onClick={async () => {
              await this.props.offer.create({
                text: this.state.text,
              })
            }}
          >
            Save Offer
          </button>
        </div>
      </>
    )
  }
}
