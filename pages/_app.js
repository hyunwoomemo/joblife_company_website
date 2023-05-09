import GlobalStyle from "@/components/common/GlobalStyle"
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
