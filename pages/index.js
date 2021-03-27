import Head from "next/head";
import React, { Fragment, useState } from "react";
import portfolios from "../data/pages.json";
import ReactPageScroller from "react-page-scroller";
import LayoutDefault from "../container/LayoutDefault";
import Header from "../components/Header";
import PortfolioItem from "../components/babyComponents/PortfolioItem";
import Footer from "../components/Footer";
import FooterContainer from "../container/FooterContainer";

const HomeVerticalSlidePortfolio = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const getPagesNumbers = () => {
    const numbersPage = [];
    for (let i = 0; i <= 3; i++) {
      numbersPage.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? "active" : ""}
          >
            <span />
          </button>
        </li>
      );
    }
    return [...numbersPage];
  };

  const pagesNumbers = getPagesNumbers();
  const characters = ["N", "F", "T"];

  return (
    <Fragment>
      <Head>
        <title>Nifter Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={
            "This app brings collecting NFTs to a new level. Show friends all of your valuable bought or traded NFTs from OpenSea or Rarible.We track your current NFTs, if you get a new ones, your friends will be able to see them in their feed.You can discover other users as friends and see their gallery. Maybe their collection could peak your interest.There is no better NFT App on the App Store, so start collecting and download this app!"
          }
        />
        <meta
          name="keywords"
          content="Nifter, NFT Nifter, NFT, NFTs,, Opensea, Rarible, Etherium, Trade, Share, Collect, Buy, Mint"
        />
        <meta name="author" content="Lucas Goldner" />
      </Head>

      <LayoutDefault
        className="template-color-21 template-font-2"
        revealFooter={false}
      >
        <Header />

        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}
        >
          {portfolios.slice(0, 4).map((portfolio) =>
            portfolio.id <= 3 ? (
              <>
                <PortfolioItem
                  key={portfolio.id}
                  number={portfolio.id}
                  title={portfolio.title}
                  buttonTitle={portfolio.buttonTitle}
                  link={portfolio.link}
                  thumb={"." + portfolio.thumb}
                  category={portfolio.category}
                  character={characters[portfolio.id - 1]}
                  className="section"
                />
              </>
            ) : (
              <FooterContainer>
                <Footer />
              </FooterContainer>
            )
          )}
        </ReactPageScroller>
        <div id="fp-nav" className="right">
          <ul>{pagesNumbers}</ul>
        </div>
      </LayoutDefault>
    </Fragment>
  );
};

export default HomeVerticalSlidePortfolio;
