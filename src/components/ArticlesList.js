import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <h3>
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
          {article.title}
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      </h3>
    ))}
  </>
);

export default ArticlesList;