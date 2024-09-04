import React from 'react'

function Footer() {
  return (
    <>
      <footer className="text-center bg-white mt-5">
        <div className="container p-4 pb-0">
          <section>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ background: "#0082ca" }}
              href="#!"
              role="button"
            ><i className="fab fa-linkedin-in"></i
            ></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ background: "#333333" }}
              href="#!"
              role="button"
            ><i className="fab fa-github"></i
            ></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ background: "#ac2bac" }}
              href="#!"
              role="button"
            ><i className="fab fa-instagram"></i
            ></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ background: "#3b5998" }}
              href="#!"
              role="button"
            ><i className="fab fa-facebook-f"></i
            ></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ background: "#55acee" }}
              href="#!"
              role="button"
            ><i className="fab fa-twitter"></i
            ></a>

          </section>
        </div>

        <div className="text-center p-3 bg-white">
          © 2024 Adhithyan Das K :
          <a className="text-body" href=""> All rights reserved</a>
        </div>
      </footer>
    </>
  )
}

export default Footer