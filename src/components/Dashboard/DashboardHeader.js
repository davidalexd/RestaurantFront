import React from "react";

export const DashboardHeader = () => {
  return (
    <>
      <header className="settings-header">
        <div className="settings-info">
          <h3 className="settings-title">Products Managment</h3>
          <div className="btn-filter center">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2374 14.0725C20.3126 14.0725 21.9996 15.7377 21.9996 17.7862C21.9996 19.8336 20.3126 21.5 18.2374 21.5C16.1621 21.5 14.4751 19.8336 14.4751 17.7862C14.4751 15.7377 16.1621 14.0725 18.2374 14.0725ZM18.2374 15.8144C17.135 15.8144 16.2397 16.6981 16.2397 17.7862C16.2397 18.8732 17.135 19.7581 18.2374 19.7581C19.3397 19.7581 20.235 18.8732 20.235 17.7862C20.235 16.6981 19.3397 15.8144 18.2374 15.8144ZM10.1172 16.9149C10.6042 16.9149 10.9995 17.3051 10.9995 17.7859C10.9995 18.2667 10.6042 18.6568 10.1172 18.6568H2.88316C2.39611 18.6568 2.00082 18.2667 2.00082 17.7859C2.00082 17.3051 2.39611 16.9149 2.88316 16.9149H10.1172ZM5.76229 2.5C7.83754 2.5 9.52457 4.16643 9.52457 6.21376C9.52457 8.26109 7.83754 9.92753 5.76229 9.92753C3.68821 9.92753 2 8.26109 2 6.21376C2 4.16643 3.68821 2.5 5.76229 2.5ZM5.76229 4.24192C4.66113 4.24192 3.76467 5.12681 3.76467 6.21376C3.76467 7.30072 4.66113 8.18561 5.76229 8.18561C6.86462 8.18561 7.7599 7.30072 7.7599 6.21376C7.7599 5.12681 6.86462 4.24192 5.76229 4.24192ZM21.1177 5.34304C21.6047 5.34304 22 5.73323 22 6.214C22 6.69476 21.6047 7.08495 21.1177 7.08495H13.8825C13.3954 7.08495 13.0002 6.69476 13.0002 6.214C13.0002 5.73323 13.3954 5.34304 13.8825 5.34304H21.1177Z"
                  fill="#3B5162"
                />
              </svg>
            </span>
            <span>Manage Categories</span>
          </div>
        </div>
        <div className="categories">
          <ul className="category-list">
            <li className="category-item category-active">
              <span>Hot Dishes</span>
            </li>
            <li className="category-item">
              <span>Fast Food</span>
            </li>
            <li className="category-item">
              <span>Soups</span>
            </li>
            <li className="category-item">
              <span>Desserts</span>
            </li>
            <li className="category-item">
              <span>Salads</span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
