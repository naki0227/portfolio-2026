import svgPaths from "./svg-qolxra5fgy";
import imgImageBorder from "figma:asset/ed52823bb22e0af80c3aaa57384498a0b600c8de.png";
import imgGradientImage from "figma:asset/9c1257f42c464dcdee2dafaad1133a55da37ba82.png";
import imgGradientImage1 from "figma:asset/531570209174553081c3e793982ae2174d1d78e8.png";
import imgGradientImage2 from "figma:asset/e45d0b1866f3bc7b8eba7415d7da450d52b86a97.png";

function SubtleCyanDataStreamLinesBackgroundDecor() {
  return (
    <div className="absolute inset-0 opacity-20" data-name="Subtle Cyan Data-Stream Lines Background Decor">
      <div className="absolute bg-[rgba(0,242,255,0.2)] h-[1024px] left-[320px] top-0 w-px" data-name="Vertical Divider" />
      <div className="-translate-x-1/2 absolute bg-[rgba(0,242,255,0.1)] h-[1024px] left-[calc(50%+0.5px)] top-0 w-px" data-name="Vertical Divider" />
      <div className="absolute bg-[rgba(0,242,255,0.2)] h-[1024px] left-[960px] top-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p245e1900} fill="var(--fill-0, #EE00FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Keyboard() {
  return (
    <div className="absolute bg-[rgba(238,0,255,0.2)] content-stretch flex items-start left-[51.04px] px-[7px] py-px rounded-[16px] top-px" data-name="Keyboard">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[16px] w-[67.22px]">
        <p className="leading-[24px]">Cmd + K</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[26px] relative shrink-0 w-[254.68px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] left-0 not-italic text-[#cbd5e1] text-[16px] top-[12px] w-[47.04px]">
        <p className="leading-[24px]">{`Press `}</p>
      </div>
      <Keyboard />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] left-[136.26px] not-italic text-[#cbd5e1] text-[16px] top-[12px] w-[118.42px]">
        <p className="leading-[24px]">{` to start playing`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative">
        <div className="bg-[#e0f] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <div className="bg-[#00f2ff] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(238,0,255,0.1)] relative rounded-[9999px] shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_30px_0px_rgba(238,0,255,0.2)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[25px] py-[17px] relative w-full">
          <Container2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function CommandPaletteBar() {
  return (
    <div className="absolute bottom-[31.99px] content-stretch flex flex-col items-start left-[416px] max-w-[448px] px-[16px] w-[448px] z-[4]" data-name="Command Palette Bar">
      <OverlayBorderShadowOverlayBlur />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_13_1087)" id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3ef53f80} fill="var(--fill-0, #EE00FF)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1087">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[32px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] w-[178.27px]">
        <p className="leading-[22.5px]">The Shapeshift Forge</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container7 />
        <Heading1 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-[38.25px]">
        <p className="leading-[20px]">Forge</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-[66.47px]">
        <p className="leading-[20px]">Manifesto</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-[57.16px]">
        <p className="leading-[20px]">Artifacts</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[24px] h-[20px] items-start relative shrink-0" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p302c6600} fill="var(--fill-0, #EE00FF)" fillOpacity="0.3" id="Vector" />
          <path d={svgPaths.p33451080} fill="var(--fill-0, #EE00FF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function CrescentMoonTanukiSilhouetteSvg() {
  return (
    <div className="relative shadow-[0px_0px_5px_0px_rgba(238,0,255,0.8)] shrink-0 size-[24px]" data-name="Crescent Moon + Tanuki Silhouette SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Svg1 />
      </div>
    </div>
  );
}

function ToggleButtonCharm() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Toggle Button (Charm)">
      <div aria-hidden="true" className="absolute border-2 border-[#e0f] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_0px_15px_0px_rgba(238,0,255,0.4)]" />
      <CrescentMoonTanukiSilhouetteSvg />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(238,0,255,0.2)]" />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p103a8b00} fill="var(--fill-0, #D2B48C)" id="Vector" />
          <path d={svgPaths.p5612600} fill="var(--fill-0, #5D4037)" id="Vector_2" />
          <path d={svgPaths.p2ba08400} fill="var(--fill-0, #5D4037)" id="Vector_3" />
          <path d={svgPaths.p31660100} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p13072340} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0f172a] content-stretch flex gap-[8px] items-center px-[13px] py-[9px] relative rounded-[32px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.5)] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <Svg2 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[109.95px]">
        <p className="leading-[16px]">Shapeshift to Light</p>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute bottom-[-95%] content-stretch flex flex-col items-start opacity-0 right-0 top-[110%]" data-name="Tooltip">
      <BackgroundBorder />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(238,0,255,0.4)] blur-[1px] left-[10px] opacity-30 rounded-[9999px] size-[4px] top-0" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(238,0,255,0.3)] blur-[1.5px] opacity-30 right-[10px] rounded-[9999px] size-[6px] top-[4px]" data-name="Overlay+Blur" />
      <div className="-translate-x-1/2 absolute bg-[rgba(0,242,255,0.4)] blur-[1px] left-[calc(50%+2px)] opacity-30 rounded-[9999px] size-[4px] top-[8px]" data-name="Overlay+Blur" />
      <ToggleButtonCharm />
      <Tooltip />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2bce57c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(238,0,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container10 />
      <Button />
      <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="Image+Border">
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute left-[5%] max-w-none size-[90%] top-[5%]" src={imgImageBorder} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#e0f] border-solid inset-0 rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.99px] items-center relative">
        <Nav />
        <Container9 />
      </div>
    </div>
  );
}

function HeaderTopNavigation() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(13,17,23,0.8)] relative shrink-0 w-full z-[3]" data-name="Header - Top Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(238,0,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] pl-[40px] pr-[39.99px] pt-[16px] relative w-full">
          <Container6 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="h-[128px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <div className="absolute inset-[15%_10%_5%_10%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102.4 102.4">
          <path d={svgPaths.p330f7cc0} fill="var(--fill-0, #D2B48C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[20%] right-[20%] top-[15%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.8 76.8">
          <path d={svgPaths.p3ae48d00} fill="var(--fill-0, #D2B48C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37%_57%_47%_27%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.48 20.48">
          <path d={svgPaths.p1453a300} fill="var(--fill-0, #5D4037)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37%_27%_47%_57%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.48 20.48">
          <path d={svgPaths.p1453a300} fill="var(--fill-0, #5D4037)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42%_62%_52%_32%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.68 7.68">
          <path d={svgPaths.p1f782500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42%_32%_52%_62%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.68 7.68">
          <path d={svgPaths.p1f782500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15%_20%_55%_20%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-3.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.92 43.52">
            <path d={svgPaths.p32076a80} id="Vector" stroke="var(--stroke-0, #EE00FF)" strokeLinecap="round" strokeWidth="5.12" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45%] left-[15%] right-3/4 top-[40%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 19.2">
          <path d={svgPaths.p23512dc0} fill="var(--fill-0, #EE00FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[45%] left-3/4 right-[15%] top-[40%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 19.2">
          <path d={svgPaths.p23512dc0} fill="var(--fill-0, #EE00FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function StylizedTanukiSvgPlaceholderRepresentation() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)] w-full" data-name="Stylized Tanuki SVG Placeholder Representation">
      <Svg3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[128px]" data-name="Container">
      <StylizedTanukiSvgPlaceholderRepresentation />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#1e293b] content-stretch flex flex-col items-start left-[-80px] opacity-0 p-[13px] rounded-[48px] top-[-48px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.3)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[48px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[12px] w-[157.34px]">
        <p className="leading-[16px]">Ready to forge something?</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="absolute bg-[rgba(238,0,255,0.2)] blur-[20px] inset-[-16px] opacity-0 rounded-[9999px]" data-name="Overlay+Blur" />
      <Container13 />
      <BackgroundBorder1 />
    </div>
  );
}

function TanukiMascotCorner() {
  return (
    <div className="absolute bottom-[95.99px] content-stretch flex flex-col items-start right-[32px] z-[2]" data-name="Tanuki Mascot Corner">
      <Container12 />
    </div>
  );
}

function Shadow() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start justify-center left-[calc(50%-187.3px)] py-[7.5px] shadow-[0px_0px_15px_0px_rgba(238,0,255,0.5)] top-[-8px]" data-name="Shadow">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[72px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[72px] text-center tracking-[-1.8px] w-[442.56px]">
        <p className="leading-[72px]">SHAPESHIFT</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[144px] relative shrink-0 w-[992px]" data-name="Heading 1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[72px] justify-center leading-[0] left-[calc(50%-424.94px)] not-italic text-[72px] text-center text-white top-[35.5px] tracking-[-1.8px] w-[32.72px]">
        <p className="leading-[72px]">{`I `}</p>
      </div>
      <Shadow />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[72px] justify-center leading-[0] left-[calc(50%+237.63px)] not-italic text-[72px] text-center text-white top-[35.5px] tracking-[-1.8px] w-[407.31px]">
        <p className="leading-[72px]">{` IDEAS INTO`}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[72px] justify-center leading-[0] left-1/2 not-italic text-[72px] text-center text-white top-[107.5px] tracking-[-1.8px] w-[316.91px]">
        <p className="leading-[72px]">REALITY.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="absolute bg-[#00f2ff] inset-0 opacity-75 rounded-[9999px]" data-name="Background" />
        <div className="bg-[#00f2ff] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(0,242,255,0.1)] content-stretch flex gap-[8px] items-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,242,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container14 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#00f2ff] text-[12px] text-center tracking-[1.2px] uppercase w-[480.88px]">
        <p className="leading-[16px]">System Online: Neon Magenta Accents | Deep Charcoal Core</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Hero Section">
      <Heading />
      <OverlayBorder />
    </div>
  );
}

function HeroSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[64px] relative shrink-0" data-name="Hero Section:margin">
      <HeroSection />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Visual Design</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <div className="relative shrink-0 size-[22px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p11c2d500} fill="var(--fill-0, #EE00FF)" id="Icon" />
          </svg>
        </div>
        <Container16 />
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="aspect-square bg-[rgba(15,23,42,0.5)] relative rounded-[48px] shrink-0" data-name="Overlay+Border">
      <div className="content-stretch flex flex-col items-start justify-end overflow-clip pb-[25.01px] pt-[229.65px] px-[25px] relative rounded-[inherit] w-full">
        <div className="absolute inset-px opacity-60" data-name="Gradient+Image">
          <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGradientImage} />
            </div>
            <div className="absolute bg-clip-padding bg-gradient-to-t border-0 border-[transparent] border-solid from-[rgba(13,17,23,0.9)] inset-0 to-[rgba(13,17,23,0)]" />
          </div>
        </div>
        <Container15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Web Development</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p18c14180} fill="var(--fill-0, #00F2FF)" id="Icon" />
          </svg>
        </div>
        <Container18 />
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="aspect-square bg-[rgba(15,23,42,0.5)] relative rounded-[48px] shrink-0" data-name="Overlay+Border">
      <div className="content-stretch flex flex-col items-start justify-end overflow-clip pb-[25px] pt-[229.67px] px-[25px] relative rounded-[inherit] w-full">
        <div className="absolute inset-px opacity-60" data-name="Gradient+Image">
          <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGradientImage1} />
            </div>
            <div className="absolute bg-clip-padding bg-gradient-to-t border-0 border-[transparent] border-solid from-[rgba(13,17,23,0.9)] inset-0 to-[rgba(13,17,23,0)]" />
          </div>
        </div>
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">Brand Strategy</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p72a9080} fill="var(--fill-0, #EE00FF)" id="Icon" />
          </svg>
        </div>
        <Container20 />
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="aspect-square bg-[rgba(15,23,42,0.5)] relative rounded-[48px] shrink-0" data-name="Overlay+Border">
      <div className="content-stretch flex flex-col items-start justify-end overflow-clip pb-[25.01px] pt-[229.65px] px-[25px] relative rounded-[inherit] w-full">
        <div className="absolute inset-px opacity-60" data-name="Gradient+Image">
          <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
            <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGradientImage2} />
            </div>
            <div className="absolute bg-clip-padding bg-gradient-to-t border-0 border-[transparent] border-solid from-[rgba(13,17,23,0.9)] inset-0 to-[rgba(13,17,23,0)]" />
          </div>
        </div>
        <Container19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function FeatureGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Feature Grid">
      <OverlayBorder1 />
      <OverlayBorder2 />
      <OverlayBorder3 />
    </div>
  );
}

function FeatureGridMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Feature Grid:margin">
      <FeatureGrid />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(238,0,255,0.6)] tracking-[0.7px] uppercase w-full">
          <p className="leading-[20px]">Projects</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white w-full">
          <p className="leading-[36px]">150+</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(238,0,255,0.05)] flex-[1_0_0] min-h-px min-w-[150px] relative rounded-[48px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[inherit] p-[25px] relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(238,0,255,0.6)] tracking-[0.7px] uppercase w-full">
          <p className="leading-[20px]">Clients</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white w-full">
          <p className="leading-[36px]">85</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-[rgba(238,0,255,0.05)] flex-[1_0_0] min-h-px min-w-[150px] relative rounded-[48px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[inherit] p-[25px] relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(238,0,255,0.6)] tracking-[0.7px] uppercase w-full">
          <p className="leading-[20px]">Uptime</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Liberation_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white w-full">
          <p className="leading-[36px]">∞</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-[rgba(238,0,255,0.05)] flex-[1_0_0] min-h-px min-w-[150px] relative rounded-[48px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[inherit] p-[25px] relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="content-stretch flex gap-[16px] h-[110px] items-start justify-center relative shrink-0 w-full" data-name="Stats Bar">
      <OverlayBorder4 />
      <OverlayBorder5 />
      <OverlayBorder6 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[1024px] relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] pb-[108.17px] pt-[108.16px] px-[16px] relative w-full">
          <HeroSectionMargin />
          <FeatureGridMargin />
          <StatsBar />
        </div>
      </div>
    </div>
  );
}

function MainMargin() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Main:margin">
      <div className="content-stretch flex flex-col items-start px-[128px] relative w-full">
        <Main />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Container">
      <CommandPaletteBar />
      <HeaderTopNavigation />
      <TanukiMascotCorner />
      <MainMargin />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[1024px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function HomeTheCommandCenterDarkWithToggle() {
  return (
    <div className="bg-[#0d1117] content-stretch flex flex-col items-start relative size-full" data-name="Home: The Command Center (Dark) with Toggle">
      <SubtleCyanDataStreamLinesBackgroundDecor />
      <Container />
    </div>
  );
}