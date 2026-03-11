import svgPaths from "./svg-1058bsb3g7";

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
        <g id="Container">
          <path d={svgPaths.p9c1d400} fill="var(--fill-0, #EE00FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] w-[84.23px]">
        <p className="leading-[22.5px]">The Forge</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Heading1 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[23.53px]">
        <p className="leading-[20px]">File</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[25.39px]">
        <p className="leading-[20px]">Edit</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[62.28px]">
        <p className="leading-[20px]">Selection</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[57.73px]">
        <p className="leading-[20px]">Terminal</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[30.84px]">
        <p className="leading-[20px]">Help</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
        <Container1 />
        <Nav />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[normal]">Search project commands...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-[11.11%] content-stretch flex flex-col items-start left-[12px] top-[11.11%]" data-name="Container">
      <div className="relative shrink-0 size-[13.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <path d={svgPaths.p2500af80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <Input />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container9 />
      <div className="absolute bg-[#e0f] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-end relative w-full">
        <Container4 />
        <Container7 />
        <div className="relative rounded-[9999px] shrink-0 size-[36px]" data-name="Gradient+Border" style={{ backgroundImage: "linear-gradient(45deg, rgb(238, 0, 255) 0%, rgb(147, 51, 234) 100%)" }}>
          <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavigationBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative shrink-0 w-full z-[2]" data-name="Header - Top Navigation Bar">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[25px] py-[13px] relative w-full">
          <Container />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Project</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[10.667px] relative shrink-0 w-[14.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 10.6667">
        <g id="Container">
          <path d={svgPaths.p36b4ef00} fill="var(--fill-0, #EE00FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[14px] w-[99.72px]">
        <p className="leading-[20px]">the-forge-core</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(238,0,255,0.1)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative w-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[10.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p1c278300} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[72.64px]">
        <p className="leading-[20px]">Cargo.toml</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative w-full">
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[10.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10.6667">
        <g id="Container">
          <path d={svgPaths.p3e864b80} fill="var(--fill-0, #EE00FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[20.44px]">
        <p className="leading-[20px]">src</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative w-full">
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[8px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 8">
        <g id="Container">
          <path d={svgPaths.p98b300} fill="var(--fill-0, #FB923C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[48.48px]">
          <p className="leading-[20px]">main.rs</p>
        </div>
      </div>
    </div>
  );
}

function OverlayVerticalBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[32px] shrink-0 w-full" data-name="Overlay+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e0f] border-l-2 border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[10px] pr-[8px] py-[6px] relative w-full">
          <Container23 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[8px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 8">
        <g id="Container">
          <path d={svgPaths.p98b300} fill="var(--fill-0, #FB923C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[61.55px]">
        <p className="leading-[20px]">engine.rs</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative w-full">
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[8px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 8">
        <g id="Container">
          <path d={svgPaths.p98b300} fill="var(--fill-0, #FB923C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[32.05px]">
        <p className="leading-[20px]">lib.rs</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative w-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] relative w-full">
        <OverlayVerticalBorder />
        <Container25 />
        <Container28 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] relative w-full">
        <Container16 />
        <Container19 />
        <Container22 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container15 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container12 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Tools</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[93.45px]">
        <p className="leading-[20px]">Global Search</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.p18964900} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[100.16px]">
        <p className="leading-[20px]">Source Control</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container37 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p3c480520} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[102.7px]">
        <p className="leading-[20px]">Debug Console</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container40 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[19.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="Container">
          <path d={svgPaths.p19433500} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[73.25px]">
        <p className="leading-[20px]">Extensions</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Container43 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container36 />
      <Container39 />
      <Container42 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container32 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Container11 />
        <Container31 />
      </div>
    </div>
  );
}

