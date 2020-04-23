import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      let props = { ...initialProps };

      return props;
  }

  render() {
    return (

      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Easy Career | 找工作，上易职</title>
          <link rel="stylesheet" href="/assets/css/vendor.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <script src="/assets/js/jquery-3.4.1.js"></script>
          <script src="//code.tidio.co/bvmdkbiydd0dddefe6od2ym6lrtkl9te.js"></script>
          <script src="/assets/js/vendor.js"></script>
          <script src="/assets/js/app.js"></script>
          <script src="/assets/js/shopify.js"></script>
          <link rel="icon" type="image/png" href="assets/images/favicon.png"></link>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140811008-5"></script>
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>

          <Main />
          <NextScript />

        
      </Html>

    )
  }
}
