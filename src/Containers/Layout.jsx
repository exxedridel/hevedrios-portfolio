import Header from '../Components/Header';
import { BodyContainer } from '../Styles/Global.styles';

const Layout = ({ children }) => {

	const bgImage = 'bgImageHome'
	
	return (
		<BodyContainer className={bgImage}>
			<Header />
			{children}
		</BodyContainer>
	);
}

export default Layout