function AsideSidebarFileTree() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] content-stretch flex flex-col items-start pr-px relative self-stretch shrink-0 w-[256px]" data-name="Aside - Sidebar: File Tree">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7">
        <g id="Container">
          <path d={svgPaths.p293d1f80} fill="var(--fill-0, #FB923C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[12px] w-[42.47px]">
          <p className="leading-[16px]">main.rs</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g id="Container">
          <path d={svgPaths.p233c0280} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="min-w-[12.020000457763672px] relative shrink-0 w-[34.52px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pl-[22.5px] relative w-full">
        <Container47 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#0d1117] min-w-[140px] relative self-stretch shrink-0" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center min-w-[inherit] pl-[16px] pr-[17px] py-[8px] relative">
          <Container45 />
          <Container46 />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p1cf54bc0} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[63.25px]">
          <p className="leading-[16px]">Cargo.toml</p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g id="Container">
          <path d={svgPaths.p233c0280} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="min-w-[12.020000457763672px] relative shrink-0 w-[13.739px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pl-[1.719px] relative w-full">
        <Container50 />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="min-w-[140px] relative self-stretch shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center min-w-[inherit] pl-[16px] pr-[17px] py-[8px] relative">
          <Container48 />
          <Container49 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] h-[33px] left-0 right-0 top-0" data-name="Tabs">
      <div className="content-stretch flex items-start overflow-clip pb-px relative rounded-[inherit] size-full">
        <BackgroundVerticalBorder />
        <VerticalBorder />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[9px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
        <g id="Container">
          <path d={svgPaths.p3cb704d0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.25px] w-[29.56px]">
        <p className="leading-[15px]">main*</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Container">
          <path d={svgPaths.p181ccb00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.25px] w-[68.75px]">
        <p className="leading-[15px]">Synchronized</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container52 />
      <Container55 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.25px] w-[32px]">
        <p className="leading-[15px]">UTF-8</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.25px] w-[54.47px]">
        <p className="leading-[15px]">Rust 1.76.0</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.25px] w-[71.41px]">
        <p className="leading-[15px]">Line 12, Col 18</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Container">
          <path d={svgPaths.p9a8ae80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[0.25px] w-[76.36px]">
        <p className="leading-[15px]">Forge AI Active</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container59 />
      <Container60 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function FooterStatusBar() {
  return (
    <div className="absolute bg-[rgba(238,0,255,0.9)] content-stretch flex h-[24px] items-center justify-between left-0 px-[16px] right-0 top-[973px]" data-name="Footer Status Bar">
      <Container51 />
      <Container58 />
    </div>
  );
}

function Container66() {
  return (
    <div className="opacity-50 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[8.501px] pr-[8.5px] relative">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[10px] text-center tracking-[-0.5px] uppercase w-[55.022px]">
          <p className="leading-[16.25px]">Zed Engine</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col gap-[3.641px] items-end pb-[24.999px] pt-[28.362px] px-[25px] relative rounded-[48px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.25px_0] rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] h-[72px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[72px] w-[70.906px]">
        <p className="leading-[72px]">dynamic_form</p>
      </div>
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="opacity-50 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[11.253px] pr-[11.251px] relative">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[10px] text-center tracking-[-0.5px] uppercase w-[49.511px]">
          <p className="leading-[16.25px]">Rust Lang</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col gap-[3.536px] items-end pb-[25.002px] pl-[24.278px] pr-[24.671px] pt-[28.46px] relative rounded-[48px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(249,115,22,0.3)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.25px_0] rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Material_Symbols_Outlined:Regular',sans-serif] h-[72px] justify-center leading-[0] not-italic relative shrink-0 text-[#f97316] text-[72px] w-[73.071px]">
        <p className="leading-[72px]">settings_suggest</p>
      </div>
      <Container67 />
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 size-[192px]" data-name="Container">
      <div className="absolute bg-[#e0f] blur-[40px] inset-0 rounded-[9999px]" data-name="Background+Blur" />
      <div className="absolute flex h-[168.182px] items-center justify-center right-[-13.87px] top-[-11.09px] w-[149.712px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-12">
          <OverlayBorderOverlayBlur />
        </div>
      </div>
      <div className="absolute bottom-[-5.98px] flex h-[157.953px] items-center justify-center left-[-7.31px] w-[136.612px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-6 flex-none">
          <OverlayBorderOverlayBlur1 />
        </div>
      </div>
    </div>
  );
}

function Floating3DLikeLogos() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-20 right-[80px] top-[40px]" data-name="Floating 3D-like logos">
      <Container65 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="relative shrink-0 size-[49px]" data-name="Overlay">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        <g id="Overlay">
          <rect fill="var(--fill-0, #EE00FF)" fillOpacity="0.2" height="49" rx="24.5" width="49" />
          <path d={svgPaths.p5480380} fill="var(--fill-0, #EE00FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[24px] w-[216.05px]">
        <p className="leading-[32px]">About The Forge</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[69px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[453.69px]">
        <p className="mb-0">A next-generation collaborative editor built for high-</p>
        <p className="mb-0">performance engineering. Fast as lightning, smart as a</p>
        <p>tanuki.</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-[453.69px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.25px] items-start relative w-full">
        <Heading />
        <Container70 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(238,0,255,0.05)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(238,0,255,0.2)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex gap-[24px] items-start p-[25px] relative w-full">
        <Overlay1 />
        <Container69 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff79c6] text-[14px] w-full">
        <p>
          <span className="leading-[22.75px]">use</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{` forge_core::engine::Forge;`}</span>
        </p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff79c6] text-[14px] w-full">
        <p>
          <span className="leading-[22.75px]">use</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{` std::sync::Arc;`}</span>
        </p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[26.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6272a4] text-[14px] w-full">
        <p className="leading-[22.75px]">{`/// Initializes the futuristic development environment`}</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff79c6] text-[14px] w-full">
        <p>
          <span className="leading-[22.75px]">async fn</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{` `}</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">ignite_the_forge</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{`() -> `}</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#8be9fd]">Result</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{`<(), ForgeError> {`}</span>
        </p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff79c6] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">let</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{` mut editor = Forge::`}</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">new</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">(</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1fa8c]">{`"The Forge v1.0"`}</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">);</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[16px] pt-[26.75px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6272a4] text-[14px] w-full">
          <p className="leading-[22.75px]">{`// Loading neural language models...`}</p>
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">editor.</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">load_plugins</span>
            <span className="leading-[22.75px]">(</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#ff79c6]">vec!</span>
            <span className="leading-[22.75px]">[</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1fa8c]">{`"rust-analyzer"`}</span>
            <span className="leading-[22.75px]">{`, `}</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1fa8c]">{`"tanuki-ai"`}</span>
            <span className="leading-[22.75px]">]).</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#ff79c6]">await</span>
            <span className="leading-[22.75px]">?;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[16px] pt-[26.75px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff79c6] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">match</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{` editor.`}</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">ignite</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{`() {`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">{`Ok(_) => `}</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">println!</span>
            <span className="leading-[22.75px]">(</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1fa8c]">{`"Welcome to the futuristic editor."`}</span>
            <span className="leading-[22.75px]">),</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">{`Err(e) => `}</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">panic!</span>
            <span className="leading-[22.75px]">(</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1fa8c]">{`"Failed to spark the flame: {:?}"`}</span>
            <span className="leading-[22.75px]">, e),</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
          <p className="leading-[22.75px]">{`}`}</p>
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[16px] pt-[26.75px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff79c6] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">Ok</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">(())</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
        <p className="leading-[22.75px]">{`}`}</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[26.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff79c6] text-[14px] w-full">
        <p>
          <span className="leading-[22.75px]">fn</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{` `}</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">main</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{`() {`}</span>
        </p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff79c6] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">let</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">{` runtime = tokio::runtime::Builder::`}</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">new_multi_thread</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#f1f5f9]">()</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">.</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">enable_all</span>
            <span className="leading-[22.75px]">()</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">.</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">build</span>
            <span className="leading-[22.75px]">()</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">.</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">unwrap</span>
            <span className="leading-[22.75px]">();</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[16px] pt-[26.75px] relative w-full">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
          <p>
            <span className="leading-[22.75px]">runtime.</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">block_on</span>
            <span className="leading-[22.75px]">(</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">ignite_the_forge</span>
            <span className="leading-[22.75px]">()).</span>
            <span className="font-['Liberation_Mono:Regular',sans-serif] leading-[22.75px] not-italic text-[#50fa7b]">unwrap</span>
            <span className="leading-[22.75px]">();</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-full">
        <p className="leading-[22.75px]">{`}`}</p>
      </div>
    </div>
  );
}

