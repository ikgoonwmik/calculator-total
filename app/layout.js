import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://calculator-wk.netlify.app"),
  title: {
    default: "월급 계산기 포털",
    template: "%s | 월급 계산기 포털",
  },
  description:
    "연봉 실수령액, 퇴직금, 주휴수당, 실업급여 등 다양한 급여 계산기를 한 곳에서 제공합니다.",
  keywords: [
    "연봉 계산기",
    "실수령액 계산기",
    "퇴직금 계산기",
    "주휴수당 계산기",
    "급여 계산",
  ],
  authors: [{ name: "WK Calculator" }],
  creator: "WK Calculator",
  publisher: "WK Calculator",

  openGraph: {
    title: "월급 계산기 포털",
    description: "직장인을 위한 필수 급여 계산기 모음 사이트",
    url: "https://calculator-wk.netlify.app",
    siteName: "월급 계산기 포털",
    locale: "ko_KR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
