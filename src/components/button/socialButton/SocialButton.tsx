import { Button, Typography } from "@mui/material";
import { useCallback } from "react";

interface SocialButtonProps {
	icon: React.ReactNode;
	label: string;
	url: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, url }) => {
	const handleClick = useCallback(() => {
		window.open(url, "_blank", "noopener,noreferrer");
	}, [url]);

	return (
		<Button startIcon={icon} onClick={handleClick}>
			<Typography>{label}</Typography>
		</Button>
	);
};

export default SocialButton;
