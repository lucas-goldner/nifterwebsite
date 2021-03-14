import Head from "next/head";
import React, { Fragment, useState } from "react";
import portfolios from "../data/pages.json";
import ReactPageScroller from "react-page-scroller";
import LayoutDefault from "../container/LayoutDefault";
import Header from "../components/Header";
import PortfolioItem from "../components/babyComponents/PortfolioItem";

const HomeVerticalSlidePortfolio = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const getPagesNumbers = () => {
    const numbersPage = [];
    for (let i = 0; i <= 2; i++) {
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
          {portfolios.slice(0, 3).map((portfolio) => (
            <PortfolioItem
              key={portfolio.id}
              number={portfolio.id}
              title={portfolio.title}
              thumb={"." + portfolio.thumb}
              category={portfolio.category}
              character={characters[portfolio.id - 1]}
              className="section"
            />
          ))}
        </ReactPageScroller>
        <div id="fp-nav" className="right">
          <ul>{pagesNumbers}</ul>
        </div>
      </LayoutDefault>
    </Fragment>
  );
};

export default HomeVerticalSlidePortfolio;
