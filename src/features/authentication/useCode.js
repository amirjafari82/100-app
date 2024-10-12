import { useState } from "react";

export function useCode() {
    const [code, setCode] = useState();

    return { code, setCode };
}
