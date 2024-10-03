import { useState } from "react";
import { getRandomCode } from "../../utils/utils";

function useCode() {
    const [code, setCode] = useState();
    if (!code) setCode(getRandomCode(99999));

    return { code, setCode };
}

export { useCode };
