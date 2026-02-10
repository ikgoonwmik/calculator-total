"use client";
import { useState } from "react";

export default function SalaryCalculator() {
  const [annualSalary, setAnnualSalary] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const salary = Number(annualSalary.replaceAll(",", ""));
    if (!salary) return;

    const monthly = salary / 12;
    const pension = monthly * 0.0475;
    const health = monthly * 0.03595;
    const longTermCare = health * 0.1314;
    const employment = monthly * 0.009;
    const totalInsurance = pension + health + longTermCare + employment;

    let incomeTax = 0;
    if (monthly <= 1060000) incomeTax = 0;
    else if (monthly <= 1500000) incomeTax = 10680;
    else if (monthly <= 2000000) incomeTax = 28910;
    else if (monthly <= 2500000) incomeTax = 48070;
    else if (monthly <= 3000000) incomeTax = 56800;
    else if (monthly <= 3500000) incomeTax = 76800;
    else if (monthly <= 4000000) incomeTax = 100130;
    else if (monthly <= 5000000) incomeTax = 157980;
    else if (monthly <= 6000000) incomeTax = 231980;
    else incomeTax = monthly * 0.06;

    const localTax = incomeTax * 0.1;
    const netMonthly = monthly - totalInsurance - incomeTax - localTax;

    setResult({
      monthly,
      pension,
      health,
      longTermCare,
      employment,
      incomeTax,
      localTax,
      netMonthly,
    });
  };

  const formatNumber = (value) => {
    const onlyNums = value.replace(/[^\d]/g, "");
    return onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">연봉 실수령액 계산기</h1>
      <p className="text-gray-600 mb-8">
        연봉을 입력하면 세금과 4대보험을 제외한 실제 월 실수령액을 계산합니다.
      </p>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <input
          type="text"
          placeholder="연봉 입력 (예: 36,000,000)"
          value={annualSalary}
          onChange={(e) => setAnnualSalary(formatNumber(e.target.value))}
          className="w-full border rounded-lg px-4 py-3 text-lg"
        />
        <button
          onClick={calculate}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg"
        >
          계산하기
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-gray-50 border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">월 실수령액</h2>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            {Math.round(result.netMonthly).toLocaleString()} 원
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>세전 월급: {Math.round(result.monthly).toLocaleString()} 원</li>
            <li>국민연금: -{Math.round(result.pension).toLocaleString()} 원</li>
            <li>건강보험: -{Math.round(result.health).toLocaleString()} 원</li>
            <li>
              장기요양보험: -{Math.round(result.longTermCare).toLocaleString()}{" "}
              원
            </li>
            <li>
              고용보험: -{Math.round(result.employment).toLocaleString()} 원
            </li>
            <li>소득세: -{Math.round(result.incomeTax).toLocaleString()} 원</li>
            <li>
              지방소득세: -{Math.round(result.localTax).toLocaleString()} 원
            </li>
          </ul>
        </div>
      )}

      {/* SEO 텍스트 */}
      <section className="mt-16 text-sm text-gray-600 leading-relaxed space-y-3">
        <h2 className="text-lg font-semibold text-black">연봉 실수령액이란?</h2>
        <p>
          연봉 실수령액은 세전 연봉에서 국민연금, 건강보험, 고용보험, 소득세
          등을 제외하고 실제로 받는 금액을 의미합니다. 같은 연봉이라도 부양가족
          수, 비과세 항목 등에 따라 달라질 수 있습니다.
        </p>
      </section>
    </main>
  );
}
