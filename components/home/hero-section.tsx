import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background bg-dot-grid border-b border-border/40"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-10 px-4 pb-20 pt-24 sm:flex-row sm:items-center min-h-[90dvh]">
        {/* LEFT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Transforming Data into{" "}
            <span className="inline-block bg-primary text-background px-4 py-2 rounded-xl">
              Decisions
            </span>
          </h1>

          <p className="max-w-md text-muted-foreground text-sm">
            Leverage the power of machine learning and AI to unlock insights and
            drive business growth.
          </p>

          <div className="flex items-center gap-5 pt-6">
            <Button className="rounded-full px-6 text-sm font-medium">
              Book a Meeting
            </Button>

            {/* Avatars (shadcn) */}
            <div className="flex -space-x-3">
              <Avatar className="h-8 w-8 border-2 border-background">
                <AvatarImage src="/avatars/user1.jpg" alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>

              <Avatar className="h-8 w-8 border-2 border-background">
                <AvatarImage src="/avatars/user2.jpg" alt="User 2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>

              <Avatar className="h-8 w-8 border-2 border-background">
                <AvatarImage src="/avatars/user3.jpg" alt="User 3" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* RIGHT - Illustration */}
        {/* <div className="flex flex-1 justify-center">
          <img
            src="/hero/robot.png"
            alt="AI Robot"
            className="max-w-sm drop-shadow-[0_0_40px_rgba(0,200,255,0.5)]"
          />
        </div> */}
        <div className="flex-1">
          <div className="mx-auto flex h-64 max-w-sm items-center justify-center rounded-3xl border border-border/60 bg-linear-to-br from-primary/10 via-background to-primary/30 shadow-[0_0_60px_rgba(56,189,248,0.6)]">
            <span className="text-xs font-medium text-muted-foreground">
              {/* Replace with actual image later */}
              3D AI Robot Illustration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
