import SalaryCalculator from "./SalaryCalculator";

export const metadata = {
  title: "연봉 실수령액 계산기",
  description:
    "연봉에서 세금과 4대보험을 제외한 실제 월 실수령액을 계산해보세요.",
};

export default function Page() {
  return <SalaryCalculator />;
}
