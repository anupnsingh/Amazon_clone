import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://compote.slate.com/images/8966a9bd-b085-494f-be4a-a136e4ec4c8f.jpeg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Ultimate Harry Potter Collections"
            price={11.96}
            rating={5}
            image="https://www.scholastic.com/content/dam/scholastic/educators/book-lists/Harry-Potter-Book-List_BL_16-9.jpg.corpimagerendition.xxl.1400.788.png"
          />
          <Product
            id="49538094"
            title="BOB MARLEY Poster"
            price={100}
            rating={4}
            image="https://wallup.net/wp-content/uploads/2016/05/02/52498-Bob_Marley-748x421.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />

          <Product
            id="90829332"
            title="Sony Bravia UltraHD 4K Display With Dolby Atmos Sound"
            price={2000}
            rating={4}
            image="https://www.sathya.in/Media/Default/Thumbs/0034/0034850-amstrad-43-am43fhsa-full-hd-smart-led-tv.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
