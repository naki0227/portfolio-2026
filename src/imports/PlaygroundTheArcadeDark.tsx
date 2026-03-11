import svgPaths from "./svg-0rai1zkhcj";
import imgImage from "figma:asset/55162c0241a0643c2a3436362b5abfedd82ca451.png";
import imgImage1 from "figma:asset/70c32f6b9f315cd7db3a325bf34e77e8cd67985b.png";
import imgImage2 from "figma:asset/1119997dd5e4db6eea2aee4ac35ba9779f4bba41.png";
import imgImage3 from "figma:asset/f45107d7b22a71fda19af61d1dbfd5192fc251de.png";

function OverlayBorder() {
  return (
    <div className="bg-[rgba(238,0,255,0.2)] content-stretch flex items-start px-[17px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[12px] tracking-[1.2px] uppercase w-[129.16px]">
        <p className="leading-[16px]">New Season Live</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[72px] not-italic relative shrink-0 text-[#f1f5f9] text-[72px] tracking-[-3.6px] w-full">
        <p className="mb-0">RETRO</p>
        <p className="bg-clip-text bg-gradient-to-r from-[#e0f] text-[transparent] to-[#00f2ff]">DYNAMICS</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#94a3b8] text-[18px] w-[428.17px]">
        <p className="mb-0">Experience the future of arcade physics. High-</p>
        <p>velocity gameplay meets glassmorphic aesthetics.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[14px] relative shrink-0 w-[11px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
        <g id="Container">
          <path d={svgPaths.p30eba500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e0f] content-stretch flex gap-[8px] items-center px-[32px] py-[17px] relative rounded-[9999px] shadow-[0px_0px_15px_0px_rgba(238,0,255,0.4)] shrink-0" data-name="Button">
      <Container5 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] uppercase w-[140.38px]">
        <p className="leading-[24px]">Start Playing</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(30,41,59,0.5)] content-stretch flex flex-col items-center justify-center px-[33px] py-[17px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] uppercase w-[79.98px]">
        <p className="leading-[24px]">Explore</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <OverlayBorder />
      <Heading />
      <Container3 />
      <Container4 />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(238,0,255,0.2)] relative rounded-[9999px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative w-full">
        <div className="h-[28.5px] relative shrink-0 w-[30px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28.5">
            <path d={svgPaths.p2fc2f800} fill="var(--fill-0, #EE00FF)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FloatingBouncingAnimalIconsRepresentingPhysicsObjects() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[25.09%_62.21%_61.48%_25.09%] items-start" data-name="Floating/Bouncing Animal Icons (Representing physics objects)">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,242,255,0.2)] relative rounded-[9999px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
        <div className="h-[30px] relative shrink-0 w-[21px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 30">
            <path d={svgPaths.p29f43fe0} fill="var(--fill-0, #00F2FF)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[51.72%_25.09%_33.39%_60.75%] items-start" data-name="Container">
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative w-full">
        <div className="flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white w-[48.26px]">
          <p className="leading-[48px]">potted_plant</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[41.11%] items-start" data-name="Container">
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="relative shrink-0 size-[51px]" data-name="Overlay+Border+OverlayBlur">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 51">
        <g data-figma-bg-blur-radius="12" id="Overlay+Border+OverlayBlur">
          <rect fill="var(--fill-0, #EE00FF)" fillOpacity="0.2" height="51" rx="25.5" width="51" />
          <rect height="50" rx="25" stroke="var(--stroke-0, #EE00FF)" strokeOpacity="0.4" width="50" x="0.5" y="0.5" />
          <path d={svgPaths.p261bf80} fill="var(--fill-0, #EE00FF)" id="Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_13_1025_clip_path" transform="translate(12 12)">
            <rect height="51" rx="25.5" width="51" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-[41px] content-stretch flex flex-col items-start left-[41px]" data-name="Container">
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex flex-col items-start left-[17px]" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[1.2px] uppercase w-[218.44px]">
        <p className="leading-[16px]">Live_Physics_Engine v2.0.4</p>
      </div>
    </div>
  );
}

