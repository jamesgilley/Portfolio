import React from 'react'

export default function Portfolio() {
    return (
        <div class="box">
        <div class="box-2">
            <img
            id="pic"
            src="/images.pg/image6.pg.png"
            alt="rent"
            class="float-right"
            />
            <h1>GreenHaus</h1>
            <button
            onClick={() => document.location='https://greenhaus2.herokuapp.com/' }
            >
            Click For Demo
            </button>
        </div>
      <div class="box">
        <div class="box-3">
          <img
            id="pic"
            src="/images.pg/image4.pg.png"
            alt="rent"
            class="float-right"
          />
          <h1>Popcorn Tagger</h1>
          <button
            onClick={() => document.location='https://jamesgilley.github.io/Popcorn-Tagger/' }
          >
            Click For Demo
          </button>
        </div>
      <br />
      <div class="box-4">
        <img
          id="pic1"
          src="/images.pg/image2.pg.png"
          alt="coding"
          class="float-right"
        />
        <h1>Homework4</h1>
        <button
          onClick={() => document.location='https://jamesgilley.github.io/Homework4/' }
        >
          Click For Demo
        </button>
      </div>
      <br />
      <div class="box-5">
        <img
          id="pic2"
          src="/images.pg/image3.pg.png"
          alt="hold you tight"
          class="float-right"
        />
        <h1>Homework5</h1>
        <button
          onClick={() => document.location='https://jamesgilley.github.io/HomeWork5/' }
        >
          Click For Demo
        </button>
      </div>
      <br />
      <div class="box-6">
        <img
          id="pic3"
          src="/images.pg/image5.pg.png"
          alt="hold you tight"
          class="float-right"
        />
        <h1>Homework6</h1>
        <button
          onClick={() => document.location = 'https://jamesgilley.github.io/homework6/'}
        >
          Click For Demo
        </button>
      </div>
    </div>
    </div>
    )
}
