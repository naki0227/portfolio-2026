import svgPaths from "./svg-p9z8fmhtzx";
import imgImage from "figma:asset/f84ad6d75c01f5865641dba32416e817dee06ff5.png";
import imgAb6AXuA3DrEe9Eotiy6TU1SGrPbvJgPavbvgFuNhjb0ZsqzRXpcScdWpbcLNi1B7GxQngpj32XNk4Lyr7XmxEvrz29XeYba2MNrkotlycxU8BrSsDPa11HQbJUwO2Fl5OlMekpq7KQEaKrNxpvxJb40FOqgXi7YeuT4GQlGn3GlrJhZj9JnGoJEl0V99FvCgsQt6KPlRg882VKxIEddOqPTfL70UaAr7W8R0Z0AGwyqVSuRd8SPz0VBLwXfjwnHaJj0JmXhleyMAt from "figma:asset/e05a639d295749c15cadfb8d310fa9c97b726e8c.png";

function Container3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pb4d1000} fill="var(--fill-0, #EE00FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(238,0,255,0.2)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[32px]" data-name="Overlay">
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[25px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[20px] tracking-[-0.5px] w-[100.86px]">
        <p className="leading-[25px]">The Signal</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Overlay />
        <Heading1 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-[67.59px]">
        <p className="leading-[20px]">Manifesto</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[14px] w-[71.73px]">
        <p className="leading-[20px]">Frequency</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#e0f] text-[14px] w-[57.36px]">
        <p className="leading-[20px]">Connect</p>
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

function NavMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[24px] relative shrink-0" data-name="Nav:margin">
      <Nav />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p6bd8480} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <NavMargin />
        <Button />
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Header - Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(238,0,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pb-[17px] pt-[16px] px-[40px] relative w-full">
          <Container2 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Ab6AXuA3DrEe9Eotiy6TU1SGrPbvJgPavbvgFuNhjb0ZsqzRXpcScdWpbcLNi1B7GxQngpj32XNk4Lyr7XmxEvrz29XeYba2MNrkotlycxU8BrSsDPa11HQbJUwO2Fl5OlMekpq7KQEaKrNxpvxJb40FOqgXi7YeuT4GQlGn3GlrJhZj9JnGoJEl0V99FvCgsQt6KPlRg882VKxIEddOqPTfL70UaAr7W8R0Z0AGwyqVSuRd8SPz0VBLwXfjwnHaJj0JmXhleyMAt() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)]" data-name="AB6AXuA3DREe9EOTIY6__tU1sGRPbvJg-PAVBVGFuNHJB0ZsqzRXpcSCDWpbcLNi1B7GxQngpj32xNk4Lyr7XmxEVRZ29xeYba2mNrkotlycxU8BrSsDPa11hQbJUwO2Fl5OlMEKPQ7kQEaKrNXPVXJb40fOqgXi7yeuT4gQlGN3GlrJhZj9JNGoJ-EL0v99FvCgsQt6KPlRg882vKxIEddOq_pTfL70UaAR7W_8r0z0a-GwyqVSuRD8SPz0vBLwXFJWNHaJj0JmXhleyMAt">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuA3DrEe9Eotiy6TU1SGrPbvJgPavbvgFuNhjb0ZsqzRXpcScdWpbcLNi1B7GxQngpj32XNk4Lyr7XmxEvrz29XeYba2MNrkotlycxU8BrSsDPa11HQbJUwO2Fl5OlMekpq7KQEaKrNxpvxJb40FOqgXi7YeuT4GQlGn3GlrJhZj9JnGoJEl0V99FvCgsQt6KPlRg882VKxIEddOqPTfL70UaAr7W8R0Z0AGwyqVSuRd8SPz0VBLwXfjwnHaJj0JmXhleyMAt} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="max-w-[448px] relative rounded-[48px] shrink-0 w-full" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgba(238, 0, 255, 0.2) 0%, rgba(238, 0, 255, 0) 100%)" }}>
      <div className="flex flex-row items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] p-[32px] relative w-full">
          <div className="absolute bg-size-[24px_22px] bg-top-left inset-0 opacity-10" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Ab6AXuA3DrEe9Eotiy6TU1SGrPbvJgPavbvgFuNhjb0ZsqzRXpcScdWpbcLNi1B7GxQngpj32XNk4Lyr7XmxEvrz29XeYba2MNrkotlycxU8BrSsDPa11HQbJUwO2Fl5OlMekpq7KQEaKrNxpvxJb40FOqgXi7YeuT4GQlGn3GlrJhZj9JnGoJEl0V99FvCgsQt6KPlRg882VKxIEddOqPTfL70UaAr7W8R0Z0AGwyqVSuRd8SPz0VBLwXfjwnHaJj0JmXhleyMAt />
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start px-[20px] relative w-full">
        <Background />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[72px] not-italic relative shrink-0 text-[72px] text-white tracking-[-3.6px] w-full">
        <p className="mb-0">TRANSMIT</p>
        <p className="mb-0 text-[#e0f]">YOUR</p>
        <p>THOUGHTS.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#94a3b8] text-[18px] w-[418.41px]">
        <p className="mb-0">{`Whether it's a whisper or a roar, we're tuned into`}</p>
        <p>your frequency. Send us a message below.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[19.975px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.975 18">
        <g id="Container">
          <path d={svgPaths.p3f627a40} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[10px] tracking-[1px] uppercase w-[40.88px]">
        <p className="leading-[15px]">X-Bird</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Link">
      <Background1 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
        <g id="Container">
          <path d={svgPaths.p2907a160} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[10px] tracking-[1px] uppercase w-[56.19px]">
        <p className="leading-[15px]">Dribbble</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Link">
      <Background2 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[21.5px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.5">
        <g id="Container">
          <path d={svgPaths.p1e1b7400} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[10px] tracking-[1px] uppercase w-[44.41px]">
        <p className="leading-[15px]">GitHub</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Link">
      <Background3 />
      <Container14 />
    </div>
  );
}

