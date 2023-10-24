<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold" to="/">DevQuiz</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle fw-bold"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lista quiz
            </a>
            <ul
              class="dropdown-menu d-sm-none"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <router-link to="/quiz-html" class="dropdown-item"
                  >Vai al quiz HTML</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-css" class="dropdown-item"
                  >Vai al quiz CSS</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-scss" class="dropdown-item"
                  >Vai al quiz SCSS</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              href="https://www.linkedin.com/in/thomasbasadonne/"
              class="nav-link fw-bold"
              target="_blank"
              >About me</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
