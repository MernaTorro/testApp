import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>Hej! Merna här</h1>
            <div className="underline"></div>
            <h4>Systemutvecklare.Net student på TUC </h4>
            - 🌱 Det är min sista år på TUC  som system utvecklare .Net student.
            <br />
            - 🔭 Jag leter efter nya utmaninager och min dream job. 
            <br />
            - 🤔 Min slogan : Dream big, work hard & stay humble:)
            <br />
            - 😎 Jag gillar utmaningar och att testa nya lösningar.
            
            <br />
            - 😄 Mina fritidsintressen: målning, fotografering, basketball, simmning, promenera i skogen 💜
           
            <br />
            - 📫 Använd länken nedan för att nå mig :)
            <br />
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
