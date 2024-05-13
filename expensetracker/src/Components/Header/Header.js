import React from 'react'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Expense Tracker</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
              
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/products">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/signup">signUp</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/login">login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header