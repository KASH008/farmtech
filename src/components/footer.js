import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Footer =()=>{
  return(
<div>
        <footer>
         <div>
          © {new Date().getFullYear()}, This is the product of <a href="https://www.kenbro.com"><i>kenbro developers.</i></a>
            Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
         </div> 
        </footer>
</div>

  )
}
export default Footer