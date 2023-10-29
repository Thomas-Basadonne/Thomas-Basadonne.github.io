<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold" to="/">DevQuiz</router-link>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle fw-bold"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lista quiz
            </a>
            <ul class="dropdown-menu">
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
              <li>
                <router-link to="/quiz-js" class="dropdown-item"
                  >Vai al quiz JavaScript</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-php" class="dropdown-item"
                  >Vai al quiz PHP</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-java" class="dropdown-item"
                  >Vai al quiz Java</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-py" class="dropdown-item"
                  >Vai al quiz Phyton</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-ruby" class="dropdown-item"
                  >Vai al quiz Ruby</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-sql" class="dropdown-item"
                  >Vai al quiz SQL</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-mysql" class="dropdown-item"
                  >Vai al quiz MySQL</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-mongodb" class="dropdown-item"
                  >Vai al quiz MongoDB</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-redis" class="dropdown-item"
                  >Vai al quiz Redis</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-laravel" class="dropdown-item"
                  >Vai al quiz Laravel</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-react" class="dropdown-item"
                  >Vai al quiz React</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-vue" class="dropdown-item"
                  >Vai al quiz Vue.js</router-link
                >
              </li>
              <li>
                <router-link to="/quiz-spring" class="dropdown-item"
                  >Vai al quiz Spring</router-link
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