function RustCode() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Rust Code">
      <Container71 />
      <Container72 />
      <Container73 />
      <Container74 />
      <Container75 />
      <Container76 />
      <Container77 />
      <Container78 />
      <Container79 />
      <Container80 />
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[896px] relative shrink-0 w-[896px]" data-name="Container">
      <OverlayBorder />
      <RustCode />
    </div>
  );
}

function EditorContent() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[37px_0_24px_0] items-start overflow-clip p-[24px]" data-name="Editor Content">
      <Floating3DLikeLogos />
      <Container68 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#e0f] content-stretch flex flex-col items-start opacity-0 px-[12px] py-[6px] right-0 rounded-[9999px] top-[-48px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(238,0,255,0.4),0px_4px_6px_-4px_rgba(238,0,255,0.4)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[188.25px]">
        <p className="leading-[16px]">{`"I've optimized your Cargo.toml!"`}</p>
      </div>
      <div className="absolute bottom-[-5.65px] flex items-center justify-center right-[14.34px] size-[11.314px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <div className="bg-[#e0f] size-[8px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function IconRepresentationOfATanukiAiAssistant() {
  return (
    <div className="h-[38px] relative shrink-0 w-[40px]" data-name="Icon representation of a Tanuki AI assistant">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 38">
        <g id="Icon representation of a Tanuki AI assistant">
          <path d={svgPaths.p153f0d00} fill="var(--fill-0, #EE00FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.03)] relative rounded-[9999px] shrink-0 size-[80px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <IconRepresentationOfATanukiAiAssistant />
        <div className="absolute bg-[#22c55e] bottom-[8px] right-[8px] rounded-[9999px] size-[16px]" data-name="Background+Border">
          <div aria-hidden="true" className="absolute border-2 border-[#0d1117] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[rgba(238,0,255,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="absolute flex inset-[-20px] items-center justify-center">
        <div className="flex-none size-[120px]">
          <div className="bg-[rgba(238,0,255,0.2)] blur-[12px] rounded-[9999px] size-full" data-name="Overlay+Blur" />
        </div>
      </div>
      <OverlayBorderShadowOverlayBlur />
    </div>
  );
}

function TanukiAiAssistant() {
  return (
    <div className="absolute bottom-[40px] content-stretch flex flex-col items-start right-[40px]" data-name="Tanuki AI Assistant">
      <Background />
      <Container91 />
    </div>
  );
}

function SectionMainWindowEditorArea() {
  return (
    <div className="bg-[#0d1117] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Section - Main Window: Editor Area">
      <Tabs />
      <FooterStatusBar />
      <EditorContent />
      <TanukiAiAssistant />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex h-[500px] items-start overflow-clip relative shrink-0 w-full z-[1]" data-name="Main">
      <AsideSidebarFileTree />
      <SectionMainWindowEditorArea />
    </div>
  );
}

export default function AboutTheForgeDark() {
  return (
    <div className="bg-[#0d1117] content-stretch flex flex-col isolate items-start relative size-full" data-name="About: The Forge (Dark)">
      <HeaderTopNavigationBar />
      <Main />
    </div>
  );
}