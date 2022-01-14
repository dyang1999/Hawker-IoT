import React from "react";
import svg from "../../Assets/eventpic.svg";


function Content() {
  return (
    <div>
      <div className="container content">
        <div className="row">
          <div className="col-sm-3 talk">
            <h1>Hawker Operation E-Solutions</h1>
            <br />
            <h6 className="bold-four">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              nesciunt molestiae ex inventore quibusdam id architecto quos
              cupiditate nobis magnam eum voluptatem quas quis obcaecati dolor
              vero veritatis similique alias.
            </h6>
            <br />
            <h6>
              <a className="btn btn-dark start start-two" href="/status">
                Get Started
              </a>
            </h6>
          </div>
          <div className="col-sm-9 showcase-img">
            <img src={svg} />
          </div>
        </div>
      </div>
      

      <section class="features-icons bg-light text-center det-ails">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex  icon-bra-ails">
                  <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                </div>
                <h5>Powered By Machine Learning</h5>
                <p class="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex  icon-bra-ails">
                  <i class="icon-layers m-auto text-primary icon-ails"></i>
                </div>
                <h5>IoT</h5>
                <p class="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                <div class="features-icons-icon d-flex  icon-bra-ails">
                  <i class="icon-check m-auto text-primary icon-ails"></i>
                </div>
                <h5>Smart Nation</h5>
                <p class="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
