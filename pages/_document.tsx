import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
    <body>
      <Html>
        <Head />
        
          <Main />
          <NextScript />
        
      </Html>
      </body>
    )
  }
}

export default MyDocument