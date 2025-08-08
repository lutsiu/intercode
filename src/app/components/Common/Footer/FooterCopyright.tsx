export default function FooterCopyright({ dividerColor }: { dividerColor: string }) {
  return (
    <div className="px-[2.4rem] mt-[2.4rem] 2xl:mt-[7.76rem]">
      <div 
        className="w-full h-[0.1rem]" 
        style={{ backgroundColor: dividerColor }} 
      />
      <p className="text-[1.2rem] sm:text-[1.8rem] text-center mt-[0.8rem] sm:mt-[3rem] 2xl:mt-[3.3rem]">
        Copyright © 2025 InterCode | All Rights Reserved 
      </p>
    </div>
  );
}
