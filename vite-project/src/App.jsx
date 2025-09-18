import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactImage from './assets/react.svg'
import './App.css'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import Components from './Components'


import Form from './Form'

import FormComponent from './FormComponet'

import DynamicCards from './DynamicCards'

import PropsConcept from './PropsConcept'

import FlipkartCards from './FlipkartCards'

import Image1 from './assets/image1.png'
import Image2 from './assets/image2.png'
import Image3 from './assets/image3.png'
import Image4 from './assets/image4.png'

import ConditionalRendering from './ConditionalRendering'
import CRcards from './CRcards'
import Hook1 from './Hook1'

import UseStateExample from './UseStateExample'

import Cards from './Cards'

function App() {
  var x = 2;
  var arr = ["Hi","Hello"]

  var cards = [
          {
              "image" : ReactImage,
              "price" : 200,
              "brand" : "USPA"
          },
          {
              "image" : ReactImage,
              "price" : 2000,
              "brand" : "Rare Rabbit"
          },
          {
              "image" : ReactImage,
              "price" : 20000,
              "brand" : "THUB"
          }
  
      ]

  var flipkartCards = [

    {
      "image" : Image1,
      "brand" : "BULLSTORM BS ultrapood Bluetooth Gaming",
      "properties" : "Glossy Black, True Wireless",
      "rating" : 3.4,
      "price" : 200
    },
    {
      "image" : Image2,
      "brand" : "myxes New Edition TWS M19 Gaming Earbuds Bluetooth 5.0",
      "properties" : "Black, True Wireless",
      "rating" : 3.6,
      "price" : 249
    },
    {
      "image" : Image3,
      "brand" : "realme Buds Wireless 5 Lite with 35Hrs Playback,12.4mm",
      "properties" : "Void Black, In the Ear",
      "rating" : 4.3,
      "price" : 999
    },
    {
      "image" : Image4,
      "brand" : "boAt Airdopes 161/163 with ASAP Charge & 40 HRS Playback",
      "properties" : "Glossy Black, True Wireless",
      "rating" : 4.2,
      "price" : 2000
    },
    {
      "image" : Image1,
      "brand" : "BULLSTORM BS ultrapood Bluetooth Gaming",
      "properties" : "Glossy Black, True Wireless",
      "rating" : 4.2,
      "price" : 2000
    },
    {
      "image" : Image1,
      "brand" : "BULLSTORM BS ultrapood Bluetooth Gaming",
      "properties" : "Glossy Black, True Wireless",
      "rating" : 4.2,
      "price" : 2000
    },
    {
      "image" : Image1,
      "brand" : "BULLSTORM BS ultrapood Bluetooth Gaming",
      "properties" : "Glossy Black, True Wireless",
      "rating" : 4.2,
      "price" : 2000
    }

  ]
  return (
    <>
      {/* <h1>This is App.jsx Component</h1> */}
      {/* <ClassComponent/>
      <FunctionComponent/>
      <Components/>
      <Form/> */}
      {/* <FormComponent/> */}
      {/* <DynamicCards></DynamicCards> */}

      {/* <PropsConcept Data = {x} MyArray = {arr}/> */}

      {/* <PropsConcept MyCards = {cards}/> */}

      {/* <div className="parent">
         {
            cards.map((ele) => {
                return <PropsConcept Card = {ele}/>
            })
         }
      </div> */}

      {/* <div className="parent-div">
        {
          flipkartCards.map((ele) => {
            return <FlipkartCards Card = {ele} />
          })
        }
      </div> */}

      {/* <ConditionalRendering/>

      <CRcards/>

      <Hook1/> */}

      <Cards/>
      
    </>
  )
}

export default App

