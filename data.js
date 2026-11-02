"use strict";
// Дані відтворено з навчальної роботи. Незалежно не оновлювалися.
window.SECURITY_DATA = {
  "indicators": [
    {
      "id": "yield",
      "name": "Урожайність зернових культур",
      "detail": "Продовольча складова",
      "year": "2023",
      "value": 51.22,
      "display": "51,22 ц/га",
      "optimum": "45–55 ц/га",
      "comparison": "У межах оптимального інтервалу",
      "status": "Оптимальний",
      "css": "optimal",
      "group": "favorable",
      "source": "AG.YLD.CREL.KG"
    },
    {
      "id": "life-f",
      "name": "Тривалість життя: жінки",
      "detail": "Очікувана при народженні",
      "year": "2024",
      "value": 81,
      "display": "81 рік",
      "optimum": "Від 78 років",
      "comparison": "На 3 роки вище нижньої межі",
      "status": "Оптимальний",
      "css": "optimal",
      "group": "favorable",
      "source": "SP.DYN.LE00.FE.IN"
    },
    {
      "id": "life-m",
      "name": "Тривалість життя: чоловіки",
      "detail": "Очікувана при народженні",
      "year": "2024",
      "value": 77,
      "display": "77 років",
      "optimum": "Від 78 років",
      "comparison": "На 1 рік нижче оптимальної межі",
      "status": "Задовільний",
      "css": "satisfactory",
      "group": "favorable",
      "source": "SP.DYN.LE00.MA.IN"
    },
    {
      "id": "infant-f",
      "name": "Смертність немовлят: дівчатка",
      "detail": "На 1 000 живонароджених",
      "year": "2024",
      "value": 4.4,
      "display": "4,4‰",
      "optimum": "0–4‰",
      "comparison": "На 0,4‰ вище оптимальної межі",
      "status": "Задовільний",
      "css": "satisfactory",
      "group": "favorable",
      "source": "SP.DYN.IMRT.FE.IN"
    },
    {
      "id": "infant-m",
      "name": "Смертність немовлят: хлопчики",
      "detail": "На 1 000 живонароджених",
      "year": "2024",
      "value": 4.9,
      "display": "4,9‰",
      "optimum": "0–4‰",
      "comparison": "На 0,9‰ вище оптимальної межі",
      "status": "Задовільний",
      "css": "satisfactory",
      "group": "favorable",
      "source": "SP.DYN.IMRT.MA.IN"
    },
    {
      "id": "trade",
      "name": "Покриття імпорту експортом",
      "detail": "Експорт / імпорт товарів і послуг",
      "year": "2025",
      "value": 1.053,
      "display": "1,053 раза",
      "optimum": "1,0–1,2 раза",
      "comparison": "У межах оптимального інтервалу",
      "status": "Оптимальний",
      "css": "optimal",
      "group": "favorable",
      "source": "NE.EXP.GNFS.ZS; NE.IMP.GNFS.ZS"
    },
    {
      "id": "rd",
      "name": "Витрати на дослідження та розробки",
      "detail": "Частка R&D у ВВП",
      "year": "2024",
      "value": 0.64,
      "display": "0,64% ВВП",
      "optimum": "Від 3,0% ВВП",
      "comparison": "До задовільного порогу 2%: +1,36 в.п.",
      "status": "Критичний",
      "css": "critical",
      "group": "attention",
      "source": "GB.XPD.RSDV.GD.ZS"
    },
    {
      "id": "inequality",
      "name": "Доходи крайніх децильних груп",
      "detail": "Найбагатші 10% / найбідніші 10%",
      "year": "—",
      "value": null,
      "display": "Немає даних",
      "optimum": "1–4,5 раза",
      "comparison": "Потрібні дві зіставні частки доходів",
      "status": "Не визначено",
      "css": "unknown",
      "group": "unknown",
      "source": "SI.DST.10TH.10; SI.DST.FRST.10"
    },
    {
      "id": "debt",
      "name": "Борг центрального уряду",
      "detail": "Боргове навантаження",
      "year": "2025",
      "value": 31.8,
      "display": "31,8% ВВП",
      "optimum": "0–20% ВВП",
      "comparison": "На 1,8 в.п. вище задовільної межі 30%",
      "status": "Незадовільний",
      "css": "unsatisfactory",
      "group": "attention",
      "source": "Ministry of Finance, Saudi Arabia"
    }
  ],
  "trends": {
    "debt": {
      "title": "Борг центрального уряду",
      "subtitle": "Зміна за 2024–2025 роки · % ВВП",
      "years": [
        2024,
        2025
      ],
      "values": [
        25.9,
        31.8
      ],
      "unit": "% ВВП",
      "max": 40,
      "threshold": 30,
      "thresholdLabel": "Задовільна верхня межа: 30% ВВП",
      "color": "#a46431",
      "takeaway": "Несприятлива тенденція: +5,9 в.п. Борг перейшов із задовільного до незадовільного інтервалу."
    },
    "infant": {
      "title": "Загальна смертність немовлят",
      "subtitle": "Довгострокове порівняння: 2000 та 2024 роки",
      "years": [
        2000,
        2024
      ],
      "values": [
        19.8,
        4.7
      ],
      "unit": "на 1 000 живонароджених",
      "max": 24,
      "threshold": 4,
      "thresholdLabel": "Оптимальна верхня межа: 4 на 1 000",
      "color": "#32664f",
      "takeaway": "Сприятлива тенденція: зниження на 76,26% за 2000–2024 роки. Значення 4,7 ще перевищує оптимальну межу 4 на 1 000."
    }
  }
};
