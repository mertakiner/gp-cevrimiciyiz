import React, { Component } from "react";
import "../../home.css";

class Home extends Component {

  state = {
    meetingArea: [
      "Ar-ge",
      "Post-Covid",
      "Agile",
      "Big Data",
      "Bilim",
      "Cloud",
      "Çocuk Gelişimi",
      "Digital Dönüşüm",
      "Değişim",
      "Eğitim",
      "Ekonomi",
    ],
  };

  render() {
    return (
      <div style={{ marginTop: "10vh" }}>
        <form className="d-flex align-items-center flex-column">
          <div className="form-group text-center">
            <div>
              <h4 class="user-select-none">
                seni geliştirecek, fark yaratacak,
              </h4>
              <h4 class="user-select-none">hap gibi online etkinlikler</h4>
              <a
                href="/gp-cevrimiciyiz/etkinlikler"
                class="btn btn-secondary active"
                role="button"
                aria-pressed="true"
              >
                Etkinlikleri Gör
              </a>
            </div>
            <h3 class="user-select-none p-5">
              <strong>
                Etkinliklerden önceden haberdar olmak ister misin?
              </strong>
            </h3>
            <div className="form-group row akiner" >

              <div className="col">

              <select className="selectpicker" multiple data-live-search="true" title="İlgi Alanlarınız..." >
              {this.state.meetingArea.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
              </select>

              </div> 


                <div className="col">
                    {/* <label for="exampleInputEmail1">E-Mail</label> */}
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="E-Mail"
                      style={{border:"none", backgroundColor:"#F8F9FA"}}
                    />
                </div>

                <div className="col">
                  <button type="submit" className="btn btn-danger btn-block">
                    Abone Ol
                  </button>
                </div>

            </div>



            <div className="p-5">
              <h4 class="user-select-none">
                cevrimiciyiz.com verilerini KVKK'ya uygun işler.
              </h4>
              <h4 class="user-select-none">Pazarlama mailleri göndermez.</h4>

            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
