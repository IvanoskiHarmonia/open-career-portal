const LoginPlaceholder = () => {
	return (
		<div className="container" aria-hidden="true">
			<div className="row justify-content-center align">
				<div className="col-8">
					<div className="card my-5">
						<div className="card-body shadow">
							<h2 className="card-title text-center mb-2 placeholder-glow">
								<span className="placeholder col-3"></span>
							</h2>
							<div className="d-flex justify-content-center">
								<button className="btn btn-primary disabled placeholder col-2" href="..." aria-disabled="true"></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPlaceholder;