function PhysicsContainerSimulation() {
  return (
    <div className="aspect-square backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] flex-[1_0_0] min-h-px min-w-px relative rounded-[48px]" data-name="Physics Container Simulation">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-px opacity-20" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 549 549\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(38.82 0 0 38.82 274.5 274.5)\\'><stop stop-color=\\'rgba(238,0,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(238,0,255,0)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(238,0,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
        <FloatingBouncingAnimalIconsRepresentingPhysicsObjects />
        <Container6 />
        <Container7 />
        <Container8 />
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center justify-center relative w-full">
        <Container2 />
        <PhysicsContainerSimulation />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative rounded-[48px] shrink-0 w-full" data-name="Hero Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[49px] relative w-full">
          <div className="absolute inset-px opacity-50" data-name="Gradient" style={{ backgroundImage: "linear-gradient(152.255deg, rgba(238, 0, 255, 0.1) 0%, rgba(238, 0, 255, 0) 50%, rgba(0, 242, 255, 0.1) 100%)" }} />
          <Container1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[106.667px] right-px top-px w-[138.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138.667 106.667">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p3bd0c80} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#00f2ff] text-[24px] tracking-[-0.6px] uppercase w-[238.11px]">
        <p className="leading-[32px]">Speed Typing Elite</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] w-[333.73px]">
        <p className="leading-[24px]">Can you beat the world record of 180 WPM?</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[333.73px]" data-name="Container">
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-end mb-[-0.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-right text-white w-[53.56px]">
        <p className="leading-[36px]">124</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.5px] relative shrink-0" data-name="Container">
      <Container16 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] mb-[-0.5px] not-italic relative shrink-0 text-[#00f2ff] text-[12px] text-right tracking-[1.2px] uppercase w-[127.36px]">
        <p className="leading-[16px]">Current Record</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container12 />
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex flex-col items-start p-[25px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular_Italic',sans-serif] h-[98px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[20px] w-[696.13px]">
          <p className="leading-[32.5px] mb-0">The quick brown fox jumps over the lazy dog and enters the</p>
          <p className="mb-0">
            <span className="leading-[32.5px]">{`digital arcade where physics rules and the `}</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid font-['Liberation_Mono:Bold_Italic',sans-serif] leading-[32.5px] not-italic text-[#e0f] underline">gradient</span>
            <span className="leading-[32.5px]">{` never`}</span>
          </p>
          <p className="leading-[32.5px]">fades...</p>
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <OverlayBorder1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-full">
          <p className="leading-[normal]">Start typing here...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(30,41,59,0.5)] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[26px] py-[16px] relative w-full">
          <Container19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#334155] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Input />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(0,242,255,0.2)] content-stretch flex flex-col items-center justify-center px-[25px] py-[13px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#00f2ff] text-[16px] text-center uppercase w-[72.98px]">
        <p className="leading-[24px]">Restart</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Button2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-h-[52px] min-w-px relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[24.5px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative size-full">
        <Margin />
        <Margin1 />
        <Margin2 />
      </div>
    </div>
  );
}

function SpeedTypingMiniGameCard() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative rounded-[48px] self-stretch shrink-0 w-[813.33px]" data-name="Speed Typing Mini-Game Card">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[33px] relative size-full">
          <Container10 />
          <Container11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.pda44380} fill="var(--fill-0, #EE00FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center relative w-full">
        <Container20 />
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[18px] tracking-[1.8px] uppercase w-[155.83px]">
          <p className="leading-[28px]">Leaderboard</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[20px] w-[9.05px]">
          <p className="leading-[28px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
        <p className="leading-[20px]">CyberGhost</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Level 99 Archmage</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[16px] w-[48.02px]">
          <p className="leading-[24px]">28.4k</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[13px] relative w-full">
          <Container22 />
          <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Gradient+Border" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 0, 255) 0%, rgb(147, 51, 234) 100%)" }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
          <Container23 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[20px] w-[12.94px]">
          <p className="leading-[28px]">2</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
        <p className="leading-[20px]">NeonRider</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Drift King</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] w-[48.02px]">
          <p className="leading-[24px]">26.1k</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[13px] relative w-full">
          <Container27 />
          <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Gradient+Border" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 242, 255) 0%, rgb(37, 99, 235) 100%)" }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
          <Container28 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[20px] w-[13.39px]">
          <p className="leading-[28px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
        <p className="leading-[20px]">PixelPanda</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">Legendary</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] w-[48.02px]">
          <p className="leading-[24px]">24.9k</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[13px] relative w-full">
          <Container32 />
          <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Gradient+Border" style={{ backgroundImage: "linear-gradient(135deg, rgb(250, 204, 21) 0%, rgb(249, 115, 22) 100%)" }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
          <Container33 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <OverlayBorder2 />
        <OverlayBorder3 />
        <OverlayBorder4 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-px py-[13px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] text-center tracking-[1.4px] uppercase w-[178.2px]">
          <p className="leading-[20px]">View Full Rankings</p>
        </div>
      </div>
    </div>
  );
}