function AnimalSilhouetteSocialLinks() {
  return (
    <div className="content-stretch flex gap-[24px] items-center pt-[16px] relative shrink-0 w-full" data-name="Animal Silhouette Social Links">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function LeftColumnBrandingMascot() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Left Column: Branding & Mascot">
      <Margin />
      <Container7 />
      <AnimalSilhouetteSocialLinks />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[88.844px] right-[4px] top-[1.29px] w-[104.158px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.158 88.8444">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p3e501b2c} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] w-full">
          <p className="leading-[normal]">Who are you?</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#1e293b] left-0 right-0 rounded-[48px] top-[24px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[24px] pt-[23px] px-[28px] relative rounded-[inherit] w-full">
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#334155] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] left-[4px] not-italic text-[#e0f] text-[12px] top-[7.5px] tracking-[1.2px] uppercase w-[67.64px]">
        <p className="leading-[16px]">Identity</p>
      </div>
      <Input />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] w-full">
          <p className="leading-[normal]">your@email.com</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#1e293b] left-0 right-0 rounded-[48px] top-[24px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[24px] pt-[23px] px-[28px] relative rounded-[inherit] w-full">
        <Container19 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#334155] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] left-[4px] not-italic text-[#e0f] text-[12px] top-[7.5px] tracking-[1.2px] uppercase w-[93.03px]">
        <p className="leading-[16px]">Coordinate</p>
      </div>
      <Input1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] w-full">
          <p className="leading-[28px]">{`What's the signal?`}</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-[#1e293b] left-0 right-0 rounded-[48px] top-[24px]" data-name="Textarea">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[104px] pt-[20px] px-[28px] relative rounded-[inherit] w-full">
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#334155] border-solid inset-0 pointer-events-none rounded-[48px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] left-[4px] not-italic text-[#e0f] text-[12px] top-[7.5px] tracking-[1.2px] uppercase w-[100.02px]">
        <p className="leading-[16px]">The Message</p>
      </div>
      <Textarea />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[17.6px] relative shrink-0 w-[20.775px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.775 17.6">
        <g id="Container">
          <path d={svgPaths.p2289bd00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[2px] uppercase w-[96.22px]">
        <p className="leading-[28px]">Engage</p>
      </div>
      <Container23 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e0f] content-stretch flex flex-col items-start overflow-clip py-[24px] relative rounded-[48px] shadow-[0px_8px_0px_0px_#9a00a6] shrink-0 w-full" data-name="Button">
      <Container22 />
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Container16 />
        <Container18 />
        <Container20 />
        <Button1 />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(15,23,42,0.5)] relative rounded-[48px] shrink-0 w-full" data-name="Overlay+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[68px] pt-[52px] px-[52px] relative w-full">
          <Container15 />
          <Form />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#1e293b] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[89.92px]">
        <p className="leading-[15px]">Uplink Active</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[10px] tracking-[1px] uppercase w-[92.34px]">
        <p className="leading-[15px]">Latency: 14ms</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <Container25 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function RightColumnContactForm() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Right Column: Contact Form">
      <OverlayBorderShadow />
      <Container24 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <LeftColumnBrandingMascot />
      <RightColumnContactForm />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[80px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[10px] text-center tracking-[3px] uppercase w-[356.78px]">
          <p className="leading-[15px]">© 2024 THE SIGNAL LABS • PROTOCOL v.2.0.4</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(238,0,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[40px] pt-[41px] px-[40px] relative w-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <HeaderNavigation />
      <Main />
      <Footer />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[1216px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function ConnectionTheSignalDark() {
  return (
    <div className="bg-[#220f23] content-stretch flex flex-col items-start relative size-full" data-name="Connection: The Signal (Dark)">
      <Container />
    </div>
  );
}