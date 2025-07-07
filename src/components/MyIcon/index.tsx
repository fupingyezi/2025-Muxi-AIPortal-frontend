import "./index.scss"

export interface IconProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    url: string;
}

const MyIcon = ({
    width = "3rem",
    height = "3rem",
    borderRadius = "1rem",
    url = "/public/assets/roboto.svg"
}) => {
    return (
        <span style={{ width, height, borderRadius }} className="my-icon">
            <img src={url} style={{ width: "50%", height: "50%" }} />
        </span>
    )
}

export default MyIcon;