function LeaderboardStatsCard() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative rounded-[48px] self-stretch shrink-0 w-[394.66px]" data-name="Leaderboard / Stats Card">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Heading3 />
        <Container21 />
        <Button3 />
      </div>
    </div>
  );
}

function DashboardGrid() {
  return (
    <div className="content-stretch flex gap-[24px] h-[402px] items-start justify-center relative shrink-0 w-full" data-name="Dashboard Grid">
      <SpeedTypingMiniGameCard />
      <LeaderboardStatsCard />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[30px] tracking-[-1.5px] uppercase w-[217.38px]">
        <p className="leading-[36px]">Arcade Floor</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] w-[298.11px]">
        <p className="leading-[24px]">The most popular simulations right now</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[298.11px]" data-name="Container">
      <Heading1 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container40 />
    </div>
  );
}

function OverlayBorderOverlayBlur5() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(238,0,255,0.2)] content-stretch flex items-start px-[13px] py-[5px] relative rounded-[16px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[10px] tracking-[1px] uppercase w-[60.11px]">
        <p className="leading-[15px]">Trending</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex flex-col gap-[8px] items-start left-[17px]" data-name="Container">
      <OverlayBorderOverlayBlur5 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] tracking-[-0.8px] uppercase w-[137.53px]">
        <p className="leading-[24px]">Bouncing Panda</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur4() {
  return (
    <div className="aspect-square backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-px" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-[#220f23] inset-px to-[rgba(34,15,35,0)]" data-name="Gradient" />
        <Container45 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <OverlayBorderOverlayBlur4 />
    </div>
  );
}

function OverlayBorderOverlayBlur7() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,242,255,0.2)] content-stretch flex items-start px-[13px] py-[5px] relative rounded-[16px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#00f2ff] text-[10px] tracking-[1px] uppercase w-[80.64px]">
        <p className="leading-[15px]">Multiplayer</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] tracking-[-0.8px] uppercase w-[77.27px]">
        <p className="leading-[24px]">Neon Cat</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex flex-col gap-[8px] items-start left-[17px]" data-name="Container">
      <OverlayBorderOverlayBlur7 />
      <Heading4 />
    </div>
  );
}

function OverlayBorderOverlayBlur6() {
  return (
    <div className="aspect-square backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-px" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage1} />
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-[#220f23] inset-px to-[rgba(34,15,35,0)]" data-name="Gradient" />
        <Container47 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <OverlayBorderOverlayBlur6 />
    </div>
  );
}

