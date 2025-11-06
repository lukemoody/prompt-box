import { Header } from "@/components/header";
import { PromptBox } from "@/components/prompt-box";

export default function LandingPage() {
  return (
    <>
      <Header hideElements={false} />
      <div
        data-testid="landing-page"
        className="h-screen w-full flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center mx-auto max-w-[688px] w-full text-center space-y-8 mb-8">
          <h1 className="text-foreground font-space-grotesk leading-tight font-medium text-[38px] md:text-[68px]">
            Create your brand in seconds, not weeks.
          </h1>
          <p className="tracking-normal text-[23px] font-regular px-24">
            Bring your brand to life with professional visuals that are ready
            for launch.
          </p>
        </div>
        <PromptBox />
      </div>
    </>
  );
}
