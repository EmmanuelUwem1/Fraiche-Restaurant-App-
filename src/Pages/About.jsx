import '../App.css'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { ScrollRestoration } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Sections/Footer'
import bannerBackground2 from '../assets/Restaurant Pic3.jpg'

function About(){
    const FadeIn ={
        initial:{
            opacity: 0,
        } ,
        animate:{
            opacity: 1,
            transition:{ duration: .8, type: "tween", ease:"easeInOut"},
        }
    }
    return(

        <>
        <Header />
        <motion.section 
            initial={{ opacity: 0 , x: "2rem"}}
            animate={{ opacity: 1 , x: "0rem"}}
            exit={{ opacity: 0, x: "2rem"}}
            transition={{duration: .5}}
        className="About .ma-tb">
            <motion.div
                  variant={FadeIn}
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{once: true}}
             className="banner-left section-heading ">
                <img src={bannerBackground2} alt="restaurant background image" className='heading-background-img'/>
                <p className="heading-text heading3 left pl2">About Us</p>
            </motion.div>

            <motion.div
            variant={FadeIn}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{once: true}}
             className="text">
                Welcome to Fraiche, where luxury meets exquisite taste. At Frache, we curate an unparalleled dining experience that trancends the ordinary. Our culinary artisans craft ech dish with meticulous attention to detail, using only the finest ingredients sourced from around the globe. Our menu is a symphony of flavours, blending classic elegance with innovative flair, designed to delight even the most discerning palate.
                </motion.div>
            <motion.div
            variant={FadeIn}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{once: true}}
             className="text">
               
                Nestled in the heart of the city, Fraiche Gastronomy boasts an ambiance that exudes sophistication and comfort. Our elegantly designed interiors, coupled with impeccable service, create a serene and intimate atmosphere perfect for any occasion.
                Whether you are indulging in our signature tasting menu or enjoying a bespoke cocktail at our luxurious bar, Fraiche Gastronomy promises an unforgettable journey of culinary excellence. Join us and discover the epitome of redefined dining.     
                </motion.div>

        </motion.section>
        <Footer />
        <ScrollRestoration />
        </>
    )
}

export default About