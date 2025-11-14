<template>
  <header class="header">
    <nav>
      <h1>
        <router-link to="/">Home Page</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </h1>
      <div id="profileSection">
        <img
          class="profile"
          id="profileButton"
          src="@/assets/img/profile.png"
          alt="Profile picture"
        />
        <div id="profileDropdown">
          <p id="profileName">John Smith</p>
          <p id="email"></p>
          <a class="morphButton" id="logoutButton">Logout</a>
        </div>
      </div>
    </nav>
  </header>
</template>
