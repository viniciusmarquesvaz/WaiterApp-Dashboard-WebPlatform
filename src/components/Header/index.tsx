import logo from '../../assets/images/logo.svg';
import { Container } from './styles';
import { Content } from './styles';

export const Header = () => {
	return (
		<Container>
			<Content>
				<div className="page-details">
					<h1>pedidos</h1>
					<h2>acompanhe os pedidos dos clientes</h2>
				</div>

				<img src={logo} alt="Waiter app" />
			</Content>
		</Container>
	);
};
