import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    bottom: -6px;
    right: 40px;
    z-index: 1;
`;

function Mask() {
    return (
        <Container>
            <svg
                width="358"
                height="131"
                viewBox="0 0 358 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.22">
                    <mask
                        id="mask0_1573_3870"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="358"
                        height="131"
                    >
                        <path
                            d="M342 0H16C7.16344 0 0 7.16345 0 16V115C0 123.837 7.16345 131 16 131H342C350.837 131 358 123.837 358 115V16C358 7.16344 350.837 0 342 0Z"
                            fill="url(#paint0_linear_1573_3870)"
                        />
                    </mask>
                    <g mask="url(#mask0_1573_3870)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M358 20.0383V99.4144C358 112.522 342.999 120.208 331.992 113.092C280.637 79.8886 219.377 52.1971 150.995 31.6873C103.747 17.5144 53.1082 6.76459 0 0H342C350.837 0 358 7.16344 358 16V20.0383Z"
                            fill="#878FE8"
                        />
                    </g>
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_1573_3870"
                        x1="97.5518"
                        y1="-15.1896"
                        x2="294.589"
                        y2="157.359"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" />
                    </linearGradient>
                </defs>
            </svg>
        </Container>
    );
}

export default Mask;
