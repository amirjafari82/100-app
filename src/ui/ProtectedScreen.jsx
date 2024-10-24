import { useEffect, useState } from "react";
import styled from "styled-components";

const ScreenWarning = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const ScreenWarningText = styled.p`
    padding: 16px;
    flex-basis: 50%;
    text-align: center;
    font-weight: 500;
    color: #111111;
`;

const ScreenWarningTextBlue = styled.span`
    color: #0f1fd1;
`;

function ProtectedScreen({ children }) {
    const [isPhone, setIsPhone] = useState(
        window.innerWidth > 500 ? false : true
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 500) {
                setIsPhone(false);
            } else {
                setIsPhone(true);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isPhone ? (
                children
            ) : (
                <ScreenWarning>
                    <ScreenWarningText>
                        Please open the application on Phone, or use Responsive
                        Tool in Chrome Browser {isPhone}
                        <ScreenWarningTextBlue>
                            (Screen width below 500px is allowed)
                        </ScreenWarningTextBlue>
                    </ScreenWarningText>
                </ScreenWarning>
            )}
        </>
    );
}

export default ProtectedScreen;
