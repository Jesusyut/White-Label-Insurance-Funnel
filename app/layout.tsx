import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
const sans=DM_Sans({variable:"--font-sans",subsets:["latin"]});
const serif=Lora({variable:"--font-serif",subsets:["latin"]});
export const metadata:Metadata={metadataBase:new URL("https://desert-shield-quote-funnel.ampleloom32.chatgpt.site"),title:"Auto Insurance Quote | Desert Shield Insurance",description:"Compare personalized auto insurance options with a local independent agent.",openGraph:{title:"A better auto insurance quote starts here.",description:"Simple questions, real local guidance, and no pressure.",images:["/og.png"]},twitter:{card:"summary_large_image",title:"A better auto insurance quote starts here.",description:"Simple questions, real local guidance, and no pressure.",images:["/og.png"]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>}
