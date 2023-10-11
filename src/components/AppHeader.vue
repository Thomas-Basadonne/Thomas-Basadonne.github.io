<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand fw-bold" to="/">AnimeQuiz</router-link>
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
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <router-link to="/quiz-one-piece" class="dropdown-item"
                >Vai al quiz One Piece</router-link
              >
            </li>
            <li>
              <router-link to="/quiz-hells-paradise" class="dropdown-item"
                >Vai al quiz Hells Paradise</router-link
              >
            </li>
            <li>
              <router-link to="/quiz-memento" class="dropdown-item"
                >Vai al quiz Memento</router-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="https://www.linkedin.com/in/thomasbasadonne/" class="nav-link fw-bold" target="_blank">About me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


</template>

<style lang="scss" scoped></style>