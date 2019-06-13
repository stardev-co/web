import React from 'react'
import Header from './components/Header'
import StyledTextArea from './components/StyledTextArea'
import { Document } from 'react-pdf/dist/entry.webpack'
import blobStream from 'blob-stream'
const PDFDocument = require('../static/pdfkit.standalone')

export default class CreateOffer extends React.Component<{}> {
  state = {
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
            onChange={(e: any) => {
              console.log(e.target.value)
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
          <iframe style={{ width: '100%', height: 400 }} src={this.state.pdfBlobUrl} />
        </div>
      </>
    )
  }
}
