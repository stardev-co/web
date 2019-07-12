import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { inject, observer } from 'mobx-react'
import InvoiceStore from './stores/invoice'

@inject('invoice')
@observer
export default class InvoiceScreen extends React.Component<{
  invoice: InvoiceStore
  match: any
}> {
  state = {
    loading: false,
  }
  async componentDidMount() {
    const invoiceId = this.props.match.params.id
    const invoice = this.props.invoice.byId(invoiceId)
    if (!invoice._id) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ loading: true })
    }
    await this.props.invoice.loadById(invoiceId)
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ loading: false })
  }

  render() {
    const invoiceId = this.props.match.params.id
    const invoice = this.props.invoice.byId(invoiceId)
    return (
      <>
        <Header />
        {this.state.loading ? 'loading...' : ''}
        <div>Invoice #1</div>
        <div>_id: {invoice._id}</div>
        <Footer />
      </>
    )
  }
}
