// Modals
// Sign Up modal
document.getElementById('signUpModalS').innerHTML = `
<!-- Modal -->
    <div class="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"><img src="./imagenes/logo/Coco'.png" alt="micro logo" width="auto" height="28" class="me-2" style="border-radius: 50%;">Sign up</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
         <div class="modal-body">
            <form>
            <!-- fname and lname fill -->
            <div class="row g-3 mb-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                </div>
            </div>
            <!-- Email and password fill -->
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword1" placeholder="Coco.2022!">
                <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="inputPassword2">
            </div>
        <div class="row">
            <div class="mb-3 col">
            <label for"gender">Gender</label>
            <select class="form-select" aria-label="Default select example"">
            <option selected>Select an option</option>
            <option value=1>Masculino</option>
            <option value=2>Femenino</option>
            <option value=3>Los 98 otros tipos de gay</option>
            </select>
            </div>
            <!-- Check mark -->
            <div class="m-4 form-check col">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Sign me in</label>
            </div>
        </div>
            </form>
        </div>
          <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
           <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
         </div>
       </div>
      </div>
    </div>
  </div>`
  //Sign In modal
document.getElementById('signInModalS').innerHTML = `
    <div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"><img src="./imagenes/logo/Coco'.png" alt="micro logo" width="auto" height="28" class="me-2" style="border-radius: 50%;">Sign In</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
         <div class="modal-body">
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail2" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword3" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword3">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck2">
                <label class="form-check-label" for="exampleCheck2">Stay sign in</label>
            </div>
            </form>
        </div>
          <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
           <button type="submit" class="btn btn-primary">Sign In</button>
            </div>
         </div>
       </div>
      </div>
    </div>
  </div>`