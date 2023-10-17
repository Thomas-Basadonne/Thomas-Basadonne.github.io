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
</template>

<style lang="scss" scoped></style>
