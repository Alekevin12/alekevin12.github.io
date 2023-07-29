import React from "react";

function SectionBadge({ children }: { children: React.ReactNode}) {
  return (
    <span className="card flex flex-row w-fit p-1 pr-2 text-[10px] text-center align-middle uppercase items-center"> 
      {children}
    </span>
  )
}

function SectionBadgeIcon({ children }: { children: React.ReactNode}) {
  return (<> {children} </>)
}

function SectionBadgeText({ children }: { children: React.ReactNode}) {
  return (<> {children} </>)
}

SectionBadge.Icon = SectionBadgeIcon;
SectionBadge.Text = SectionBadgeText;

export { SectionBadge };