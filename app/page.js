import Link from "next/link";

export const metadata = {
  title: "직장인 필수 계산기 포털 | 연봉·퇴직금·주휴수당 계산",
  description:
    "연봉 실수령액, 퇴직금, 주휴수당, 연차수당 등 직장인과 알바생을 위한 필수 급여 계산기를 한 곳에서 제공합니다.",
};

const calculators = [
  {
    title: "연봉 실수령액 계산기",
    desc: "4대보험과 세금을 제외한 실제 월급을 계산합니다.",
    href: "/salary",
  },
  {
    title: "퇴직금 계산기",
    desc: "근무 기간과 평균임금을 기준으로 퇴직금을 계산합니다.",
    href: "/severance",
  },
  {
    title: "주휴수당 계산기",
    desc: "근무 시간 기준으로 받을 수 있는 주휴수당을 계산합니다.",
    href: "/weekly-pay",
  },
  {
    title: "연차수당 계산기",
    desc: "사용하지 않은 연차에 대한 수당을 계산합니다.",
    href: "/annual-leave",
  },
  {
    title: "실업급여 계산기",
    desc: "평균임금을 기준으로 예상 실업급여를 계산합니다.",
    href: "/unemployment",
  },
  {
    title: "4대보험 계산기",
    desc: "국민연금, 건강보험, 고용보험 등 보험료를 계산합니다.",
    href: "/insurance",
  },
];

export default function HomePage() {
  return (
    <main
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}
    >
      {/* ✅ SEO 핵심 설명 영역 (광고보다 위에 있어야 함) */}
      <section style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>
          직장인 필수 급여 · 세금 계산기 모음
        </h1>
        <p style={{ lineHeight: 1.8 }}>
          연봉 실수령액, 퇴직금, 주휴수당, 연차수당, 실업급여 등 급여와 관련된
          다양한 계산을 한 번에 확인할 수 있는 계산기 포털입니다. 복잡한 세금과
          4대보험 공제를 반영하여 실제 수령 금액을 쉽게 확인할 수 있도록
          제작되었습니다.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          이직 준비, 연봉 협상, 아르바이트 급여 계산 등 다양한 상황에서 활용할
          수 있으며, 최신 기준을 반영한 계산 결과를 제공합니다. 실제 지급 금액은
          회사 정책이나 개인 조건에 따라 달라질 수 있습니다.
        </p>
      </section>

      {/* 🔥 나중에 광고 넣을 자리 (승인 전엔 비워두거나 주석) */}
      {/*
      <div className="ad-area">광고 영역</div>
      */}

      {/* 계산기 목록 */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {calculators.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "12px",
              padding: "20px",
              textDecoration: "none",
              color: "#111",
              transition: "0.2s",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
              {calc.title}
            </h2>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>
              {calc.desc}
            </p>
          </Link>
        ))}
      </section>

      {/* 추가 설명 섹션 (SEO + 체류시간 증가용) */}
      <section style={{ marginTop: "60px", lineHeight: 1.8 }}>
        <h2>왜 실수령액 계산이 중요할까요?</h2>
        <p>
          많은 직장인과 아르바이트 근로자들은 계약 연봉이나 시급만 알고 실제로
          얼마를 받는지 정확히 모르는 경우가 많습니다. 하지만 국민연금,
          건강보험, 고용보험, 소득세 등 다양한 공제 항목이 적용되기 때문에 실제
          수령 금액은 차이가 발생합니다.
        </p>
        <p>
          본 사이트의 계산기들은 이러한 공제 항목을 반영하여 보다 현실적인
          금액을 예측할 수 있도록 도와줍니다. 급여 협상이나 재무 계획을 세울 때
          유용하게 활용해 보세요.
        </p>
      </section>
    </main>
  );
}
