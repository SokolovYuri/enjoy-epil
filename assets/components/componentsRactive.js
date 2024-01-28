Ractive.components["button-c"] = Ractive.extend({
  template: `
         
		<a   href="{{link}}" style={{style}} class=" animate__slower button {{classes}} {{isPrimary ? 'primary' : ''}} ">{{label || "Записаться"}}</a>
`,
  data: {
    fields: [
      {
        link: "#",
        classes: "",
        isPrimary: true,
        isAnimate: true,
        label: "Записаться",
      },
    ],
  },
});

Ractive.components["tabs-c"] = Ractive.extend({
  template: `

                                    <div class="faq-content">
                                      {{#each items}}
                                      				<div class="faq-question">
                      												  <input id="q{{@index}}" type="checkbox" class="panel">
                      												  <label for="q{{@index}}" class="panel-title"> <i style="color: rgba(255, 223, 0, 0.8) !important; padding-right:30px;font-size:2rem;font-size:2rem;"
                                                class="fas fa-plus-circle"></i> {{this.title}}</label>
                      												<div class="panel-content">{{>{template : this.content }}}</div>
                      											</div>
                                      {{/each}}
                      						</div>`,
  data: {
    items: [{ title: "TITLE", content: "CONTENTTTT" }],
  },
});

Ractive.components["image-c"] = Ractive.extend({
  template: `
  <div style="width:20rem; display:flex;flex-direction:column;  align-items:center">
    <i style="color: rgba(255, 223, 0, 0.8) !important;font-size:6rem;border: 1px solid rgba(255, 223, 0, 0.8);border-radius: 50%;padding: 30px;font-size:6rem;"
    class="{{imgClass}} "></i>

    <h3 style="text-align:center;padding-top:20px">{{header}}</h3>
   
  <p style="text-align:center">{{content}}</p>
  </div>
`,
  data: {
    imgClass: "",
    header: "",
    content: "",
  },
});

Ractive.components["footer-c"] = Ractive.extend({
  template: `        
			<footer id="footer">
      <div class="row">
        <div class="col-4 col-12-medium">
          <p>
            Адрес : <strong> Gliwice, Norberta Barlickiego 11 </strong>
          </p>


          
        </div>

        <div class="col-4 col-12-medium">
          <ul class="icons">
           <brands-c/>
          </ul>
        </div>

        <div class="col-4 col-12-medium">
          <p style="text-align:left">
            Емейл : <strong> enjoy@epil.com </strong>
          </p>
          <p style="text-align:left">
            Тел : <strong> +48 888 777 333 </strong>
          </p>
        </div>
      </div>


<div class="col-12 col-12-medium">


 <div style="
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    align-self: center;"
 class="mapouter">
      <div class="gmap_canvas">
        <iframe
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Norberta Barlickiego 11,Gliwice&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe
        ><a href="https://embed-googlemap.com">google maps code generator</a>
      </div>
      <style>
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 400px;
        }
        .gmap_canvas {
          border:1px solid  gold;
       
          overflow: hidden;
          background: none !important;
          width: 90%;
          height: 400px;
        }
        .gmap_iframe {
          height: 400px !important;
        }
      </style>
    </div>
    
            
      

</div>




    </footer>

`,
  data: {},
});

Ractive.components["brands-c"] = Ractive.extend({
  template: `      <li>
        <a target="_blank" href="{{@this.generateInstagram()}}"  class="icon brands  fa-instagram">
          <span class="label"></span>
        </a>
      </li>
      <li>
        <a target="_blank" href="{{@this.generateFacebook()}}" class="icon brands  fa-facebook-f">
          <span class="label"></span>
        </a>
      </li>
      <li>
        <a target="_blank" href="{{@this.generateTelegram()}}"  class="icon brands  fa-telegram">
          <span class="label"></span>
        </a>
      </li>
      <li>
        <a target="_blank" href="{{@this.generateWhatsapp()}}" class="icon brands  fa-whatsapp">
          <span class="label"></span>
        </a>
      </li> `,

  generateWhatsapp() {
    // Specify the phone number and message (optional)
    var phoneNumber = "+48790213083";
    var message = "Hello, this is a WhatsApp message!";

    // Generate the WhatsApp link
    var whatsappLink =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect to WhatsApp
    return whatsappLink;
  },
  generateFacebook() {
    // Specify the Facebook username or user ID (or use the full profile URL)
    var usernameOrUserId = "facebookusername"; // Replace with the actual Facebook username or user ID

    // Generate the Facebook link
    var facebookLink = "https://www.facebook.com/" + usernameOrUserId;

    // Redirect to Facebook
    return facebookLink;
  },

  generateTelegram() {
    // Specify the username or phone number (with country code) and message (optional)
    var usernameOrPhone = "+48790213083"; // Replace with the actual username or phone number
    var message = "Hello, this is a Telegram message!";

    // Generate the Telegram link
    var telegramLink = "https://t.me/" + usernameOrPhone;
    if (message) {
      telegramLink += "?text=" + encodeURIComponent(message);
    }

    return telegramLink;
  },

  generateInstagram() {
    // Specify the Instagram username
    var username = "enjoy.epil.pl"; // Replace with the actual Instagram username

    // Generate the Instagram link
    var instagramLink = "https://www.instagram.com/" + username;

    // Redirect to Instagram
    return instagramLink;
  },
});

Ractive.components["header-c"] = Ractive.extend({
  template: `        
		<header id="header">
  <a href="./main_page.html"><img  style="width:4rem" src="./assets/custom/logo_LAST.png" alt="" /></a>

  <h4 style="height: inherit;left: 10%;position: absolute;top: 0;">
    Емейл : enjoy@epil.com <br /> Тел : +48 888 777 333
  </h4>
  <h4 style="height: inherit;left: 30%;position: absolute;top: 15px;">
    Gliwice, Norberta Barlickiego 11 
  </h4>

  <nav id="nav">
    <ul class="icons">
      <brands-c/>

      <li>
        <a href="production.html">Продукция</a>
      </li>
      <li>
        <a>Процедуры</a>
        <ul>
          <li>
            <a href="laser_epilation_info.html">Лазерная эпиляция</a>
          </li>
          <li>
            <a href="electro_epilation_info.html">Электроэпиляция</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="obuchenie.html">Обучение</a>
      </li>
      <li>
        <a href="faq.html">FAQ</a>
      </li>
      <li>
        <a>Язык</a>
        <ul>
          <li>
            <a href="left-sidebar.html">Польский</a>
          </li>
          <li>
            <a href="right-sidebar.html">Украинский</a>
          </li>
          <li>
            <a href="no-sidebar.html">Русский</a>
          </li>
          <li>
            <a href="no-sidebar.html">Английский</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</header>
`,
  data: {},
});
