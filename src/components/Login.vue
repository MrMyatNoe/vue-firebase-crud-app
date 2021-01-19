<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="container bg-info text-white">
        <h2 class="text-center">Login Form</h2>
        <form>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <button type="Submit" class="btn btn-success">Login</button>
            
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>