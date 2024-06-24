import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import { useTranslation } from "react-i18next"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <article>
        <h2 id="Prize">{t("Prize")}</h2>
        <div className="flex h-[50vh] flex-col">
          <p>
            The Web3 Foundation announces the{" "}
            <span className="jam">
              <span>J</span>am
            </span>{" "}
            Implementer&#x2019;s Prize, a 10 Million DOT prize pool aimed at
            fostering diversity in the development of the{" "}
            <span className="jam">
              <span>J</span>am
            </span>{" "}
            protocol. The goal of this prize is to encourage the creation of
            multiple client implementations, enhancing the network&#x2019;s
            resilience.
          </p>

          <div className="flex flex-row justify-center items-center pt-4">
            <a href="https://medium.com/web3foundation/announcing-the-jam-implementers-prize-e79f8ebc506d">
              Read the announcement
            </a>
          </div>

          <p>
            The <span className="jam">
              <span>J</span>am
            </span> {" "}Implementers’ Prize encourages multiple client implementations to boost network resilience. The Foundation seeks proposals for <span className="jam">
              <span>J</span>am
            </span> {" "} implementations in diverse programming languages, including OCaml, Go, and Zig among others.
            The Foundation is excited to support enthusiastic developers in shaping the future of blockchain technology.
            Interested teams can apply for the <span className="jam">
              <span>J</span>am
            </span> Implementers’ Prize here:
          </p>
          <div className="flex flex-row justify-center items-center p-4">
            <a href="https://jam.web3.foundation/">
              https://jam.web3.foundation/
            </a>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default Page

export const Head: HeadFC<{}, { langKey?: string }> = (props) => {
  const { t, i18n } = useTranslation(undefined)
  return (
    <>
      <CommonHead />
      <html id="html" lang={i18n.language} />
      <title id="title">{`JAM ${t("Prize")}`}</title>

      <meta name="robots" content="noindex, nofollow" />
      <meta
        id="description"
        name="description"
        content={
          "A 10 Million DOT prize pool aimed at fostering diversity in the development of the JAM protocol."
        }
      />
    </>
  )
}
