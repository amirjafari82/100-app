import { useState } from "react";
import OnboardingElipse from "../ui/OnboardingElipse";
import OnboardingDescription from "../ui/OnboardingDescription";
import OnboardingStatusBar from "../ui/OnboardingStatusBar";
import OnboardingNextButton from "../ui/OnboardingNextButton";
import OnboardingSkip from "../ui/OnboardingSkip";

function Onboarding() {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <OnboardingSkip />
            <OnboardingElipse index={index} />
            <OnboardingStatusBar index={index} />
            <OnboardingDescription index={index} />
            <OnboardingNextButton setIndex={setIndex} index={index} />
        </div>
    );
}

export default Onboarding;