function OverlayBorderOverlayBlur9() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(238,0,255,0.2)] content-stretch flex items-start px-[13px] py-[5px] relative rounded-[16px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[10px] tracking-[1px] uppercase w-[63.05px]">
        <p className="leading-[15px]">Pro Level</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex flex-col gap-[8px] items-start left-[17px]" data-name="Container">
      <OverlayBorderOverlayBlur9 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] tracking-[-0.8px] uppercase w-[112.94px]">
        <p className="leading-[24px]">Gravity Frog</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur8() {
  return (
    <div className="aspect-square backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-px" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-[#220f23] inset-px to-[rgba(34,15,35,0)]" data-name="Gradient" />
        <Container49 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <OverlayBorderOverlayBlur8 />
    </div>
  );
}

function OverlayBorderOverlayBlur11() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,242,255,0.2)] content-stretch flex items-start px-[13px] py-[5px] relative rounded-[16px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#00f2ff] text-[10px] tracking-[1px] uppercase w-[54.67px]">
        <p className="leading-[15px]">Popular</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex flex-col gap-[8px] items-start left-[17px]" data-name="Container">
      <OverlayBorderOverlayBlur11 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[16px] tracking-[-0.8px] uppercase w-[105.73px]">
        <p className="leading-[24px]">Electric Fox</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur10() {
  return (
    <div className="aspect-square backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-px" data-name="Image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-[#220f23] inset-px to-[rgba(34,15,35,0)]" data-name="Gradient" />
        <Container51 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <OverlayBorderOverlayBlur10 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[24px] h-[290px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container46 />
      <Container48 />
      <Container50 />
    </div>
  );
}

function GamesSelection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Games Selection">
      <Container37 />
      <Container43 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 max-w-[1400px] p-[24px] right-0 top-[74px]" data-name="Main">
      <HeroSection />
      <DashboardGrid />
      <GamesSelection />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="h-[23px] relative shrink-0 w-[24px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
          <path d={svgPaths.p80d2080} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="h-[14px] relative shrink-0 w-[19.97px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.97 14">
          <path d={svgPaths.p40e1700} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p72a9080} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start justify-center relative size-full">
        <Container53 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-center tracking-[-0.7px] w-[385.08px]">
          <p className="leading-[20px]">© 2024 THE ARCADE - POWERED BY NEON PHYSICS ENGINE</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative w-full">
        <Container52 />
        <Container56 />
      </div>
    </div>
  );
}

function FooterMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[48px] right-0 top-[1635px]" data-name="Footer:margin">
      <Footer />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p27a493c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shadow-[0px_0px_15px_0px_rgba(238,0,255,0.4)] shrink-0" data-name="Background+Shadow">
      <Container58 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Black',sans-serif] font-black from-[#e0f] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[transparent] to-[#00f2ff] tracking-[-1px] uppercase w-[121.11px]">
        <p className="leading-[28px]">The Arcade</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <BackgroundShadow />
        <Heading5 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e0f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[14px] tracking-[1.4px] uppercase w-[111.5px]">
        <p className="leading-[20px]">Playground</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-[129.88px]">
        <p className="leading-[20px]">leaderboards</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-[112.89px]">
        <p className="leading-[20px]">multiplayer</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1.4px] uppercase w-[69.02px]">
        <p className="leading-[20px]">market</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2ab08e80} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(30,41,59,0.5)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#334155] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.pfeb5cc0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#e0f] content-stretch flex items-center justify-center relative rounded-[9999px] shadow-[0px_0px_15px_0px_rgba(238,0,255,0.4)] shrink-0 size-[40px]" data-name="Button">
      <Container61 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function HeaderTopNavigation() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] content-stretch flex items-center justify-between left-0 px-[25px] py-[17px] right-0 top-0" data-name="Header - Top Navigation">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container57 />
      <Nav />
      <Container59 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1809px] min-h-[1809px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Main />
      <FooterMargin />
      <HeaderTopNavigation />
    </div>
  );
}

export default function PlaygroundTheArcadeDark() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Playground: The Arcade (Dark)" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1809\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(169.71 0 0 239.84 -55360 -78239)\\'><stop stop-color=\\'rgba(238,0,255,0.1)\\' offset=\\'0.011785\\'/><stop stop-color=\\'rgba(238,0,255,0)\\' offset=\\'0.011785\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(34, 15, 35) 0%, rgb(34, 15, 35) 100%)" }}>
      <Container />
    </div>
  );
}