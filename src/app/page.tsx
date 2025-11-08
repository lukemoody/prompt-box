import { PublicHeader } from "@/components/headers/public-header";
import { PromptContainer } from "@/components/prompt/prompt-container";
import { PillBG } from "@/components/pill-bg";

export default function LandingPage() {
  return (
    <>
      <PublicHeader hideElements={false} />
      <div
        data-testid="landing-page"
        className="h-screen w-full flex flex-col md:items-center md:justify-center pt-20"
      >
        <div className="flex flex-col items-center justify-center mx-auto max-w-[720px] w-full text-center space-y-8 mb-8">
          <h1 className="text-foreground font-space-grotesk leading-tight font-medium text-[38px] md:text-[68px]">
            Create your brand in seconds, <PillBG>not weeks.</PillBG>
          </h1>
          <p className="tracking-normal text-base md:text-[23px] font-regular px-8 md:px-6">
            Bring your brand to life with professional visuals that are ready
            for launch.
          </p>
        </div>
        <PromptContainer />
      </div>
    </>
  );
}
