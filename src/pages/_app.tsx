import '../styles/global.css'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <style jsx global>{`
      @font-face {
        font-family: 'HanCodeJP';
        src: url('/fonts/SourceHanCodeJP-Regular.otf');
      }
    `}</style>
  </>
)
