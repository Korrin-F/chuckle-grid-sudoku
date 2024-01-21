import Image from 'react-bootstrap/Image';
import Logo5 from '../../assets/images/logo_transformed@0.5x.png' ;
import Logo25 from '../../assets/images/logo_transformed@0.25x.png' 
import Logo5redu from '../../assets/images/logo_transformed-redu@0.5x.png' 
import Logo25redu from '../../assets/images/logo_transformed-redu@0.25x.png' 

// const styles = {
//     minWidth: "100%",
// }

function Logo() {
    return (
            <Image fluid
            className="" 
            src={Logo5redu} 
            alt="Chuckle Grid Logo"
            // style={styles}
            />
            )
}

export default Logo;