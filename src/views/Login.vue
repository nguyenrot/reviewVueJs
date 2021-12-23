<template>
  <div class="container">
    <div class="card">
      <h5 class="card-title">Login</h5>
      <div class="card-body">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <router-link to="/register" class="btn btn-warning">Register</router-link>
      </div>
    </div>
  </div>
</template>
<script>

</script>

<style>

</style>