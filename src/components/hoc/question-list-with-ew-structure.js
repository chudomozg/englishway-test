import React from "react";

const questionListlWithEwStruct = () => Wrapped => {
  return props => {
    return (
      <div className="content col-12 col-md-8 col-xl-9 pb-lg-3">
        <div className="contetnt-block main-content row">
          <h2 className="main-title">Онлайн тестирование</h2>
          <div className="breadcrumbs col-12 pl-0">
            <span
              property="itemListElement"
              typeof="ListItem"
              className="breadcrumbs__link-wrapper"
            >
              <a
                property="item"
                typeof="WebPage"
                title="Перейти к EnglishWay."
                href="/"
                className="home breadcrumbs__link"
              >
                <span property="name">Главная</span>
              </a>
              <meta property="position" content="1" />
            </span>
            &gt;
            <span
              property="itemListElement"
              typeof="ListItem"
              className="breadcrumbs__link-wrapper"
            >
              <a
                property="item"
                typeof="WebPage"
                title="Перейти к Отзывы."
                href="/test/"
                className="post post-reviews-archive breadcrumbs__link"
              >
                <span property="name">Онлайн-тест</span>
              </a>
              <meta property="position" content="2" />
            </span>
            &gt;
            <span
              property="itemListElement"
              typeof="ListItem"
              className="breadcrumbs__end-path-wrapper"
            >
              <span
                property="name"
                className="post post-reviews current-item breadcrumbs__end-path"
              >
                {props.langName} язык
              </span>
              <meta property="position" content="3" />
            </span>
          </div>
          <Wrapped {...props} />
        </div>
      </div>
    );
  };
};

export default questionListlWithEwStruct;
