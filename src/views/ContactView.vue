<template>
  <div class="mail">
    <h1>Contact</h1>
    <form class="mailForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button class="submit">Submit</button>
    </form>
  </div>
</template>
<script lang="ts"></script>
<style scoped>
.mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
.mailForm {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
  }
}
input,
textarea {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: white;
}
.submit {
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #333;
  color: white;
  cursor: pointer;
}
.submit:hover {
  background-color: #555;
}
</style>
