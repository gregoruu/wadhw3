<template>
  <div>
    <Header />

    <main class="post-container">
      <div class="post" id="login-container">
        <h2>Welcome to PostIt</h2>
        <h2>Please sign up</h2>
        <form>
          <label>
            <input type="email" placeholder="Email" required />
          </label>
          <label>
            <input type="password" placeholder="Password" required />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import '../assets/SignUpPageView.css'
export default {
  name: 'LoginPageView',
  components: {
    Header,
    Footer,
  },
}
</script>
