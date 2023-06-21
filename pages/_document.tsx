import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html
        style={{
          ['--scrollbar-width' as any]: '17px',
          ['--background-color' as any]: '#fff',
        }}
      >
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
