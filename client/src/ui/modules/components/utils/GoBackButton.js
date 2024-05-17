import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import "./GoBackButton.css";

const GoBackButton = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return <ArrowLeft size="20" className="go-back" onClick={handleGoBack} />;
};

export default GoBackButton;
