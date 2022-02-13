import PropTypes from 'prop-types';
import '../css/side-nav.css';

const SideNav = ({ list, currentTab, setTab }) => {
	const tabItems = Object.keys(list)
	return (
		<div className="sidenav">
			{tabItems.map(tab => (
				<button
					className={`tab${currentTab === tab ? ' selected' : ''}`}
					onClick={() => setTab(tab)}
					key={tab}
				>
					{tab}
				</button>
			))}
		</div>
	);
}

export default SideNav;

SideNav.propTypes = {
	list: PropTypes.shape().isRequired,
	currentTab: PropTypes.string.isRequired,
	setTab: PropTypes.func.isRequired,
};
