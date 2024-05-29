const DropDown = ({ data, setFilter, dropdownName }) => {
	return (
		<div className="dropdown me-1">
			<button
				className="btn btn-outline-primary dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{dropdownName}
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{data.map((item, index) => (
					<li key={index}>
						<button className="dropdown-item" onClick={() => setFilter(item)}>
							{item}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DropDown;
