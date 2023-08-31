import {Link} from 'react-router-dom';
import logo from './Logo.png'


function Nav({data}){
    return(
        <div className='border rounded border-secondary-subtle shadow' style={{ position:'fixed',right:'0',left:'0'}} >
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4" style={{ opacity:'0.7'}}  >
              <a class="navbar-brand" href=""><img  src={logo} alt="..." className="rounded img-fluid mx-auto " style={{ width: '4vw'}} /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
            <div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link>                    
                    </li>
                    {
                        data.map(
                            scp=>(
                                <li key={scp.item}>
                                    <Link className="nav-link" to={`${scp.item}`}>{scp.item}</Link>
                                    </li>
                            )
                        )
                    }                        
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )

    
}
export default Nav;