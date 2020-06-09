import React, { Component } from "react";

class Meetings extends Component {
  state = {
    data: [ 
      { id:"1",  title: "SAP Cloud Platform & Design Innovation Webinar Series Turkey", main:"Why participate Participate in our webinar series, SAP experts will be at your disposal to share insights and best practices for using SAP Cloud Platform as a tool for integration and extension of innovative business processes.", date:"8.6.2020", duration:"2 saat", owner:"SAP", image:"https://source.unsplash.com/random/100x100/?meeting" },
      { id:"2",  title: "SAP EHS ile Operasyonel Riskleri Etkili Bir Şekilde Yönetin", main:"SAP EHS içindeki belirli uygulama işlevselliğinin süreçlerinizi İK ve operasyon süreçlerine entegre bir şekilde yönlendirebildiğini biliyor muydunuz?", date:"8.6.2020", duration:"1 saat", owner:"TUBORG", image:"https://source.unsplash.com/random/100x100/?congress" },
      { id:"3",  title: "BTvizyon Dijital - Pandemi Sonrası Turizm", main:"Dijitalleşen tüketici turizm sektöründe köklü değişimin yaşanmasına sebep oldu. Ancak pandemi öncesi, sırası ve sonrası olarak Turizm sektörü 3 ayrı boyuta taşınıyor.", date:"8.6.2020", duration:"3 saat", owner:"RUHUN DOYSUN", image:"https://source.unsplash.com/random/100x100/?event" },
      { id:"4",  title: "Değişen Koşullar Adaptasyon ve Teknoloji ile Rekabetçi Olmak!", main:"Bugünlerde hangi sektörde olursak olalım hepimiz birçok konuda çok hızlı şekilde durumu anlayıp karar verme ihtiyacındayız. Aynı zamanda operasyonel süreçlerdeki zorunlu değişimlere ek olarak regülasyon kurumları ve hissedarlardan gelen taleplerin arttığı bir dönemdeyiz.", date:"8.6.2020", duration:"1,5 saat", owner:"NBA", image:"https://source.unsplash.com/random/100x100/?natural" },
      { id:"5",  title: "LiveWORX 20", main:"LiveWorx, held virtually June 9, 2020, is a one day, complimentary technology event focused on digital transformation. It's designed to educate those in the industrial enterprise on how to achieve business efficiencies, and bring together the digital tools, strategic solutions and emerging technologies that are transforming companies worldwide.", date:"8.6.2020", duration:"0,5 saat", owner:"MINDFULLNESS", image:"https://source.unsplash.com/random/100x100/?blue" },
    ],
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
    eventOwner: [
      "Cisco",
      "Code Runner",
      "Cube",
      "Hayatın Ritmi",
      "IBM",
      "IDC",
      "İzgören Akademi",
      "Goggle",
      "Great Place To Work"
    ]
  };

  render() {
    return (

    <form className="d-flex align-items-center flex-column" style={{ marginBottom: "10vh" }} >
      <div className="form-group text-center" style={{ marginTop: "10vh" }}>
        <h4 class="user-select-none">hap gibi çevrimiçi - online etkinlikler</h4>
      </div>
    
      <div class="btn-group row justify-content-around">
        <div class="col-md-auto" style={{ marginBottom: "3px" }}> 
          <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Etkinlik Alanı Seçiniz
          </button>
          <div class="dropdown-menu">
            {this.state.meetingArea.map((item) => (
            <a class="dropdown-item" href="/" key={item}>{item}</a>
              
            ))}

            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/">Random</a>
          </div>
        </div>
        <div class="col-md-auto" style={{ marginBottom: "3px" }}>
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Etkinlik Düzenleyici Seçiniz
          </button>
          <div class="dropdown-menu">
            {this.state.eventOwner.map((item) => (
              <a class="dropdown-item" href="/" key={item} >{item}</a>

            ))}
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/">Random</a>
          </div>
        </div>
      </div>

      <div class="list-group" style={{ marginTop: "5vh" }}>
        {this.state.data.map((item) => (
          <a href="/" class="list-group-item list-group-item-action flex-column align-items-start" key={item.id} >
            <div className="row">
              <div className="col-auto mr-auto">
                <img src={item.image} class="rounded float-left" alt=""></img>
              </div>
              <div className="col">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{item.title}</h5>
                  <span class="badge badge-secondary h-25">{item.duration}</span>
                  
                </div>
                <p class="mb-1">
                  {item.main}
                </p>
                <small>{item.date} - </small>
                <small>{item.owner}</small>
              </div>
            </div>
          </a>
        ))}
      </div>
    </form>
    );
  }
}

export default Meetings;
